ARG from=rasa/rasa:2.2.8
FROM ${from}

USER root
RUN useradd -ms /bin/bash bot && mkdir /bot
USER bot

ENV port=5005 \
    model=/bot/src/models/model.tar.gz
    
COPY --chown=bot:bot src /bot/src
EXPOSE 5005
WORKDIR /bot/src

ENTRYPOINT python3 -m rasa run --enable-api \
--port=$port \
--model=$model
