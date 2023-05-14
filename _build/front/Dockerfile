FROM node:18-alpine3.16

RUN apk update && apk add --no-cache \
    vim

RUN yarn global add @angular/cli

WORKDIR /app/project

COPY start.sh /

CMD ["sh", "/start.sh"]