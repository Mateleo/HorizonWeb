FROM node:16.12.0-alpine3.12

WORKDIR /app
RUN adduser -HD --uid 1111 api

ADD .env ./
ADD package*.json ./
RUN npm install
ADD . ./
RUN chmod +x ./launch.sh
RUN chmod 777 ./

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

EXPOSE 8081
USER api

CMD /wait && ./launch.sh
