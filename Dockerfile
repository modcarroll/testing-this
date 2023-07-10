FROM node:16-alpine
COPY javascript/app.js /app/app.js
WORKDIR /app
ENTRYPOINT [“node”, “app.js”]
