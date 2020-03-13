const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


module.exports = function (app) {
    // Extended: https://swagger.io/specification/#infoObject
    const swaggerOptions = {
        swaggerDefinition: {
            info: {
                title: "Mspr API",
                description: "API de fidélisation de client via un système de couponing.",
                contact: {
                    name: "Sullivan Delaby, Justine Moreau, Jeremy Thery"
                },
                servers: ["http://localhost:3000"]
            }
        },
        apis: ['./src/routes/*.js', 'app.js']
    };

    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

}