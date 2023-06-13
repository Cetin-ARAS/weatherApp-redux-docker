FROM node:current-alpine3.18
WORKDIR /app
COPY . .
ENV REACT_APP_API_KEY=4e7961cf4460b44aaf06bfad0d1c68e8
RUN yarn install
RUN yarn build
EXPOSE 3000
CMD [ "yarn", "start" ]