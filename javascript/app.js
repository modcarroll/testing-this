import './styles.scss';
import { carouselCustomResponseHandler } from './carouselResponse';

/**
 * Injects a web chat instance into the page.
 */
function addWebChat() {
  // This is the standard web chat configuration object. You can modify these values with the embed code for your
  // own assistant if you wish to try this example with your assistant. You can find the documentation for this at
  // https://web-chat.global.assistant.watson.cloud.ibm.com/docs.html?to=api-configuration#configurationobject.
  const options = {
    integrationID: 'dbda2edc-a701-4558-8cc1-675fbd0242ab',
    region: 'us-east',
    serviceInstanceID: '920dfdd7-fff9-4840-ac91-6cacfe609b37',
    onLoad: webChatOnLoad,
  };

  window.watsonAssistantChatOptions = options;

  const script = document.createElement('script');
  const version = options.clientVersion || 'latest';
  script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${version}/WatsonAssistantChatEntry.js`;
  document.head.appendChild(script);
}

/**
 * This function is called when web chat has been loaded and is ready to be displayed.
 */
function webChatOnLoad(instance) {
  instance.on({
    type: 'customResponse',
    handler: (event, instance) => {
      // The "user_defined_type" property is just an example; it is not required. You can use any other property or
      // condition you want here. This makes it easier to handle different response types if you have more than
      // one custom response type.
      if (event.data.message.user_defined && event.data.message.user_defined.user_defined_type === 'carousel') {
        carouselCustomResponseHandler(event, instance);
      }
    },
  });
  instance.render();
}

// Launch web chat as soon as this script has loaded.
addWebChat();
