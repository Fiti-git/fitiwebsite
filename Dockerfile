# Build stage
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3200
ENV NODE_OPTIONS="--max-old-space-size=512"

EXPOSE 3200

COPY --from=builder /app/.next/standalone ./ 
COPY --from=builder /app/.next/static ./.next/static 
COPY --from=builder /app/public ./public

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s CMD curl -f http://localhost:3200/ || exit 1

CMD ["node", "server.js"]
