# Use official Node 20 image
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy rest of the project
COPY . .

# Build Next.js for production
RUN npm run build

# ---------------------------
# Production Image
# ---------------------------
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3200
EXPOSE 3200

# Copy only necessary build output (standalone mode)
COPY --from=builder /app/.next/standalone ./ 
COPY --from=builder /app/.next/static ./.next/static 
COPY --from=builder /app/public ./public

# Run the Next.js server
CMD ["node", "server.js"]
