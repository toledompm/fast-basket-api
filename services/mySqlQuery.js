module.exports = (req,res) => {
    req.connection.connect((error) => {
        if(error) {
            res.status(500).json(JSON.stringify(error));
        }
        req.connection.query(req.sql, (error, results) => {
            if(error) {
                res.status(500).json(JSON.stringify(error));
            }
            res.json(results);
        });
    });
};