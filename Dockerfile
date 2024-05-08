FROM node:18-alpine as build-step
RUN npm i -g @angular/cli
COPY ./package.json /base/package.json
WORKDIR /base
RUN npm i
COPY . /base
RUN ng build --aot
EXPOSE 80

FROM nginx:1.17.1-alpine as server-setup-step
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /base/build /usr/share/nginx/html/
