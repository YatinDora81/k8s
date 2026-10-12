FROM oven/bun:1

WORKDIR /app

COPY bun.lock bun.lock
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN bun i

COPY . .

CMD [ "bun" , "start" ]

