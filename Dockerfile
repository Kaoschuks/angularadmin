FROM node:16-alpine as build-step
RUN npm i -g @angular/cli
COPY ./package.json /website/package.json
WORKDIR /website
RUN npm i
COPY . /website
RUN ng build --aot
EXPOSE 80

FROM nginx:1.17.1-alpine as server-setup-step
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /website/build /usr/share/nginx/html/
