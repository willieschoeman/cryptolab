FROM node:14.8.0
WORKDIR /opt/cryptolab-backend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start" ]