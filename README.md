To build/run the app:
* npm install
* npm run build
* npm start
* browse 0.0.0.0:8080

To build/run docker image:
* docker build -t docker-express-app .
* docker run -p 3000:8080 docker-express-app:latest
* browse 0.0.0.0:3000
