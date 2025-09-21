FROM node:20 AS build
ARG VITE_BACKEND_URL=https://orange-lamp-7vrj4pv7r9jwhqj5-3001.app.github.dev/
WORKDIR /build 
COPY package.json . 
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx AS final
WORKDIR /usr/share/nginx/html
COPY --from=build /build/dist .