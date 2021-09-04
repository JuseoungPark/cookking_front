FROM openjdk:14-jdk-alpine
EXPOSE 8080
RUN mkdir -p /app/logs/
WORKDIR /app
COPY ./build/libs/Cookking-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-Dspring.profiles.active=prod", "-jar", "app.jar"]
