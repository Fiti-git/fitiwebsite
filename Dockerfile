# Use official Node 20 Alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the project
COPY . .

# Build the Next.js project
RUN npm run build

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3200

# Expose the port
EXPOSE 3200

# Start the Next.js server
CMD ["npm", "start"]
