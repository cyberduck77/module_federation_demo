#!/bin/sh

# Replace the PORT placeholder in nginx.conf with the actual PORT environment variable
sed -i "s/listen NGINX_PORT;/listen ${PREFIX_PORT:-8080};/g" /etc/nginx/nginx.conf

# Also find and replace any other occurrences in the built files
find /usr/share/nginx/html -type f -exec sed -i "s/PREFIX_PORT/${PREFIX_PORT:-8080}/g" {} \;

# Start Nginx and PHP-FPM
php-fpm
nginx -g "daemon off;"
