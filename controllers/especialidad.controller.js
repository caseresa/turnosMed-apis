const especialidadCtrl = {}
const mysqlConnection = require('../database.js');


//get todas las especialidades
especialidadCtrl.getEspecialidades = async (req, res) => {
    mysqlConnection.query('SELECT * FROM especialidades', (err, rows, fields) => {

        if (!err) {
            res.json({ 
                ok: true,
                rows: rows,
            });
        } else {
            res.json({ 
                ok: false,
                error: err
            });
        }
    });
}


//new especialidad
especialidadCtrl.createEspecialidad = async(req, res) => {
    const {descripcion} = req.body;

    let sql = 'INSERT INTO especialidades (descripcion) VALUES (?)';
    var valores = [descripcion];

    mysqlConnection.query(sql, valores, (err, rows, fields) => {
        if (!err) {
            res.json({ 
                ok: true 
            });
        } else {
            res.json({ 
                ok: false,
                error: err
            });
        }
    });
};

module.exports = especialidadCtrl;

