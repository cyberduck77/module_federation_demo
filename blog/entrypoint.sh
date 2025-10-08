#!/bin/sh

echo "Waiting for MySQL to be ready..."

# Wait for MySQL connection to be available
until php -r "new PDO('mysql:host=db;port=3306', getenv('DB_USERNAME'), getenv('DB_PASSWORD'));" 2>/dev/null; do
  echo "MySQL is unavailable - sleeping"
  sleep 2
done

echo "MySQL is up - executing migrations"

# Run migrations
php artisan migrate --force

echo "Migrations completed - starting services"

# Start PHP-FPM and Nginx
php-fpm &
nginx -g "daemon off;"
