FROM node:10-alpine

LABEL maintainer="Satit Rianpit <rianpit@gmail.com>"

WORKDIR /home/smarthealth

RUN apk add --upgrade --no-cache --virtual deps python build-base git

COPY . .

RUN npm i

RUN npm run build

RUN npm i express

CMD [ "node", "server.js" ]

EXPOSE 80
