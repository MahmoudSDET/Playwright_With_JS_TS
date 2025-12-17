FROM mcr.microsoft.com/playwright:v1.57.0-jammy

WORKDIR /app

# install Java (LTS)
RUN apt-get update && \
    apt-get install -y openjdk-17-jre-headless && \
    rm -rf /var/lib/apt/lists/*

ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH=$JAVA_HOME/bin:$PATH


COPY package*.json ./
RUN npm install && npm install -g allure-commandline

COPY . .

CMD ["npm", "run", "webTestDockerHeadless"]
