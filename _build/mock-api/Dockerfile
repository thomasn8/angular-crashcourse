FROM node:alpine
EXPOSE 5000
RUN yarn global add json-server cors
WORKDIR /opt
CMD ["json-server", "/opt/db.json", "--host", "mock-api", "--port", "5000"]
# json-server /opt/db.json --host mock-api --port 5000


# FROM node:alpine
# WORKDIR /app
# RUN yarn add json-server cors
# COPY db.json /app
# COPY server.js /app
# EXPOSE 5000
# CMD ["node", "server.js"]


# CMD ["tail", "-f"]