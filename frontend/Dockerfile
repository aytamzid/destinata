# FROM node as builder

# WORKDIR /app
# COPY package.json .
# COPY . .
# RUN npm i sharp
# RUN npm run build
# RUN rm -rf src
# RUN rm -rf node_modules

# FROM node:18-alpine as runner
# WORKDIR /app
# RUN npm i next
# COPY --from=builder /app/package.json /app/package-lock.json ./
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/next.config.mjs ./

# EXPOSE 3000

# CMD ["npm", "run", "start"]

FROM node:lts-slim

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
RUN rm -rf src

EXPOSE 3000
CMD ["npm", "run", "start"]