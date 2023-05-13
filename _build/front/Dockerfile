FROM node:18-alpine3.16

RUN apk update && apk add --no-cache \
    vim

WORKDIR /app

COPY start.sh /

CMD ["sh", "/start.sh"]