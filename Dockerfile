FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install && npm install nodemon -g && npm cache clean --force
COPY . .
CMD ["npm", "run", "dev"]