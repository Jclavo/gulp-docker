# FROM node
FROM node:12-alpine

#set working directory
WORKDIR /usr/app

# install gulp
RUN npm install --global gulp-cli
# RUN npm install -g bower gulp
# RUN bower install --allow-root

# copy files
COPY ./app /usr/app/

# set user as node
RUN chown -R node:node /usr/app/
USER node