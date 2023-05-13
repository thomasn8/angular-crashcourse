
APP_NAME	= appname

COMPOSE_DEV		= -f ./docker-compose.yml -f ./docker-compose.dev.yml
COMPOSE_PROD	= -f ./docker-compose.yml -f ./docker-compose.override.yml

#Dev
DOCKER		= docker compose ${COMPOSE_DEV} -p ${APP_NAME}

#Prod
# DOCKER		= docker compose ${COMPOSE_PROD} ${ENV_FILE} -p ${APP_NAME}

all:	start

start:
			${DOCKER} up -d --build
down:
			${DOCKER} down
re:		down start


certs:
			openssl req -x509 -nodes -days 365 -newkey rsa:2048 -subj '/C=CH/ST=Valais/L=Sierre/O=private/OU=IT/CN=localhost' -keyout _build/nginx/certs/nginx.key -out _build/nginx/certs/nginx.crt
setup:
			${DOCKER} -f ./docker-compose.setup.yml up --build -d
build:
			${DOCKER} build


logs:
			${DOCKER} logs
flogs:
			${DOCKER} logs -f

logsfront:
			${DOCKER} logs front
logsback:
			${DOCKER} logs back
logsnginx:
			${DOCKER} logs nginx


flogsfront:
			${DOCKER} logs -f front
flogsback:
			${DOCKER} logs -f back
flogsnginx:
			${DOCKER} logs -f nginx


refront:
			${DOCKER} restart front
reback:
			${DOCKER} restart back
renginx:
			${DOCKER} restart nginx


runfront:
			${DOCKER} exec front sh
runback:
			${DOCKER} exec back sh
runnginx:
			${DOCKER} exec nginx bash

# mysql --user=... --password=... databasename
runmariadb:
			${DOCKER} exec mariadb bash


.PHONY:		all build start down logs flogs run re
