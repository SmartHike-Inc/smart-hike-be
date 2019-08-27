const express = require('express');
const app = express();

app.use((req, res) => {
   res.json({message: 'SmartHike to the world'});
});

app.listen(3000, () => console.log('Server is up'));
