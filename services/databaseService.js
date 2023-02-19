const databaseService = () => {
    const knex = require('knex') ({

        client : 'mysql',
        connection :  {
            host : process.env.DB_HOST,
            port : 3306,
            user : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB,
        }
    });

    const table = "staff";

    const crearStaff = ({FIRST_NAME, LAST_NAME, EMAIL, USERNAME, PASSWORD}) => {
        return knex(table).insert({
            FIRST_NAME: FIRST_NAME,
            LAST_NAME : LAST_NAME,
            EMAIL : EMAIL,
            USERNAME : USERNAME,
            PASSWORD : PASSWORD
        }); // retorna una promesa
    };

    const leerStaff = () => {
        return knex(table).select();
    };
    
    return { crearStaff, leerStaff };
};

module.exports = {
    databaseService
};
