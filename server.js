const express = require('express') ;

const app = express() ;


const port = process.env.PORT || 3030 ;

app.use(express.static(__dirname + '/client')) ;

app.listen(port, (req, res) => {
    console.log(`port running on port ${port}`) ;
}) ;