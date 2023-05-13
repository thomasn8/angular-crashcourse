FROM php:8.2.5-fpm-alpine3.16

# Arguments defined in docker-compose.yml
ARG user
ARG uid

RUN apk update && apk add --no-cache \
    vim \
    git \
    curl \
		openssl \
    libpng-dev \
		oniguruma-dev \
    libxml2-dev \
    zip \
    unzip

RUN docker-php-ext-install pdo_mysql mbstring xml ctype bcmath

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Create system user to run Composer and Artisan Commands
RUN adduser -D -u $uid -h /home/$user $user $user && \
    adduser $user $user && \
    adduser $user root && \
    adduser $user www-data && \
    mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

WORKDIR /var/www

# USER $user

COPY start.sh /

CMD ["sh", "/start.sh"]