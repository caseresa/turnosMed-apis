const medicoCtrl = {}
const mysqlConnection = require('../database.js');

//get todos los medicos
medicoCtrl.getMedicos = async (req, res) => {
    mysqlConnection.query('SELECT * FROM medicos', (err, rows, fields) => {

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


//new medico
medicoCtrl.createMedico = async(req, res) => {
    const {nombre, apellido, dni, especialidadID} = req.body;

    let sql = 'INSERT INTO medicos (nombre, apellido, dni, especialidadID) VALUES (?,?,?,?)';
    var valores = [nombre, apellido, dni, especialidadID];

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

module.exports = medicoCtrl;
