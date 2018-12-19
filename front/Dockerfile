FROM node:latest

RUN npm install -g webpack@3.8.1
# RUN npm install -g webpack-dev-server@2.9.4
RUN npm install -g yarn
COPY ./package.json /app/package.json
COPY ./webpack.config.js /app/webpack.config.js
WORKDIR /app
RUN yarn



