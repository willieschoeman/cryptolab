FROM node:14.8.0
WORKDIR /opt/cryptolab-frontend
COPY package.json .
RUN npm install
RUN npm install -g @angular/cli
COPY . .
EXPOSE 4200
CMD ng serve --host 0.0.0.0