FROM node:16.6-alpine as builder

ARG NPM_TOKEN

WORKDIR /app

RUN apk add --no-cache curl git python3 make g++ && cd /tmp && \
    curl -#L https://github.com/tj/node-prune/releases/download/v1.0.1/node-prune_1.0.1_linux_amd64.tar.gz | tar -xvzf- && \
    mv -v node-prune /usr/local/bin && rm -rvf * && \
    echo "yarn cache clean && node-prune" > /usr/local/bin/node-clean && chmod +x /usr/local/bin/node-clean

ADD yarn.lock package.json .npmrc .yarnrc ./
RUN yarn --frozen-lockfile --non-interactive --network-timeout 1000000
ADD . ./
RUN yarn build

ENV NODE_ENV=production
RUN yarn --frozen-lockfile --non-interactive --production && node-clean

FROM node:16.6-alpine

WORKDIR /app
ENV HOST=0.0.0.0

ADD package.json ./
ADD nuxt.config.js ./

COPY --from=builder ./app/node_modules ./node_modules/
COPY --from=builder ./app/.nuxt ./.nuxt/
COPY --from=builder ./app/static ./src/static/

EXPOSE 8080
CMD ["yarn", "start", "-p", "3000"]
