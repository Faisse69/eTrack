//DISIGN AU SCROLL

function scroll(){
    const doc_element = document.documentElement;
    const scroll_top = doc_element.scrollTop;

    if((scroll_top) == 0){ // tt en haut de la page
        header.setProperty("background", "linear-gradient(to bottom, transparent, transparent)");
        footer_header.setProperty("background", "linear-gradient(to top, transparent, transparent)");
        form_header_input.setProperty("background-color", "transparent");
        form_header_button.setProperty("background-image", "url('images/loupe_light.png')");
    }
    else if ((window.innerHeight + scroll_top) >= doc_element.scrollHeight && scroll_top != 0) {// tt en BAS de la page
        header.setProperty("background-color", "var(--c3)");
        header.setProperty("border-radius", "0px 0px 20px 20px");
        header.setProperty("box-shadow", "0px 0px 70px var(--c1)");
        footer_header.setProperty("background-color", "var(--c3)");
        footer_header.setProperty("border-radius", "20px 20px 0px 0px");
        // if(color_scheme_dark.matches){//light
            img2.src = 'images/EclipseTrack_dark.png';
            img3.src = 'images/eTrack_logo_dark.png';
            foot_icon1.src = 'images/discord_dark.png';
            foot_icon2.src = 'images/x_dark.png';
            foot_icon3.src = 'images/github_dark.png';
        // }
        // else{//dark
        //     img2.src = 'images/EclipseTrack_light.png';
        //     img3.src = 'images/eTrack_logo_light.png';
        //     foot_icon1.src = 'images/discord_light.png';
        //     foot_icon2.src = 'images/x_light.png';
        //     foot_icon3.src = 'images/github_light.png';
        // }
    }
    else if(header.backgroundColor=="var(--c3)" || header.background=="linear-gradient(transparent, transparent)"){// entre les 2
        header.setProperty("background", "linear-gradient(to bottom, var(--c3), transparent)");
        header.setProperty("border-radius", "0px 0px 0px 0px");
        header.setProperty("box-shadow", "0px 0px 0px var(--c1)");
        form_header_input.setProperty("background-color", "rgba(256, 256, 256, .7)");
        form_header_button.setProperty("background-image", "url('images/loupe_dark.png')");
        footer_header.setProperty("background", "linear-gradient(to top, var(--c3), transparent)");
        footer_header.setProperty("border-radius", "0px 0px 0px 0px");
        // if(color_scheme_dark.matches){//light
            img2.src = 'images/EclipseTrack_light.png';
            img3.src = 'images/eTrack_logo_light.png';
            foot_icon1.src = 'images/discord_light.png';
            foot_icon2.src = 'images/x_light.png';
            foot_icon3.src = 'images/github_light.png';
        // }
        // else{//dark
        //     img2.src = 'images/EclipseTrack_dark.png';
        //     img3.src = 'images/eTrack_logo_dark.png';
        //     foot_icon1.src = 'images/discord_dark.png';
        //     foot_icon2.src = 'images/x_dark.png';
        //     foot_icon3.src = 'images/github_dark.png';
        // }
   
    }
}
const form_header_input = document.getElementById("form_adress_header_input").style;
const form_header_button = document.getElementById("form_adress_header_button").style;
const header = document.getElementById("header").style;
const footer_header = document.getElementById("footer_header").style;
const img2 = document.getElementById('img_etrack_logo');
const img3 = document.getElementById('img_etrack_logo_tel');
const foot_icon1 = document.getElementById('discord');
const foot_icon2= document.getElementById('x');
const foot_icon3 = document.getElementById('github');
const color_scheme_dark = window.matchMedia("(prefers-color-scheme:dark)");
const color_scheme_light = window.matchMedia("(prefers-color-scheme:light)");
scroll();

//CALCUL TOTAL ET LE PRINT
function calc_and_print(){
    const total_total = document.getElementById('total_total');
    const total_tokens = document.getElementById('total_tokens');
    const total_nft = document.getElementById('total_nft');
    const total_defi = document.getElementById('total_defi');
    const token_value = document.getElementsByClassName('token_value');
    const nft_value = document.getElementsByClassName('nft_value');
    const defi_value = document.getElementsByClassName('defi_value');

    if(token_value.length>0){
        total_tokens.innerHTML = 0;
        var tot_tokens = 0;
        for (let i = 0; i < token_value.length; i++) {
            total_tokens.innerHTML = parseInt(total_tokens.innerHTML) + parseInt(token_value[i].innerHTML);
            tot_tokens = total_tokens.innerHTML;
        }
    }else{tot_tokens = 0;}
    if(nft_value.length>0){
        total_nft.innerHTML = 0;
        var tot_nft = 0;
        for (let i = 0; i < nft_value.length; i++) {
            total_nft.innerHTML = parseInt(total_nft.innerHTML) + parseInt(nft_value[i].innerHTML);
            tot_nft =total_nft.innerHTML;
        }
    }else{tot_nft = 0;}
    if(defi_value.length>0){
        total_defi.innerHTML = 0;
        var tot_defi = 0;
        for (let i = 0; i < defi_value.length; i++) { 
            total_defi.innerHTML = parseInt(total_defi.innerHTML) + parseInt(defi_value[i].innerHTML);
            tot_defi = total_defi.innerHTML;
        }
    }else{tot_defi = 0;}

    total_total.innerHTML = parseInt(tot_tokens) + parseInt(tot_nft) + parseInt(tot_defi);
}

//ADRESS ET DONEES
const adress = window.location.search.substring(8);
if(adress != ""){
    if (adress.length == 44){//verifier si l'adress est valide parce que la...
            document.getElementById('container_header_adress').innerHTML = adress.substring(0,2) + "..." + adress.substring(39,43);
            document.getElementById('form_adress_header').style.visibility = "visible";
            const container = document.getElementById('container');
            container.innerHTML = "<div id='loading'>loading...</div>";


            //envoyer données adress au serveur
            //puis executer le script quand une reponse est recus


            //recup donnes token ECLIPSE
            fetch(`/data_eclipse_tokens?adress=${adress}`)
                .then(response => response.json())
                .then(data => {
                    var tr_token_print = "";
                    var thead_token = '';
                    var tfoot_token = '';
                    if(data.tokens.length > 0){
                        var ETH_price = data.ETH_price;
                        data.tokens.sort((a, b) => (a.value < b.value ? 1 : -1));
                        for (let i = 0; i < data.tokens.length; i++) {              
                            if (data.tokens[i].value > 1){
                                var tr_token = `
                                <tr id="tr1" style="">
                                <th scope="row"><img class="token_icon" src="`+data.tokens[i].logo+`"><img class="chain_icon" src="images/chain_icon_eclipse.png"><a target="_blank" href="https://eclipsescan.xyz/token/`+data.tokens[i].contractAddress+`"> &nbsp &nbsp &nbsp &nbsp`+data.tokens[i].symbol+`</a></th>
                                <td class="hide_tel">`+parseFloat(data.tokens[i].price).toPrecision(4)+` $</td>
                                <td class="hide_tel">`+parseFloat(data.tokens[i].amount).toPrecision(8)+`</td>
                                <td id="total"><span class="token_value">`+Math.round(data.tokens[i].value * 10) / 10+`</span> $</td>
                                </tr>
                                `;
                            }else{
                                var tr_token = `
                                <tr id="tr1" style="display: none;" class="showmore_token">
                                <th scope="row"><img class="token_icon" src="`+data.tokens[i].logo+`"><img class="chain_icon" src="images/chain_icon_eclipse.png"><a target="_blank" href="https://eclipsescan.xyz/token/`+data.tokens[i].contractAddress+`"> &nbsp &nbsp &nbsp &nbsp`+data.tokens[i].symbol+`</a></th>
                                <td class="hide_tel">`+parseFloat(data.tokens[i].price).toPrecision(4)+` $</td>
                                <td class="hide_tel">`+parseFloat(data.tokens[i].amount).toPrecision(8)+`</td>
                                <td id="total"><span class="token_value">`+Math.round(data.tokens[i].value * 10) / 10+`</span> $</td>
                                </tr>
                                `;
                            }

                            tr_token_print = tr_token_print + tr_token;
                        }
                        thead_token = `
                        <div id="table_div">
                        <table id="tokens">
                        <thead>
                        <tr>
                            <th scope="col">TOKENS</th>
                            <td scope="col" class="hide_tel">PRICE</td>
                            <td scope="col" class="hide_tel">QUANTITY</td>
                            <td scope="col" id="total">VALUE</td>
                            </tr>
                        </thead>
                        <tbody>`;
                
                        tfoot_token = `
                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope="row">TOTAL</th>
                                <td colspan="2" class="hide_tel"></td>
                                <td id="total" colspan="2"><span id="total_tokens">0</span> $</td>
                            </tr>
                        </tfoot>
                        </table>
                        </div>
                        <span id="total_token_showmore" onclick="showmore_token()">show 0$ value</span>
                        `; 
                    }else{
                        tr_token_print = "<span id='adress_vide'> No tokens</span> <br>";
                    }
                    //Ajouter tt les donnes a la page
                    container.innerHTML = container.innerHTML + thead_token + tr_token_print + tfoot_token + "<br>";
                    //CALCULS ET AFFICHAGE TOTAL
                    calc_and_print();


                    // recup donnes nft ECLIPSE
                    fetch(`/data_eclipse_nft?adress=${adress}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        var tr_nft_print = "";
                        var thead_nft = '';
                        var tfoot_nft = '';
                        if(data.nft.length > 0){
                            data.nft.sort((a, b) => (a.floorPrice < b.floorPrice ? 1 : -1));
                            for (let i = 0; i < data.nft.length; i++) {
                                if(data.nft[i].floorPrice > 0){
                                    var tr_nft =`
                                    <tr id="tr1">
                                    <th scope="row"><img class="nft_icon" src="`+data.nft[i].collection.image+`"><img class="chain_icon" src="images/chain_icon_eclipse.png"> &nbsp &nbsp &nbsp &nbsp<a target="blank" href="https://scopenft.xyz/explore/`+data.nft[i].id+`?sort=cheapest">`+data.nft[i].collection.name+`</a></th>
                                    <td class="hide_tel">`+data.nft[i].floorPrice+` ETH</td>
                                    <td class="hide_tel">`+data.nft[i].collection.totalItems+`</td>
                                    <td id="total"><span class="nft_value">`+Math.round((data.nft[i].floorPrice * ETH_price * data.nft[i].collection.totalItems) * 10) / 10+`</span> $</td>
                                    </tr>
                                `;
                                }else{
                                    var tr_nft =`
                                    <tr id="tr1" style="siplay: none;" class="showmore_nft">
                                    <th scope="row"><img class="nft_icon" src="`+data.nft[i].collection.image+`"><img class="chain_icon" src="images/chain_icon_eclipse.png"> &nbsp &nbsp &nbsp &nbsp<a target="blank" href="https://scopenft.xyz/explore/`+data.nft[i].id+`?sort=cheapest">`+data.nft[i].collection.name+`</a></th>
                                    <td class="hide_tel">`+data.nft[i].floorPrice+` ETH</td>
                                    <td class="hide_tel">`+data.nft[i].collection.totalItems+`</td>
                                    <td id="total"><span class="nft_value">`+Math.round((data.nft[i].floorPrice * ETH_price * data.nft[i].collection.totalItems) * 10) / 10+`</span> $</td>
                                    </tr>
                                `;
                                }

                                tr_nft_print = tr_nft_print + tr_nft;
                                }
                                thead_nft = `
                                <div id="table_div">
                                <table id="nft">
                                <thead>
                                <tr>
                                    <th scope="col">NFT</th>
                                    <td class="hide_tel" scope="col">FLOOR PRICE</td>
                                    <td class="hide_tel" scope="col">QUANTITY</td>
                                    <td scope="col" id="total">VALUE</td>
                                    </tr>
                                </thead>
                                <tbody>`;
                                tfoot_nft=`
                                </tbody>
                                    <tfoot>
                                        <tr>
                                        <th scope="row">TOTAL</th>
                                        <td class="hide_tel"></td>
                                        <td class="hide_tel"></td>
                                        <td id="total"><span id="total_nft">0</span> $</td>
                                        </tr>
                                    </tfoot>
                                </table>
                                </div>
                                <span id="total_nft_showmore" onclick="showmore_nft()">show 0$ value</span>
                                `;
                        }else{
                                tr_nft_print = "<span id='adress_vide'> No eNFT</span> <br>";
                        }
                        //Ajouter tt les donnes a la page
                        container.innerHTML = container.innerHTML + thead_nft + tr_nft_print + tfoot_nft + "<br>";
                        //CALCULS ET AFFICHAGE TOTAL
                        calc_and_print();                
                    

                        // recup donnes defi ECLIPSE
                        fetch(`/data_eclipse_defi?adress=${adress}`)
                        .then(response => response.json())
                        .then(data => {
                            var tr_defi_print = "";
                            var thead_defi = '';
                            var tfoot_defi = '';
                            if(data.defi.length > 0){
                                data.defi.sort((a, b) => (a.value < b.value ? 1 : -1));
                                for (let i = 0; i < data.defi.length > 0; i++) {
                                        let defi_tokens_name = "";
                                        for (j in data.defi[i].tokens){
                                            defi_tokens_name = defi_tokens_name + data.defi[i].tokens[j].token.symbol;
                                            if(j < data.defi[i].tokens.length - 1){
                                                defi_tokens_name = defi_tokens_name + " / ";
                                            }
                                        }
                                        if (parseFloat(data.defi[i].value) > 0){
                                            var tr_defi =`
                                                    <tr id="tr1">
                                                    <th scope="row"><img class="defi_icon" src="`+data.defi[i].protocol.logo+`"><img class="chain_icon" src="images/chain_icon_eclipse.png">&nbsp &nbsp &nbsp &nbsp<a target="blank" href="`+data.defi[i].protocol.url+`">`+data.defi[i].protocol.name+`</a></th>
                                                    <td class="hide_tel">`+defi_tokens_name+`</td>
                                                    <td id="total"><span class="defi_value">`+Math.round(parseFloat(data.defi[i].value) * 10) / 10+`</span> $</td>
                                                    </tr>
                                                `;
                                            tr_defi_print = tr_defi_print + tr_defi;
                                        }
                                        else{
                                            var tr_defi =`
                                                    <tr id="tr1" style="dispaly: none;" class="showmore_defi">
                                                    <th scope="row"><img class="defi_icon" src="`+data.defi[i].protocol.logo+`"><img class="chain_icon" src="images/chain_icon_eclipse.png">&nbsp &nbsp &nbsp &nbsp<a target="blank" href="`+data.defi[i].protocol.url+`">`+data.defi[i].protocol.name+`</a></th>
                                                    <td class="hide_tel">`+defi_tokens_name+`</td>
                                                    <td id="total"><span class="defi_value">`+Math.round(parseFloat(data.defi[i].value) * 10) / 10+`</span> $</td>
                                                    </tr>
                                                `;
                                            tr_defi_print = tr_defi_print + tr_defi;}
                                        }
                                    thead_defi = `
                                    <div id="table_div">
                                    <table id="tokens">
                                    <thead>
                                    <tr>
                                        <th scope="col">DEFI</th>
                                        <td class="hide_tel">ASSETS</td>
                                        <td scope="col" id="total">VALUE</td>
                                        </tr>
                                    </thead>
                                    <tbody>`;
                                    tfoot_defi = `
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                        <th scope="row">TOTAL</th>
                                        <td class="hide_tel"></td>
                                        <td id="total"><span id="total_defi">0</span> $</td>
                                        </tr>
                                    </tfoot>
                                    </table>
                                    </div>
                                    <span id="total_defi_showmore" onclick="showmore_defi()">show 0$ value</span>
                                    `;
                            }else{
                                tr_defi_print = "<span id='adress_vide'>No DeFi</span> <br>";
                            }
                            //Ajouter tt les donnes a la page
                            container.innerHTML = container.innerHTML + thead_defi + tr_defi_print + tfoot_defi;
                            //CALCULS ET AFFICHAGE TOTAL
                            calc_and_print(); 











                            // //recup donnes token SOLANA
                            // fetch(`/data_solana_tokens?adress=${adress}`)
                            // .then(response => response.json())
                            // .then(data => {
                            //     console.log(data);

                            //     //recup donnes nft SOLANA
                            //     fetch(`/data_solana_nft?adress=${adress}`)
                            //     .then(response => response.json())
                            //     .then(data => {
                            //         console.log(data);

                            //         //recup donnes defi SOLANA
                            //         fetch(`/data_solana_nft?adress=${adress}`)
                            //         .then(response => response.json())
                            //         .then(data => {
                                        
                                    
                            //             console.log(data);
                            //         })
                            //         .catch(error => console.error('Error fetching data for SOLANA nft:', error));
                            //     })
                            //     .catch(error => console.error('Error fetching data for SOLANA nft:', error));
                            // })
                            // .catch(error => console.error('Error fetching data for SOLANA token:', error));
















                            //FIN : enelevr le message de "loading"
                            document.getElementById('loading').style.display = 'none';
                        })
                        .catch(error => console.error('Error fetching data for ECLIPSE defi:', error));
                    })
                    .catch(error => console.error('Error fetching data for ECLIPSE nft:', error));
                })
                .catch(error => console.error('Error fetching data for ECLIPSE token:', error));
    }else{
        console.log('invalid adress');
        alert('invalid adress');
    }
}



// AJOUTER DES ADRESSES POUR MULTICOMPTE
function add_adress(){
    console.log('add adress');
    // const div_more = document.getElementById('form_adress_more_adress');
    // div_more.innerHTML = div_more.innerHTML + '<input type="text" class="form_adress_more_adress_input" placeholder="adress" style="width: 100%;"><br>';
    
    
    // si ce message est encore LargestContentfulPaint, c'est cool
}



//VOIR PLUS
function showmore_token() {
    const button = document.getElementById('total_token_showmore');
    const showmore_tokens = document.getElementsByClassName('showmore_token');
    if (button.innerHTML == 'show 0$ value') {
        for (let i = 0; i < showmore_tokens.length; i++) {
            showmore_tokens[i].style.display = 'table-row';
        }
        button.innerHTML = 'hide 0$ value';
    } else {
        for (let i = 0; i < showmore_tokens.length; i++) {
            showmore_tokens[i].style.display = 'none';
        }
        button.innerHTML = 'show 0$ value';
    }
}
function showmore_nft() {
    const button = document.getElementById('total_nft_showmore');
    const showmore_nfts = document.getElementsByClassName('showmore_nft');
    if (button.innerHTML == 'show 0$ value') {
        for (let i = 0; i < showmore_nfts.length; i++) {
            showmore_nfts[i].style.display = 'table-row';
        }
        button.innerHTML = 'hide 0$ value';
    } else {
        for (let i = 0; i < showmore_nfts.length; i++) {
            showmore_nfts[i].style.display = 'none';
        }
        button.innerHTML = 'show 0$ value';
    }
}
function showmore_defi() {
    const button = document.getElementById('total_defi_showmore');
    const showmore_defis = document.getElementsByClassName('showmore_defi');
    if (button.innerHTML == 'show 0$ value') {
        for (let i = 0; i < showmore_defis.length; i++) {
            showmore_defis[i].style.display = 'table-row';
        }
        button.innerHTML = 'hide 0$ value';
    } else {
        for (let i = 0; i < showmore_defis.length; i++) {
            showmore_defis[i].style.display = 'none';
        }
        button.innerHTML = 'show 0$ value';
    }
}

//ADRESS PRESSE PAPIER
function click_adress_don(){
    navigator.clipboard.writeText('GU2PA837V4qHxvkPVzdUM9c88ptox9dK2gPFMzg8XytE');
    alert('adress "GU2PA837V4qHxvkPVzdUM9c88ptox9dK2gPFMzg8XytE" copied');
}
function copy_adress(){
    if(adress.length == 44){
        navigator.clipboard.writeText(adress);
        alert('adress "'+adress+'" copied');
    }
}
