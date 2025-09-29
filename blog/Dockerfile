# Stage 1: Composer dependencies
FROM composer:2.8.9 AS composer

WORKDIR /app
COPY ./composer.json ./composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-scripts

# Stage 2: Node/NPM build
FROM node:22-alpine AS nodebuilder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 3: PHP runtime + Nginx
FROM php:8.2-fpm-alpine as production

# Install system dependencies
RUN apk add --no-cache bash nginx supervisor libpng libpng-dev libjpeg-turbo-dev libwebp-dev zlib-dev libzip-dev oniguruma-dev icu-dev \
    && docker-php-ext-configure gd --with-jpeg --with-webp \
    && docker-php-ext-install pdo pdo_mysql gd zip intl opcache \
    && rm -rf /var/cache/apk/*

# Set working directory
WORKDIR /var/www/html

# Copy PHP dependencies
COPY --from=composer /app/vendor ./vendor

# Copy built assets
COPY --from=nodebuilder /app/public ./public

# Copy the rest of the application
COPY . .

# Clear Laravel cache to prevent issues with missing packages
RUN rm -f bootstrap/cache/*.php && \
    mkdir -p bootstrap/cache && \
    chmod -R 777 bootstrap/cache

# Configure permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage /var/www/html/bootstrap/cache

# Copy Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy Supervisor config (optional for queue workers/schedule)
# COPY docker/supervisord.conf /etc/supervisord.conf

# Expose ports
EXPOSE 80

# Start Nginx and PHP-FPM via supervisord
CMD ["sh", "-c", "php-fpm & nginx -g 'daemon off;'"]
