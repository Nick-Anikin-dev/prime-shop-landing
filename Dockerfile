# syntax=docker/dockerfile:1

############################
# Stage 1 — build
############################
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Public GA4 id (embedded at build time for static export)
ARG NEXT_PUBLIC_GA_MEASUREMENT_ID=G-4G6MMVBVD8
ENV NEXT_PUBLIC_GA_MEASUREMENT_ID=$NEXT_PUBLIC_GA_MEASUREMENT_ID

# Yandex.Metrika counter id
ARG NEXT_PUBLIC_YM_ID=110831809
ENV NEXT_PUBLIC_YM_ID=$NEXT_PUBLIC_YM_ID

RUN npm run build

############################
# Stage 2 — runtime (nginx)
############################
FROM nginx:alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=15s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
