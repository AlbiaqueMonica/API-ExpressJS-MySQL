module.exports = function(app, databaseService){
    
    app.get('/',(request, response) => {
        response.json({"mensaje": "Todo bien"});
    });

    app.get('/staff', (request, response) => {
        databaseService.leerStaff()
        .then(staff => response.json(staff))
            .catch(e => response.status(500).send(e));
        

    });

    app.post('/staff', (request, response) => {
        const newStaff = request.body;
        console.log(newStaff);

        databaseService.crearStaff(newStaff)
            .then(() => {
                response.json({"mensaje": "Staff Creado"});
            }).catch(e => {
                response.status(500).json(e);
            });
        });
};

