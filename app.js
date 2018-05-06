const express = require('express')
const app = express();
var path = require('path');

app.use(express.static(__dirname + '/resources'));
app.get('/',  function(req, res) {
    res.sendFile(path.join(__dirname + '/demo.html'));
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
    console.log('Example app listening on port ' + app.get('port') );
});
