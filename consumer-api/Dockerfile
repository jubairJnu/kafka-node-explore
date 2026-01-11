FROM node:20

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY src ./src

CMD ["npx", "ts-node", "src/index.ts"]
