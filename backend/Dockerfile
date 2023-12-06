FROM node:21.2.0-alpine3.18

ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

# RUN addgroup app && adduser -S -G app app
# USER app

WORKDIR /app
COPY package.json .
RUN apk add poppler-utils
RUN npm install
COPY . . 

RUN pip install -r requirements.txt 

EXPOSE 3001

CMD ["npm", "start"]