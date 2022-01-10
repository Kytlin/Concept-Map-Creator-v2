FROM node:14-alpine3.15

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=9000

EXPOSE 9000

CMD ["npm", "run", "dev"; "npm", "run", "start"]