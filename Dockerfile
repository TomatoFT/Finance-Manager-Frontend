# Use the official Node.js 14 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
RUN npm i -g npm@8.5.1
# Install the app dependencies
RUN npm install

RUN npm install -g @angular/cli

# Copy the app source code to the working directory
COPY . .

# Build the Angular app
CMD [ "ng", "serve", "--host", "0.0.0.0" ]
