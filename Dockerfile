FROM node as build

WORKDIR /usr/src/app

COPY package.json package-lock.json tsconfig.json ./

RUN npm install

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]

# RUN npm run build

# FROM nginx:stable-alpine

# COPY --from=build /dist /usr/share/nginx/html
# COPY --from=build nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 4200

# CMD ["nginx", "-g", "daemon off;"]
