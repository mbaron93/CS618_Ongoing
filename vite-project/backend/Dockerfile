FROM node:20 
WORKDIR /vite-project
COPY package.json package-lock.json ./
RUN npm install
COPY . .

CMD ["npm","start"]