FROM maven:3.8-openjdk-17-slim

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn package -DskipTests
EXPOSE 8081

ENTRYPOINT ["java", "-jar", "./target/spring-boot-docker.jar"]
