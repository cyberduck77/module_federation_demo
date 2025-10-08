# Stage 1: Build the Vue.js app
FROM node:20-alpine AS builder

# Install pnpm globally (no prompt)
RUN npm install -g pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy source files explicitly
COPY . .

RUN pnpm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine as production

# Copy the build files from the builder stage to the Nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]