const swaggerAutogen = require('swagger-autogen')()

 const doc = {
   "info": {
     "title": 'REST API',
     "description": 'REST API with Express and Firestore'
   },
   //"host": 'localhost:5500',
   "host": 'restapi-p0k2.onrender.com',
   "schemes": [
    "https"
  ],
   "basePath": "/api",
 };

 const outputFile = './swagger_output.json'
 const endpointsFiles = ['./routes/*.js']

 swaggerAutogen(outputFile, endpointsFiles, doc)