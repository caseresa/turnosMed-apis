const turnoCtrl = {}
const mysqlConnection = require('../database.js');


//get todos los turnos
turnoCtrl.getTurnos = async (req, res) => {
    mysqlConnection.query('SELECT * FROM turnos', (err, rows, fields) => {

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


//new turno
turnoCtrl.createTurno = async(req, res) => {
    const {idPACIENTE, idMEDICO, fecha} = req.body;

    let sql = 'INSERT INTO turnos (idPACIENTE, idMEDICO, fecha) VALUES (?,?,?)';
    var valores = [idPACIENTE, idMEDICO, fecha];

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

module.exports = turnoCtrl;

