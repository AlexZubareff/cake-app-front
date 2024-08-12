FROM node

WORKDIR /usr/src/app

COPY package.json package-lock.json tsconfig.json ./

RUN npm install

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

EXPOSE 3000

CMD ["ng", "serve", "--host", "0.0.0.0"]