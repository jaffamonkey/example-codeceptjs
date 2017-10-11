FROM node:8.5.0-slim

# System dependencies
RUN apt-get update -y \
  && apt-get install -y \
  git \
  bash \
  curl \
  xvfb \
  x11-xkb-utils \
  xfonts-100dpi \
  xfonts-75dpi \
  xfonts-scalable \
  xfonts-cyrillic \
  x11-apps \
  clang \
  libdbus-1-dev \
  libgtk2.0-dev \
  libnotify-dev \
  libgnome-keyring-dev \
  libgconf2-dev \
  libasound2-dev \
  libcap-dev \
  libcups2-dev \
  libxtst-dev \
  libxss1 \
  libnss3-dev \
  gcc-multilib \
  g++-multilib

# App dependencies
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

# Build assets
COPY . ./
RUN chmod +x /app/docker/entrypoint

# Default runtime configs and helpers
EXPOSE 8080
ENTRYPOINT ["/app/docker/entrypoint"]
CMD yarn test
