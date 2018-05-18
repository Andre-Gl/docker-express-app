# To build/run the dev app:
```
# install dependencies
npm install
# start webpack watch build
npm run build-dev
# start node server
npm start
```
browse 0.0.0.0:8080

# To build/run docker image:
```
# build docker image
docker build -t docker-express-app .
# start docker container
docker run -p 3000:8080 docker-express-app:latest
```
browse 0.0.0.0:3000
