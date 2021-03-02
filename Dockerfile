FROM node

RUN mkdir app

WORKDIR app

COPY package*.json ./

COPY ormconfig.json .

COPY tsconfig.json .

COPY nodemon.json .

RUN npm install

COPY . .

CMD npm run start
