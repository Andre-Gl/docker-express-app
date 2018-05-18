FROM node:carbon

WORKDIR /usr/src/
COPY ./ ./

# node_modules for container
RUN npm install

# webpack build
RUN npm run build

EXPOSE 8080
CMD [ "npm", "start" ]
