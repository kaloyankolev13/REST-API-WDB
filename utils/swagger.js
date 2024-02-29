const swaggerJsDoc = require("swagger-jsdoc");

module.exports.swaggerDocument = () =>{
    const swaggerOptions = {
        swaggerDefinition: {
            info: {
                title: "Task Manager API",
                description: "Task Manager API Information",
                contact: {
                    name: "Name"
                },
                servers: ["http://localhost:3000"]
            }
        },
        apis: ['./docs/**/*.yaml']
    };
    
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    return swaggerDocs;
};