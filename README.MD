# Mail Sender

---

## Install step

1. copy .env.example to .env
2. edit .env
3. run `npm install`
4. run `npm run dev`
5. test your mail sender API.

## Use docker

1. run `docker build -t mail-sender .`
2. run `docker run -d -p 3000:3000 mail-sender`
3. test your mail sender API.

## Use docker-compose

(option) edit docker-compose.yml network.

1. run `docker-compose up -d`
2. test your mail sender API.