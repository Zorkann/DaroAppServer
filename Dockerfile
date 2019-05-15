FROM node

RUN mkdir app

WORKDIR app

COPY app/package.json .

COPY app/ormconfig.json .

COPY app/tsconfig.json .

RUN npm install

COPY app/src ./src

CMD npm run start:watch
