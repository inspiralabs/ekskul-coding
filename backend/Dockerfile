# Backend Smart Room Monitor untuk VPS Inspiralabs (docker-compose.yml di root repo).
FROM node:22-bookworm-slim
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY --chown=node:node . .
USER node
ENV PORT=3000
EXPOSE 3000
CMD ["node", "server.js"]
