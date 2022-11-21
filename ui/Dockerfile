ARG from=node:19.1.0-alpine3.16
FROM ${from}

USER root

RUN addgroup -S aifactory && adduser -S aifactory -G aifactory
USER aifactory
ENV port=80
COPY --chown=aifactory:aifactory ui /ui
WORKDIR /ui
RUN npm install && \
    npm install serve && \
    npm run build

ENTRYPOINT npx serve --listen $port --single build
