# Stage 1: Build the Vue.js app
FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files explicitly
COPY . .

RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy the build files from the builder stage to the Nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy and make entrypoint script executable
COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

# Expose port 80
EXPOSE 80

# Use our entrypoint script
ENTRYPOINT ["entrypoint.sh"]
