FROM node:8

#Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

#Bundle app souce
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
