FROM mhart/alpine-node:16

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN cd /app && yarn

ENTRYPOINT ["yarn", "start"]
