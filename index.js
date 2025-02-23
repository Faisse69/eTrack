const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8080;


const { inject } = require('@vercel/analytics');
const { injectSpeedInsights } = require('@vercel/speed-insights');


var visites = 0;

// Serve the index.php file
app.get('/', (req, res) => {
    const indexHTML = fs.readFileSync(__dirname + '/index.php', 'utf8');
    inject();
    injectSpeedInsights();
    visites++;
    console.log(visites);
    res.send(indexHTML);
});




//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Return token data to the client for ECLIPSE
app.get('/data_eclipse_tokens', async (req, res) => {
    inject();
    const user_address = req.query.address;
    // Fetch token data from the APi for ECLIPSE
    const options = {method: 'GET'};
    fetch('https://api.getnimbus.io/v2/address/'+user_address+'/holding?chain=ECLIPSE', options)
      .then(response_token => response_token.json())
      .then(response_token => {
        const data_eclipse_tokens = {address: user_address, ETH_price:0 , tokens: []};
        for (i in response_token.data) {
          data_eclipse_tokens.tokens.push(
              {
                symbol: response_token.data[i].symbol, 
                amount: response_token.data[i].amount, 
                price: response_token.data[i].price.price, 
                contractAddress: response_token.data[i].contractAddress, 
                logo: response_token.data[i].logo, 
                value: (response_token.data[i].price.price * response_token.data[i].amount),
                chain: response_token.data[i].chain
              }
          );
          if(response_token.data[i].contractAddress == "So11111111111111111111111111111111111111112"){
            data_eclipse_tokens.ETH_price = response_token.data[i].price.price;
          }
        }   
        //renvoyer les data au client
        res.json(data_eclipse_tokens);
      })
      .catch(err => console.error(err));
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Return nft data to the client for ECLIPSE
app.get('/data_eclipse_nft', async (req, res) => {
  const user_address = req.query.address;
  // Fetch NFT data from the APi for ECLIPSE
  const options = {method: 'GET'};
  fetch('https://api.getnimbus.io/v2/address/'+user_address+'/nft-holding?chain=ECLIPSE', options)
    .then(response_nft => response_nft.json())
    .then(response_nft => {
        const data_eclipse_nft = {nft: []};
        for (i in response_nft.data) {
          data_eclipse_nft.nft.push(
              {
                collection: response_nft.data[i].collection, 
                floorPrice: response_nft.data[i].floorPrice, 
                id: response_nft.data[i].collectionId
              }
            );
        }  
        //renvoyer les data au client
        res.json(data_eclipse_nft);
    })          
    .catch(err => console.error(err));
});
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Return defi data to the client for ECLIPSE
app.get('/data_eclipse_defi', async (req, res) => {
  const user_address = req.query.address;
  // Fetch DeFi data from the APi for ECLIPSE
  const options = {method: 'GET'};
  fetch('https://api.getnimbus.io/v2/address/'+user_address+'/positions?chain=ECLIPSE', options)
    .then(response_defi => response_defi.json())
    .then(response_defi => {
      const data_eclipse_defi = {defi: [], alldefi: response_defi.data};
      for (i in response_defi.data) {
        if(response_defi.data[i].type=="Borrow" || response_defi.data[i].type=="Lending"){ //si c'est lengin ou borrowing
          data_eclipse_defi.defi.push(
            {
              type: response_defi.data[i].type,
              protocol: response_defi.data[i].meta.protocol, 
              lend: response_defi.data[i].input,
              borrow: response_defi.data[i].current.tokens
            }
          );   
        }
        else{ //autres que lending/borrowing
          let forPush_defi_value = 0;
          for (j in response_defi.data[i].current.tokens){
            forPush_defi_value = forPush_defi_value + response_defi.data[i].current.tokens[j].value;
          }
          data_eclipse_defi.defi.push(
            {
              type: response_defi.data[i].type,
              protocol: response_defi.data[i].meta.protocol, 
              tokens: response_defi.data[i].current.tokens, 
              value: forPush_defi_value
            }
          );
        }
      }  
      //renvoyer les data au client
      res.json(data_eclipse_defi);
    })
    .catch(err => console.error(err));
});



//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Return token data to the client for SOLANA
app.get('/data_solana_tokens', async (req, res) => {
  const user_address = req.query.address;
  // Fetch token data from the APi for SOLANA
  const options = {method: 'GET'};
  fetch('https://api.getnimbus.io/v2/address/'+user_address+'/holding?chain=SOL', options)
    .then(response_token => response_token.json())
    .then(response_token => {
      const data_solana_tokens = {address: user_address, ETH_price:0 , tokens: []};
      for (i in response_token.data) {
        data_solana_tokens.tokens.push(
            {
              symbol: response_token.data[i].symbol, 
              amount: response_token.data[i].amount, 
              price: response_token.data[i].price.price, 
              contractAddress: response_token.data[i].contractAddress, 
              logo: response_token.data[i].logo, 
              value: (response_token.data[i].price.price * response_token.data[i].amount),
              chain: response_token.data[i].chain
            }
        );
        if(response_token.data[i].contractAddress == "So11111111111111111111111111111111111111112"){
          data_solana_tokens.ETH_price = response_token.data[i].price.price;
        }
      }   
      //renvoyer les data au client
      res.json(data_solana_tokens);
    })
    .catch(err => console.error(err));
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Return nft data to the client for SOLANA
app.get('/data_solana_nft', async (req, res) => {
const user_address = req.query.address;
// Fetch NFT data from the APi for SOLANA
const options = {method: 'GET'};
fetch('https://api.getnimbus.io/v2/address/'+user_address+'/nft-holding?chain=SOL', options)
  .then(response_nft => response_nft.json())
  .then(response_nft => {
    console.log(response_nft);
      const data_solana_nft = {nft: []};
      for (i in response_nft.data) {
        data_solana_nft.nft.push(
            {
              collection: response_nft.data[i].collection, 
              floorPrice: response_nft.data[i].floorPrice, 
              id: response_nft.data[i].collectionId
            }
          );
      }  
      //renvoyer les data au client
      res.json(data_solana_nft);
  })          
  .catch(err => console.error(err));
});
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Return defi data to the client for SOLANA
app.get('/data_solana_defi', async (req, res) => {
const user_address = req.query.address;
// Fetch DeFi data from the APi for SOLANA
const options = {method: 'GET'};
fetch('https://api.getnimbus.io/v2/address/'+user_address+'/positions?chain=SOL', options)
  .then(response_defi => response_defi.json())
  .then(response_defi => {
    const data_solana_defi = {defi: []};
    for (i in response_defi.data) {
      let forPush_defi_value = 0;
      for (j in response_defi.data[i].current.tokens){
        forPush_defi_value = forPush_defi_value + response_defi.data[i].current.tokens[j].value;
      }
      data_solana_defi.defi.push(
        {
          protocol: response_defi.data[i].meta.protocol, 
          tokens: response_defi.data[i].current.tokens, 
          value: forPush_defi_value
        }
      );
    }  
    //renvoyer les data au client
    res.json(data_solana_defi);
  })
  .catch(err => console.error(err));
});





// app.use(express.static(__dirname))
// ATTENTION CETTE LIGNE RENVOIE TOUT LE CONTENU DU DOSSIER ETRACK
// Y COMPRIS LES JSON ET TRUCS POTENTIELEMENT COMPREMETTANT
// FAIRE EN SORTE QUE L'UTILISATEUR NE PUISSE PAS ACCEDER A CES FICHIERS
// EN UTILISANT QUE LE DOSSIER /PUBLIC
app.use(express.static(__dirname + '/public'))


app.get("/*", (_, res) => {
    const HTML = fs.readFileSync(__dirname + '/404.html', 'utf8')
    res.send(HTML)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
