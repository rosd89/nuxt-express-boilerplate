FROM node:10

WORKDIR /app
ADD . /app/

RUN npm ci
RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD [ "npm", "start" ]
