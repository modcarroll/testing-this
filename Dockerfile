FROM node:16-alpine
COPY ./javascript /app/javascript
COPY ./react /app/react

WORKDIR /app/javascript
RUN npm install
RUN ["npm", "run", "start"]
