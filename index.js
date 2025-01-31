const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 8080;



// Serve the index.html file
app.get('/', (req, res) => {
    const indexHTML = fs.readFileSync(__dirname + '/index.html', 'utf8');
    res.send(indexHTML);
});

// Return token data to the client
app.get('/data', async (req, res) => {
    const user_adress = req.query.adress;

    const options = {method: 'GET'};

    fetch('https://api.getnimbus.io/v2/address/'+user_adress+'/holding?chain=ECLIPSE', options)
      .then(response => response.json())
      .then(response => {
        
            const data = {adress: user_adress, tokens: []};
            for (i in response.data) {
                console.log(response.data[i]);
                data.tokens.push([response.data[i].symbol, response.data[i].amount, response.data[i].price.price] );
            }   
            res.json(data);

      })
      .catch(err => console.error(err));

     
});

app.use(express.static(__dirname))
// ATTENTION CETTE LIGNE RENVOIE TOUT LE CONTENU DU DOSSIER ETRACK
// Y COMPRIS LES JSON ET TRUCS POTENTIELEMENT COMPREMETTANT
// FAIRE EN SORTE QUE L'UTILISATEUR NE PUISSE PAS ACCEDER A CES FICHIERS
// EN UTILISANT QUE LE DOSSIER /PUBLIC
// app.use(express.static(__dirname + '/public'))


app.get("/*", (_, res) => {
    const HTML = fs.readFileSync(__dirname + '/404.html', 'utf8')
    res.send(HTML)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})