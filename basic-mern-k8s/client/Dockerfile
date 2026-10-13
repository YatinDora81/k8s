FROM node:25-alpine

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm i

RUN npm i -g typescript

COPY . .

EXPOSE 5173

CMD [ "npm" , "run" , "dev" , "--" , "--host" , "0.0.0.0" ]
