// Pop-up error/succes
const delay = ms => new Promise(res => setTimeout(res, ms));
const create_message_box = async (type, title, message) => {
    const error_container = document.getElementById('error_container');
    error_container.innerHTML = error_container.innerHTML + `
        <div class="message_box_`+type+`" onClick="this.style.display = 'none'" id="message_box_`+type+title+message+`">
            <span>`+title+`</span>`+
            message+`
        </div>`;
    await delay(10000); //si change le temps, changer aussi sur le css duree animation
    console.log(document.getElementById(`message_box_+${type+title+message}`));
    console.log(`message_box_+${type+title+message}`);
    document.getElementById(`message_box_+${type+title+message}`).style.display = 'none';
}

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
const form_header_input = document.getElementById("form_address_header_input").style;
const form_header_button = document.getElementById("form_address_header_button").style;
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

    total_total.innerHTML = formatNumberWithSpaces(parseInt(tot_tokens) + parseInt(tot_nft) + parseInt(tot_defi));
}


// changer le parametre de l'url sans refresh
function addParamToURL(key, value) {
    const url = new URL(window.location);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
}


// directement chercher les donnes si un parametre d'adress est deja present dans l'url
const address = window.location.search.substring(9);
if(address != ""){
    fetch_data(address);
}

//recuperer donnes formulaire acceuil en js en empechant refresh
var form = document.getElementById('form_address');
if (form != null){
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = document.getElementById('form_address_input').value;
    if(address != ""){
        if (address.length == 44){//verifier si l'address est valide
            addParamToURL('address', address);
            fetch_data(address);
        }else{
            document.getElementById('form_address_input').value = address;
            create_message_box('error', 'Invalid adress', 'Please enter a valid Eclipse-Solana address');
        }
    }
});
}
//recuperer donnes formulaire header en js en empechant refresh
var form_header = document.getElementById('form_address_header');
if (form_header != null){
form_header.addEventListener('submit', (e) => {
    e.preventDefault();
    // const address = window.location.search.substring(9);
    const address = document.getElementById('form_address_header_input').value;
    if(address != ""){
        if (address.length == 44){//verifier si l'address est valide
            addParamToURL('address', address);
            fetch_data(address);
        }else{
            document.getElementById('form_address_header_input').value = address;
            create_message_box('error', 'Invalid adress', 'Please enter a valid Eclipse-Solana address');
        }
    }
});
}

function fetch_data(address){


                document.getElementById('container_header_address').innerHTML = address.substring(0,2) + "..." + address.substring(39,43);
                document.getElementById('form_address_header').style.visibility = "visible";
                const container = document.getElementById('container');
                container.innerHTML = "<div id='loading_token'>loading token...</div>";
                const multi_address = false;
                if(multi_address){
                    var address_on_total_visibility = "visible";
                }else{
                    var address_on_total_visibility = "hidden";
                }


                //recup donnes token ECLIPSE
                fetch(`/data_eclipse_tokens?address=${address}`)
                    .then(response => response.json())
                    .then(data => {
                        var tr_token_print = "";
                        var thead_token = '';
                        var tfoot_token = '';
                        if(data.tokens.length > 0){
                            data.tokens.sort((a, b) => (a.value < b.value ? 1 : -1));
                            for (let i = 0; i < data.tokens.length; i++) {              
                                if (data.tokens[i].value > 1){
                                    var tr_token = `
                                    <tr id="tr1" style="">
                                    <th scope="row"><a target="_blank" href="https://eclipsescan.xyz/token/`+data.tokens[i].contractAddress+`"><img class="token_icon" src="`+data.tokens[i].logo+`"><img class="chain_icon_token" src="images/chain_icon_eclipse.png"> &nbsp &nbsp &nbsp &nbsp <span class="a_underline">`+data.tokens[i].symbol+`</span></a></th>
                                    <td class="hide_tel">`+Math.round(data.tokens[i].price* 10) / 10+` $</td>
                                    <td class="hide_tel">`+parseFloat(data.tokens[i].amount).toPrecision(6)+`</td>
                                    <td id="total"><span title="Owner address" class="address_on_total" style="visibility:`+address_on_total_visibility+`">`+address.substring(39,43)+` </span><span class="token_value">`+Math.round(data.tokens[i].value * 10) / 10+`</span> $</td>
                                    </tr>
                                    `;
                                }else{
                                    var token_showmore = true;
                                    var tr_token = `
                                    <tr id="tr1" style="display: none;" class="showmore_token">
                                    <th scope="row"><a target="_blank" href="https://eclipsescan.xyz/token/`+data.tokens[i].contractAddress+`"><img class="token_icon" src="`+data.tokens[i].logo+`"><img class="chain_icon_token" src="images/chain_icon_eclipse.png"> &nbsp &nbsp &nbsp &nbsp <span class="a_underline">`+data.tokens[i].symbol+`</span></a></th>
                                    <td class="hide_tel">`+parseFloat(data.tokens[i].price).toPrecision(3)+` $</td>
                                    <td class="hide_tel">`+parseFloat(data.tokens[i].amount).toPrecision(6)+`</td>
                                    <td id="total"><span title="Owner address" class="address_on_total" style="visibility:`+address_on_total_visibility+`">`+address.substring(39,43)+` </span><span class="token_value">`+Math.round(data.tokens[i].value * 10) / 10+`</span> $</td>
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
                            <tbody id="tbody_token">`;
                    
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
                            <br>
                            `;
                            if(token_showmore){
                                tfoot_token = tfoot_token + '<span id="total_token_showmore" onclick="showmore_token()">show 0$ value</span>';
                            }
                        }else{
                            tr_token_print = "<span id='address_vide_token'> No tokens <br></span>";
                        }
                        //Ajouter tt les donnes a la page
                        container.innerHTML = container.innerHTML + thead_token + tr_token_print + tfoot_token + " <div id='loading_nft'><br>loading nft...</div>";
                        document.getElementById('loading_token').style.display = 'none';
                        
                        //CALCULS ET AFFICHAGE TOTAL
                        calc_and_print();

                        // recup ETH price AVANT D'AFFICHER LES NFT ET DEFI
                        fetch(`/ETH_price_toServer?address=${address}`)
                        .then(response => response.json())
                        .then(data => {
                            const timestampKey = Object.keys(data)[0];
                            var ETH_price_fromServer = data[timestampKey].ETH.USD;




                        // recup donnes nft ECLIPSE
                        fetch(`/data_eclipse_nft?address=${address}`)
                        .then(response => response.json())
                        .then(data => {
                            var tr_nft_print = "";
                            var thead_nft = '';
                            var tfoot_nft = '';
                            if(data.nft.length > 0){
                                data.nft.sort((a, b) => (a.floorPrice < b.floorPrice ? 1 : -1));
                                for (let i = 0; i < data.nft.length; i++) {
                                    if(data.nft[i].floorPrice > 0){
                                        var tr_nft =`
                                        <tr id="tr1">
                                        <th scope="row"><a target="blank" href="https://scopenft.xyz/explore/`+data.nft[i].id+`?sort=cheapest"><img class="nft_icon" src="`+data.nft[i].collection.image+`"><img class="chain_icon_nft" src="images/chain_icon_eclipse.png"> &nbsp &nbsp &nbsp &nbsp<span class="a_underline">`+data.nft[i].collection.name+`</span></a></th>
                                        <td class="hide_tel">`+Math.round(data.nft[i].floorPrice* 10000) / 10000+` ETH</td>
                                        <td class="hide_tel">`+Math.round(data.nft[i].collection.totalItems* 10000) / 10000+`</td>
                                        <td id="total"><span title="Owner address" class="address_on_total" style="visibility:`+address_on_total_visibility+`">`+address.substring(39,43)+` </span><span class="nft_value">`+Math.round((data.nft[i].floorPrice * ETH_price_fromServer * data.nft[i].collection.totalItems) * 10) / 10+`</span> $</td>
                                        </tr>
                                    `;
                                    }else{
                                        var nft_showmore = true;
                                        var tr_nft =`
                                        <tr id="tr1" style="display: none;" class="showmore_nft">
                                        <th scope="row"><a target="blank" href="https://scopenft.xyz/explore/`+data.nft[i].id+`?sort=cheapest"><img class="nft_icon" src="`+data.nft[i].collection.image+`"><img class="chain_icon_nft" src="images/chain_icon_eclipse.png"> &nbsp &nbsp &nbsp &nbsp<span class="a_underline">`+data.nft[i].collection.name+`</span></a></th>
                                        <td class="hide_tel">`+Math.round(data.nft[i].floorPrice* 10000) / 10000+` ETH</td>
                                        <td class="hide_tel">`+Math.round(data.nft[i].collection.totalItems* 10000) / 10000+`</td>
                                        <td id="total"><span title="Owner address" class="address_on_total" style="visibility:`+address_on_total_visibility+`">`+address.substring(39,43)+` </span><span class="nft_value">`+Math.round((data.nft[i].floorPrice * ETH_price_fromServer * data.nft[i].collection.totalItems) * 10) / 10+`</span> $</td>
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
                                    <tbody id="tbody_nft">`;
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
                                    <br>
                                    `;
                                if(nft_showmore){
                                    tfoot_nft = tfoot_nft + '<span id="total_nft_showmore" onclick="showmore_nft()">show 0$ value</span>';
                                }
                            }else{
                                    tr_nft_print = "<span id='address_vide_nft'> No eNFT<br></span> ";
                            }
                            //Ajouter tt les donnes a la page
                            container.innerHTML = container.innerHTML + thead_nft + tr_nft_print + tfoot_nft + " <div id='loading_defi'><br>loading defi...</div>";
                            document.getElementById('loading_nft').style.display = 'none';
                            //CALCULS ET AFFICHAGE TOTAL
                            calc_and_print();                

                            // recup donnes defi ECLIPSE
                            fetch(`/data_eclipse_defi?address=${address}`)
                            .then(response => response.json())
                            .then(data => {
                                var tr_defi_print = "";
                                var thead_defi = '';
                                var tfoot_defi = '';
                                if(data.defi.length > 0){
                                    console.log(data.defi);
                                    data.defi.sort((a, b) => (a.value < b.value ? 1 : -1));
                                    for (let i = 0; i < data.defi.length > 0; i++) {
                                        if(data.defi[i].type=="Borrow"){ //lending borrow
                                            let defi_token_name_lend = "";
                                            let defi_token_value_lend = 0;
                                            for(j in data.defi[i].lend){ //token name lend
                                                defi_token_name_lend = defi_token_name_lend + data.defi[i].lend[j].input[0].token.symbol;
                                                defi_token_value_lend = defi_token_value_lend + data.defi[i].lend[j].current.tokens[0].value;
                                                if(j < data.defi[i].lend.length - 1){
                                                    defi_token_name_lend = defi_token_name_lend + " / ";
                                                }
                                            }
                                            let defi_token_name_borrow = "";
                                            let defi_token_value_borrow = 0;
                                            for(j in data.defi[i].borrow){ 
                                                defi_token_name_borrow = defi_token_name_borrow + data.defi[i].borrow[j].token.symbol;
                                                defi_token_value_borrow = defi_token_value_borrow + data.defi[i].borrow[j].value;
                                                if(j < data.defi[i].borrow.length - 1){
                                                    defi_token_name_borrow = defi_token_name_borrow + " / ";
                                                }
                                            }
                                            var tr_defi =`
                                                <tr id="tr1" class="tr_defi_borrow_lend" >
                                                <th scope="row"><a target="blank" href="`+data.defi[i].protocol.url+`"><img class="defi_icon" src="`+data.defi[i].protocol.logo+`"><img class="chain_icon_defi" src="images/chain_icon_eclipse.png">&nbsp &nbsp &nbsp &nbsp<span class="a_underline">`+data.defi[i].protocol.name+`</span></a></th>
                                                <td class="hide_tel">`
                                                    +"<span class='td_lend_borrow_span'>Lending : </span>" + defi_token_name_lend + " : <span class='td_lend_borrow_span'>" + Math.round(parseFloat(defi_token_value_lend) * 1) / 1 + " $</span>"
                                                    +"<br><span class='td_lend_borrow_span'>Borrow &nbsp: </span>" + defi_token_name_borrow + " : <span class='td_lend_borrow_span'>" + Math.round(parseFloat(defi_token_value_borrow) * 1) / 1 + " $</span>"
                                                +`</td>
                                                <td id="total"><span title="Owner address" class="address_on_total" style="visibility:`+address_on_total_visibility+`">`+address.substring(39,43)+` </span><span class="defi_value">`+Math.round((defi_token_value_lend - defi_token_value_borrow) * 10) / 10+`</span> $</td>
                                                </tr>
                                            `;
                                            tr_defi_print = tr_defi_print + tr_defi;

                                        }
                                        else if(data.defi[i].type=="Lending"){ //lending borrow
                                            let defi_token_name_lend = "";
                                            let defi_token_value_lend = 0;
                                            for(j in data.defi[i].lend){ //token name lend
                                                defi_token_name_lend = defi_token_name_lend + data.defi[i].lend[j].token.symbol;
                                                defi_token_value_lend = defi_token_value_lend + data.defi[i].lend[j].value;
                                                if(j < data.defi[i].lend.length - 1){
                                                    defi_token_name_lend = defi_token_name_lend + " / ";
                                                }
                                            }                                   
                                            var tr_defi =`
                                            <tr id="tr1">
                                            <th scope="row"><a target="blank" href="`+data.defi[i].protocol.url+`"><img class="defi_icon" src="`+data.defi[i].protocol.logo+`"><img class="chain_icon_defi" src="images/chain_icon_eclipse.png">&nbsp &nbsp &nbsp &nbsp<span class="a_underline">`+data.defi[i].protocol.name+`</span></a></th>
                                            <td class="hide_tel">`
                                                +"<span class='td_lend_borrow_span'>Lending : </span>" + defi_token_name_lend + " : <span class='td_lend_borrow_span'>" + Math.round(parseFloat(defi_token_value_lend) * 1) / 1 + " $</span>"
                                            +`</td>
                                            <td id="total"><span title="Owner address" class="address_on_total" style="visibility:`+address_on_total_visibility+`">`+address.substring(39,43)+` </span><span class="defi_value">`+Math.round((defi_token_value_lend) * 10) / 10+`</span> $</td>
                                            </tr>
                                            `;
                                            tr_defi_print = tr_defi_print + tr_defi;
                                        }
                                        else{ //autre positions defi
                                            let defi_tokens_name = "";
                                            for (j in data.defi[i].tokens){
                                                defi_tokens_name = defi_tokens_name + data.defi[i].tokens[j].token.symbol + "<span class='td_lend_borrow_span'>(" + Math.round(data.defi[i].tokens[j].value * 1) / 1 + "$)</span>";
                                                if(j < data.defi[i].tokens.length - 1){
                                                    defi_tokens_name = defi_tokens_name + " / ";
                                                }
                                            }
                                            if (parseFloat(data.defi[i].value) > 0){
                                                var tr_defi =`
                                                    <tr id="tr1" class="tr_defi">
                                                        <th scope="row"><a target="blank" href="`+data.defi[i].protocol.url+`"><img class="defi_icon" src="`+data.defi[i].protocol.logo+`"><img class="chain_icon_defi" src="images/chain_icon_eclipse.png">&nbsp &nbsp &nbsp &nbsp<span class="a_underline">`+data.defi[i].protocol.name+`</span></a></th>
                                                        <td class="hide_tel">`+defi_tokens_name+`</td>
                                                        <td id="total"><span title="Owner address" class="address_on_total" style="visibility:`+address_on_total_visibility+`">`+address.substring(39,43)+` </span><span class="defi_value">`+Math.round(parseFloat(data.defi[i].value) * 10) / 10+`</span> $</td>
                                                    </tr>
                                                    `;
                                                tr_defi_print = tr_defi_print + tr_defi;
                                            }
                                            else{
                                                var defi_showmore = true;
                                                var tr_defi =`
                                                    <tr id="tr1" style="dispaly: none;" class="showmore_defi" class="tr_defi">
                                                        <th scope="row"><a target="blank" href="`+data.defi[i].protocol.url+`"><img class="defi_icon" src="`+data.defi[i].protocol.logo+`"><img class="chain_icon_defi" src="images/chain_icon_eclipse.png">&nbsp &nbsp &nbsp &nbsp<span class="a_underline">`+data.defi[i].protocol.name+`</span></a></th>
                                                        <td class="hide_tel">`+defi_tokens_name+`</td>
                                                        <td id="total"><span title="Owner address" class="address_on_total" style="visibility:`+address_on_total_visibility+`">`+address.substring(39,43)+` </span><span class="defi_value">`+Math.round(parseFloat(data.defi[i].value) * 10) / 10+`</span> $</td>
                                                    </tr>
                                                    `;
                                                tr_defi_print = tr_defi_print + tr_defi;}
                                        }
                                    }
                                        thead_defi = `
                                        <div id="table_div">
                                        <table id="tokens">
                                        <thead>
                                        <tr>
                                            <th scope="col">DEFI</th>
                                            <td class="hide_tel" style="text-align:left;">ASSETS</td>
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
                                        `;
                                        if(defi_showmore){
                                            tfoot_defi = tfoot_defi + '<span id="total_defi_showmore" onclick="showmore_defi()">show 0$ value</span>';
                                        }
                                }else{
                                    tr_defi_print = "<span id='address_vide_defi'>No DeFi<br></span> ";
                                }
                                //Ajouter tt les donnes a la page
                                container.innerHTML = container.innerHTML + thead_defi + tr_defi_print + tfoot_defi + " <div id='loading_solana'><br>loading data for solana...</div>";
                                document.getElementById('loading_defi').style.display = 'none';
                                //CALCULS ET AFFICHAGE TOTAL
                                calc_and_print(); 



                                //recup donnes token SOLANA
                                fetch(`/data_solana_tokens?address=${address}`)
                                .then(response => response.json())
                                .then(data => {
                                    if(data.tokens.length > 0){
                                        var table_token = document.getElementById('tbody_token');
                                        if(table_token == null){// si le tableau n'éxiste pas déjà (en gros si il a rien sur eclipse)
                                            container.innerHTML = container.innerHTML + `
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
                                                <tbody id="tbody_token">
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
                                            <br>
                                            `;
                                            address_vide_token.style.display = 'none';
                                            table_token = document.getElementById('tbody_token');
                                        }
                                        for(let i = 0; i < data.tokens.length; i++){
                                            if (data.tokens[i].value > 1){
                                                table_token.innerHTML = table_token.innerHTML + `
                                                <tr id="tr1" style="">
                                                <th scope="row"><a target="_blank" href="https://solscan.io/token/`+data.tokens[i].contractAddress+`"><img class="token_icon" src="`+data.tokens[i].logo+`"><img class="chain_icon_token" src="images/chain_icon_solana.png"> &nbsp &nbsp &nbsp &nbsp<span class="a_underline">`+data.tokens[i].symbol+`</span></a></th>
                                                <td class="hide_tel">`+parseFloat(data.tokens[i].price).toPrecision(4)+` $</td>
                                                <td class="hide_tel">`+parseFloat(data.tokens[i].amount).toPrecision(8)+`</td>
                                                <td id="total"><span title="Owner address" class="address_on_total" style="visibility:`+address_on_total_visibility+`">`+address.substring(39,43)+` </span><span class="token_value">`+Math.round(data.tokens[i].value * 10) / 10+`</span> $</td>
                                                </tr>
                                                `;
                                            }else{
                                                var token_showmore_sol = true;
                                                table_token.innerHTML = table_token.innerHTML + `
                                                <tr id="tr1" style="display: none;" class="showmore_token">
                                                <th scope="row"><a target="_blank" href="https://solscan.io/token/`+data.tokens[i].contractAddress+`"><img class="token_icon" src="`+data.tokens[i].logo+`"><img class="chain_icon_token" src="images/chain_icon_solana.png"> &nbsp &nbsp &nbsp &nbsp<span class="a_underline">`+data.tokens[i].symbol+`</span></a></th>
                                                <td class="hide_tel">`+parseFloat(data.tokens[i].price).toPrecision(4)+` $</td>
                                                <td class="hide_tel">`+parseFloat(data.tokens[i].amount).toPrecision(8)+`</td>
                                                <td id="total"><span title="Owner address" class="address_on_total" style="visibility:`+address_on_total_visibility+`">`+address.substring(39,43)+` </span><span class="token_value">`+Math.round(data.tokens[i].value * 10) / 10+`</span> $</td>
                                                </tr>
                                                `;
                                            }

                                        }
                                        if(token_showmore_sol && !token_showmore){
                                            tfoot_token = tfoot_token + '<span id="total_token_showmore" onclick="showmore_token()">show 0$ value</span>';
                                        }
                                        calc_and_print();

                                        let chain_icon_token = document.getElementsByClassName('chain_icon_token');
                                        for (let i = 0; i < chain_icon_token.length; i++) {
                                            chain_icon_token[i].style.visibility = 'visible';
                                        }
                                        
                                    }


                                    //recup donnes nft SOLANA
                                    fetch(`/data_solana_nft?address=${address}`)
                                    .then(response => response.json())
                                    .then(data => {
                                        if(data.nft.length > 0){
                                            var table_nft = document.getElementById('tbody_nft');
                                            if(table_nft == null){// si le tableau n'éxiste 
                                                container.innerHTML = container.innerHTML + `
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
                                                    <tbody id="tbody_nft">
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
                                                <br>
                                                `;
                                                address_vide_nft.style.display = 'none';
                                                table_nft = document.getElementById('tbody_nft');
                                            }
                                            for (let i = 0; i < data.nft.length; i++) {
                                                if(data.nft[i].floorPrice > 0){
                                                table_nft.innerHTML = table_nft.innerHTML +`
                                                    <tr id="tr1">
                                                    <th scope="row"><a target="blank" href="#"><span class="a_underline">`+data.nft[i].collection.name+`</span><img class="nft_icon" src="`+data.nft[i].collection.image+`"><img class="chain_icon_nft" src="images/chain_icon_solana.png"> &nbsp &nbsp &nbsp &nbsp</a></th>
                                                    <td class="hide_tel">`+Math.round(data.nft[i].floorPrice* 10000) / 10000+` ETH</td>
                                                    <td class="hide_tel">`+Math.round(data.nft[i].collection.totalItems* 10000) / 10000+`</td>
                                                    <td id="total"><span title="Owner address" class="address_on_total" style="visibility:`+address_on_total_visibility+`">`+address.substring(39,43)+` </span><span class="nft_value">`+Math.round((data.nft[i].floorPrice * ETH_price_fromServer * data.nft[i].collection.totalItems) * 10) / 10+`</span> $</td>
                                                    </tr>
                                                `;
                                                }else{
                                                    var nft_showmore_sol = true;
                                                    table_nft.innerHTML = table_nft.innerHTML +`
                                                    <tr id="tr1" style="display: none;" class="showmore_nft">
                                                    <th scope="row"><a target="blank" href="#"><span class="a_underline">`+data.nft[i].collection.name+`</span><img class="nft_icon" src="`+data.nft[i].collection.image+`"><img class="chain_icon_nft" src="images/chain_icon_solana.png"> &nbsp &nbsp &nbsp &nbsp</a></th>
                                                    <td class="hide_tel">`+Math.round(data.nft[i].floorPrice* 10000) / 10000+` ETH</td>
                                                    <td class="hide_tel">`+Math.round(data.nft[i].collection.totalItems* 10000) / 10000+`</td>
                                                    <td id="total"><span title="Owner address" class="address_on_total" style="visibility:`+address_on_total_visibility+`">`+address.substring(39,43)+` </span><span class="nft_value">`+Math.round((data.nft[i].floorPrice * ETH_price_fromServer * data.nft[i].collection.totalItems) * 10) / 10+`</span> $</td>
                                                    </tr>
                                                `;
                                                }
                                            }
                                            if(nft_showmore_sol && !nft_showmore){
                                                tfoot_nft = tfoot_nft + '<span id="total_nft_showmore" onclick="showmore_nft()">show 0$ value</span>';
                                            }
                                            calc_and_print(); 

                                            
                                        
                                            let chain_icon_nft = document.getElementsByClassName('chain_icon_nft');
                                            for (let i = 0; i < chain_icon_nft.length; i++) {
                                                chain_icon_nft[i].style.visibility = 'visible';
                                            }
                                            
                                        }














                                    //     //recup donnes defi SOLANA
                                    //     fetch(`/data_solana_nft?address=${address}`)
                                    //     .then(response => response.json())
                                    //     .then(data => {
                                            

                                        document.getElementById('loading_solana').style.display = 'none';
                                        create_message_box('success', 'Success !', 'All data fetched successfully for Eclipse and Solana !');


                                    //         console.log(data);
                                    //     })
                                    //     .catch(error => create_message_box('error', 'Error fetching Solana Defi', error));
                                    })
                                    .catch(error => create_message_box('error', 'Error fetching Solana NFT', error));
                                })
                                .catch(error => create_message_box('error', 'Error fetching Solana token', error));
                            })
                            .catch(error => create_message_box('error', 'Error fetching Eclipse Defi', error));
                        })
                        .catch(error => create_message_box('error', 'Error fetching Eclipse NFT', error));
                    })
                    .catch(error => create_message_box('error', 'Error fetching ETH price', error));
                    })
                    .catch(error => create_message_box('error', 'Error fetching Eclipse token', error));
}

// AJOUTER DES addressES POUR MULTICOMPTE
function add_address(){
    console.log('add address');
    // const div_more = document.getElementById('form_address_more_address');
    // div_more.innerHTML = div_more.innerHTML + '<input type="text" class="form_address_more_address_input" placeholder="Other address..."><br>';
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

//address PRESSE PAPIER
function click_address_don(){
    navigator.clipboard.writeText('FijhA7J3Xd2uyngAnjqtU8HGW7PEMqbXfUGvGkmFiPkJ');
    alert('address "FijhA7J3Xd2uyngAnjqtU8HGW7PEMqbXfUGvGkmFiPkJ" copied');
}
function copy_address(){
    if(address.length == 44){
        navigator.clipboard.writeText(address);
        alert('address "'+address+'" copied');
    }
}


function formatNumberWithSpaces(number) {
    // Convertir le nombre en chaîne de caractères
    let numberStr = number.toString();

    // Utiliser une expression régulière pour ajouter un espace tous les trois chiffres
    return numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}