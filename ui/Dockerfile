ARG from=node:14.15.4-alpine3.12
FROM ${from}

USER root

RUN addgroup -S ui && adduser -S ui -G ui
USER ui
ENV port=5000
COPY --chown=ui:ui ui /ui
WORKDIR /ui
RUN npm install && \
    npm install serve && \
    npm run build

ENTRYPOINT npx serve --listen $port --single build
