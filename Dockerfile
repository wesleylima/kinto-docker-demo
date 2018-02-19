FROM node:carbon
RUN mkdir /src/
WORKDIR /src/
RUN git clone https://github.com/Kinto/kinto-admin.git
WORKDIR /src/kinto-admin

RUN npm install

COPY index.js /src/test-kinto-admin/src/index.js

CMD ["npm", "run", "start"]
