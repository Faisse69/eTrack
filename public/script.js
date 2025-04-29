// Pop-up error/succes
const delay = ms => new Promise(res => setTimeout(res, ms));
const create_message_box = async (type, title, message) => {
    const error_container = document.getElementById('error_container');
    error_container.innerHTML = error_container.innerHTML + `
        <div class="message_box_${type}" onClick="this.style.display = 'none'" >
            <span>${title}</span>${message}
        </div>`;
    console.log(title+message);
    await delay(8000); //si change le temps, changer aussi sur le css duree animation
    const allAlerts = document.getElementsByClassName(`message_box_${type}`);
    allAlerts[allAlerts.length - 1].style.display = 'none';
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
        if(address.slice(-6) == '.turbo'){
            fetch(`/domain_resolv?address=${address}`)
            .then(response => response.json())
            .then(address_fromDomain => {
                if(address_fromDomain != "error"){
                    addParamToURL('address', address_fromDomain);
                    fetch_data(address_fromDomain, address);
                }else{
                    create_message_box('error', 'Invalid domain', 'No public address find for this domain');
                }
            });
        }
        else if(address.length == 44){//verifier si l'address est valide
            addParamToURL('address', address);
            fetch_data(address);
        }
        else{
            document.getElementById('form_address_header_input').value = address;
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
        if(address.slice(-6) == '.turbo'){
            fetch(`/domain_resolv?address=${address}`)
            .then(response => response.json())
            .then(address_fromDomain => {
                if(address_fromDomain != "error"){
                    addParamToURL('address', address_fromDomain);
                    fetch_data(address_fromDomain, address);
                }else{
                    create_message_box('error', 'Invalid domain', 'No public address find for this domain');
                }
            });
        }
        else if(address.length == 44){//verifier si l'address est valide
            addParamToURL('address', address);
            fetch_data(address);
        }
        else{
            document.getElementById('form_address_header_input').value = address;
            create_message_box('error', 'Invalid adress', 'Please enter a valid Eclipse-Solana address');
        }
    }
});
}

function fetch_data(address, domain){
                console.log(domain);
                if(domain != undefined){
                    document.getElementById('container_header_address').innerHTML = domain.slice(0,-6);
                }else{
                    document.getElementById('container_header_address').innerHTML = address.substring(0,2) + "..." + address.substring(39,43);
                }
                document.getElementById('form_address_header').style.visibility = "visible";
                const container = document.getElementById('container');
                container.innerHTML = "<div id='loading_token' class='loading_message'>loading token</div>";
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
                                if (data.tokens[i].value > 1 && data.tokens[i].symbol != "N/A" || data.tokens[i].symbol == "ETH"){
                                    var tr_display = '';
                                    var tr_class = '';
                                    var token_img = data.tokens[i].logo;
                                }else{
                                    if(data.tokens[i].symbol == "N/A"){var token_img = "images/default_token.png";}
                                    else{var token_img = data.tokens[i].logo;}
                                    var tr_display = 'none';
                                    var tr_class = 'showmore_token';
                                    var token_showmore = true;
                                }
                                var tr_token = `
                                <tr style="display: ${tr_display};" class="${tr_class}" onclick="more_info_tr(token_${i}); changeBGColor_tr(this)">
                                    <th scope="row"><a target="_blank" href="https://eclipsescan.xyz/token/${data.tokens[i].contractAddress}"><img class="token_icon_eclipse" src="${token_img}"><img class="chain_icon_token" src="images/chain_icon_eclipse.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="a_underline">${data.tokens[i].symbol}</span></a></th>
                                    <td class="hide_tel">${Math.round(data.tokens[i].price* 10) / 10} $</td>
                                    <td class="hide_tel">${data.tokens[i].amount.substring(0,6)}</td>
                                    <td id="total"><span title="Owner address" class="address_on_total" style="visibility:${address_on_total_visibility}">${address.substring(39,43)} </span><span class="token_value">${Math.round(data.tokens[i].value * 10) / 10}</span> $</td>
                                </tr>
                                <tr style="display: none;" class="more_info_tr ${tr_class}" id="token_${i}">
                                    <td colspan="3">
                                        <div class="more_info_tr_div">
                                            Quantity : ${data.tokens[i].amount.substring(0,6)}<br>
                                            Price : ${Math.round(data.tokens[i].price* 10) / 10} $
                                        </div>
                                    </td>
                                </tr>
                                `;


                                tr_token_print = tr_token_print + tr_token;
                            }
                            thead_token = `
                            <div id="table_div_tokens">
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
                            // tr_token_print = "<span id='address_vide_token'> No tokens <br></span>";
                        }
                        //Ajouter tt les donnes a la page
                        container.innerHTML = container.innerHTML + thead_token + tr_token_print + tfoot_token + " <div id='loading_nft' class='loading_message'>loading nft</div>";
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
                                    if((Math.round((data.nft[i].floorPrice * ETH_price_fromServer * data.nft[i].collection.totalItems) * 10) / 10) > 0){
                                        var tr_display = '';
                                        var tr_class = '';
                                    }
                                    else{
                                        var tr_display = 'none';
                                        var tr_class = 'showmore_nft';
                                        var nft_showmore = true;
                                    }
                                    let multi_image_nft = "";
                                    let multi_image_nft_space = "&nbsp&nbsp&nbsp&nbsp";
                                    if(data.nft[i].collection.totalItems <= 3){
                                        var n_nft_image_a_afficher = data.nft[i].collection.totalItems; 
                                        var afficher_plus_nft = "";
                                    }else{
                                        var n_nft_image_a_afficher = 3;
                                        var afficher_plus_nft = `+${data.nft[i].collection.totalItems - 3} &nbsp`;
                                    }
                                    if(data.nft[i].collection.name == "eTrack Opensource"){
                                        var is_etrack = "etrack_nft";
                                    }else{var is_etrack = "";}
                                    for(let n = 0; n < n_nft_image_a_afficher; n++){
                                        multi_image_nft = multi_image_nft + `<img class="nft_icon_eclipse ${is_etrack}" src="${data.nft[i].collection.image}" onerror="this.onerror=null;this.src='images/default_nft.png';" style="transform:translate(calc(var(--multi_nft_decale) * ${n})); z-index:${100-n}">`
                                        multi_image_nft_space = multi_image_nft_space + "&nbsp&nbsp";
                                    }
                                    var tr_nft =`
                                    <tr style="display: ${tr_display};" class="${tr_class}" onclick="more_info_tr(nft_${i}); changeBGColor_tr(this)">
                                        <th scope="row"><a target="blank" href="https://scopenft.xyz/explore/${data.nft[i].id}?sort=cheapest">${multi_image_nft}<img class="chain_icon_nft" src="images/chain_icon_eclipse.png">${multi_image_nft_space}<span class="afficher_plus_nft">${afficher_plus_nft}</span><span class="a_underline  ${is_etrack}">${data.nft[i].collection.name}</span></a></th>
                                        <td class="hide_tel">${Math.round(data.nft[i].floorPrice* 10000) / 10000} ETH</td>
                                        <td id="total"><span title="Owner address" class="address_on_total" style="visibility:${address_on_total_visibility}">${address.substring(39,43)} </span><span class="nft_value">${Math.round((data.nft[i].floorPrice * ETH_price_fromServer * data.nft[i].collection.totalItems) * 10) / 10}</span> $</td>
                                    </tr>
                                    <tr style="display: none;" class="more_info_tr ${tr_class}" id="nft_${i}">
                                        <td colspan="3">
                                            <div class="more_info_tr_div">
                                                Floor Price : ${Math.round(data.nft[i].floorPrice* 10000) / 10000} ETH <br>
                                                Quantity : ${data.nft[i].collection.totalItems}
                                            </div>
                                        </td>
                                    </tr>
                                    `;

                                    tr_nft_print = tr_nft_print + tr_nft;
                                    }
                                    thead_nft = `
                                    <div id="table_div_nft">
                                    <table id="nft">
                                    <thead>
                                    <tr>
                                        <th scope="col">NFT</th>
                                        <td class="hide_tel" scope="col">FLOOR PRICE</td>
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
                                    // tr_nft_print = "<span id='address_vide_nft'> No eNFT<br></span> ";
                            }
                            //Ajouter tt les donnes a la page
                            container.innerHTML = container.innerHTML + thead_nft + tr_nft_print + tfoot_nft + " <div id='loading_defi' class='loading_message'>loading defi</div>";
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
                                    data.defi.sort((a, b) => (a.value < b.value ? 1 : -1));
                                    for (let i = 0; i < data.defi.length > 0; i++) {
                                        if(data.defi[i].type=="Borrow"){ // borrow
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
                                            if(defi_token_value_lend > 1){
                                                var tr_display = '';
                                                var tr_class = '';
                                            }
                                            else{
                                                var tr_display = 'none';
                                                var tr_class = 'showmore_defi';
                                                var defi_showmore = true;
                                            }    
                                            var tr_defi =`
                                            <tr class="tr_defi_borrow_lend ${tr_class}" style="display: ${tr_display};" onclick="more_info_tr(defi_${i}); changeBGColor_tr(this)">
                                                <th scope="row"><a target="blank" href="${data.defi[i].protocol.url}"><img class="defi_icon" src="${data.defi[i].protocol.logo}"><img class="chain_icon_defi" src="images/chain_icon_eclipse.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="a_underline">${data.defi[i].protocol.name}</span></a></th>
                                                <td class="hide_tel">
                                                    <span class="td_lend_borrow_span">Lending : </span> ${defi_token_name_lend}  : <span class="td_lend_borrow_span"> ${Math.round(parseFloat(defi_token_value_lend) * 1) / 1} $</span>
                                                    <br><span class="td_lend_borrow_span">Borrow &nbsp: </span> ${defi_token_name_borrow}  : <span class="td_lend_borrow_span"> ${Math.round(parseFloat(defi_token_value_borrow) * 1) / 1} $</span>
                                                </td>
                                                <td id="total"><span title="Owner address" class="address_on_total" style="visibility:${address_on_total_visibility}">${address.substring(39,43)} </span><span class="defi_value">${Math.round((defi_token_value_lend - defi_token_value_borrow) * 10) / 10}</span> $</td>
                                            </tr>
                                            <tr style="display: none;" class="more_info_tr ${tr_class}" id="defi_${i}">
                                                <td colspan="3">
                                                    <div class="more_info_tr_div">
                                                        Lending : ${defi_token_name_lend} (${Math.round(parseFloat(defi_token_value_lend) * 1) / 1} $)<br>
                                                        Borrowing : ${defi_token_name_borrow}  : (${Math.round(parseFloat(defi_token_value_borrow) * 1) / 1} $)</span> 
                                                    </div>
                                                </td>
                                            </tr>
                                            `;
                                            tr_defi_print = tr_defi_print + tr_defi;

                                        }
                                        else if(data.defi[i].type=="Lending"){ //lending 
                                            let defi_token_name_lend = "";
                                            let defi_token_value_lend = 0;
                                            for(j in data.defi[i].lend){ //token name lend
                                                defi_token_name_lend = defi_token_name_lend + data.defi[i].lend[j].token.symbol;
                                                defi_token_value_lend = defi_token_value_lend + data.defi[i].lend[j].value;
                                                if(j < data.defi[i].lend.length - 1){
                                                    defi_token_name_lend = defi_token_name_lend + " / ";
                                                }
                                            }
                                            if(defi_token_value_lend > 1){
                                                var tr_display = '';
                                                var tr_class = '';
                                            }
                                            else{
                                                var tr_display = 'none';
                                                var tr_class = 'showmore_defi';
                                                var defi_showmore = true;
                                            }                                   
                                            var tr_defi =`
                                            <tr style="display: ${tr_display};" class="${tr_class}" onclick="more_info_tr(defi_${i}); changeBGColor_tr(this)">
                                                <th scope="row"><a target="blank" href="${data.defi[i].protocol.url}"><img class="defi_icon" src="${data.defi[i].protocol.logo}"><img class="chain_icon_defi" src="images/chain_icon_eclipse.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="a_underline">${data.defi[i].protocol.name}</span></a></th>
                                                <td class="hide_tel">
                                                    <span class="td_lend_borrow_span">Lending : </span> ${defi_token_name_lend} : <span class="td_lend_borrow_span"> ${Math.round(parseFloat(defi_token_value_lend) * 1) / 1} $</span>
                                                </td>
                                                <td id="total"><span title="Owner address" class="address_on_total" style="visibility:${address_on_total_visibility}">${address.substring(39,43)} </span><span class="defi_value">${Math.round((defi_token_value_lend) * 10) / 10}</span> $</td>
                                            </tr>
                                            <tr style="display: none;" class="more_info_tr ${tr_class}" id="defi_${i}">
                                                <td colspan="3">
                                                    <div class="more_info_tr_div">
                                                        Lending : ${defi_token_name_lend}  : (${Math.round(parseFloat(defi_token_value_lend) * 1) / 1} $)</span>
                                                    </div>
                                                </td>
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
                                            if(data.defi[i].value > 1){
                                                var tr_display = '';
                                                var tr_class = '';
                                            }
                                            else{
                                                var tr_display = 'none';
                                                var tr_class = 'showmore_defi';
                                                var defi_showmore = true;
                                            }
                                            var tr_defi =`
                                            <tr style="display: ${tr_display};" class="${tr_class}" onclick="more_info_tr(defi_${i}); changeBGColor_tr(this)">
                                                <th scope="row"><a target="blank" href="${data.defi[i].protocol.url}"><img class="defi_icon" src="${data.defi[i].protocol.logo}"><img class="chain_icon_defi" src="images/chain_icon_eclipse.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="a_underline">${data.defi[i].protocol.name}</span></a></th>
                                                <td class="hide_tel">${defi_tokens_name}</td>
                                                <td id="total"><span title="Owner address" class="address_on_total" style="visibility:${address_on_total_visibility}">${address.substring(39,43)} </span><span class="defi_value">${Math.round(parseFloat(data.defi[i].value) * 10) / 10}</span> $</td>
                                            </tr>
                                            <tr style="display: none;" class="more_info_tr ${tr_class}" id="defi_${i}">
                                                <td colspan="3">
                                                    <div class="more_info_tr_div">
                                                        Token(s) : ${defi_tokens_name}<br>
                                                        
                                                    </div>
                                                </td>
                                            </tr>
                                            `;
                                             tr_defi_print = tr_defi_print + tr_defi;

                                        }
                                    }
                                        thead_defi = `
                                        <div id="table_div_defi">
                                        <table id="tokens">
                                        <thead>
                                        <tr>
                                            <th scope="col">DEFI</th>
                                            <td class="hide_tel" style="text-align:left;">ASSETS</td>
                                            <td scope="col" id="total">VALUE</td>
                                            </tr>
                                        </thead>
                                        <tbody id="tbody_defi">`;
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
                                    // tr_defi_print = "<span id='address_vide_defi'>No DeFi<br></span> ";
                                }
                                //Ajouter tt les donnes a la page
                                container.innerHTML = container.innerHTML + thead_defi + tr_defi_print + tfoot_defi + " <div id='loading_solana' class='loading_message'>loading data for solana</div>";
                                document.getElementById('loading_defi').style.display = 'none';
                                //CALCULS ET AFFICHAGE TOTAL
                                calc_and_print(); 






// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
                           



                                var table_token = document.getElementById('tbody_token');
                                var table_nft = document.getElementById('tbody_nft');
                                var table_defi = document.getElementById('tbody_defi');


                                //recup donnes token SOLANA
                                fetch(`/data_solana_tokens?address=${address}`)
                                .then(response => response.json())
                                .then(data => {
                                    if(data.tokens.length > 0){
                                        if(table_token == null){// si le tableau n'éxiste pas déjà (en gros si il a rien sur eclipse)
                                            container.innerHTML = container.innerHTML + `
                                            <div id="table_div_tokens">
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
                                            // address_vide_token.style.display = 'none';
                                            table_token = document.getElementById('tbody_token');
                                        }
                                        for(let i = 0; i < data.tokens.length; i++){
                                            if(data.tokens[i].symbol == "SOL"){
                                                var SOL_PRICE = data.tokens[i].price;
                                            }else{var SOL_PRICE = 0;}
                                            if(data.tokens[i].value > 1 && data.tokens[i].symbol != "N/A"){
                                                var tr_display = '';
                                                var tr_class = 'tr_solana';
                                                var token_img = data.tokens[i].logo;
                                            }
                                            else{
                                                if(data.tokens[i].symbol == "N/A"){var token_img = "images/default_token.png";}
                                                else{var token_img = data.tokens[i].logo;}
                                                var tr_display = 'none';
                                                var tr_class = 'showmore_token';
                                                var token_showmore_sol = true;
                                            }
                                            table_token.innerHTML = table_token.innerHTML + `
                                            <tr style="display: ${tr_display};" class="tr_solana ${tr_class}" onclick="more_info_tr(token_sol_${i}); changeBGColor_tr_sol(this)">
                                                <th scope="row"><a target="_blank" href="https://solscan.io/token/${data.tokens[i].contractAddress}"><img class="token_icon_solana" src="${token_img}"><img class="chain_icon_token" src="images/chain_icon_solana.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="a_underline">${data.tokens[i].symbol}</span></a></th>
                                                <td class="hide_tel">${parseFloat(data.tokens[i].price).toPrecision(4)} $</td>
                                                <td class="hide_tel">${data.tokens[i].amount.substring(0,6)}</td>
                                                <td id="total"><span title="Owner address" class="address_on_total" style="visibility:${address_on_total_visibility}">${address.substring(39,43)} </span><span class="token_value">${Math.round(data.tokens[i].value * 10) / 10}</span> $</td>
                                            </tr>
                                            <tr style="display: none;" class="more_info_tr ${tr_class}" id="token_sol_${i}">
                                                <td colspan="3">
                                                    <div class="more_info_tr_div_sol">
                                                        Quantity : ${data.tokens[i].amount.substring(0,6)}<br>
                                                        Price : ${Math.round(data.tokens[i].price* 10) / 10} $
                                                    </div>
                                                </td>
                                            </tr>
                                            `;

                                        }
                                        if(token_showmore_sol && !token_showmore){
                                            const table_div_tokens = document.getElementById('table_div_tokens');
                                            table_div_tokens.innerHTML = table_div_tokens.innerHTML + '<span id="total_token_showmore_sol" onclick="showmore_token()">show 0$ value</span>';
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
                                            if(table_nft == null){// si le tableau n'éxiste 
                                                container.innerHTML = container.innerHTML + `
                                                <div id="table_div_nft">
                                                <table id="nft">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">NFT</th>
                                                            <td class="hide_tel" scope="col">FLOOR PRICE</td>
                                                            <td scope="col" id="total">VALUE</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="tbody_nft">
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th scope="row">TOTAL</th>
                                                            <td class="hide_tel"></td>
                                                            <td id="total"><span id="total_nft">0</span> $</td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                                </div>
                                                <br>
                                                `;
                                                // address_vide_nft.style.display = 'none';
                                                table_nft = document.getElementById('tbody_nft');
                                            }
                                            for (let i = 0; i < data.nft.length; i++) {
                                                if((Math.round((data.nft[i].floorPrice * SOL_PRICE) * 10) / 10) > 0){
                                                    var tr_display = '';
                                                    var tr_class = '';
                                                }
                                                else{
                                                    var tr_display = 'none';
                                                    var tr_class = 'showmore_nft';
                                                    var nft_showmore_sol = true;
                                                }
                                                table_nft.innerHTML = table_nft.innerHTML +`
                                                <tr style="display: ${tr_display};" class="tr_solana ${tr_class}" onclick="more_info_tr(nft_sol_${i}); changeBGColor_tr_sol(this)">
                                                    <th scope="row"><a target="blank" href="https://solscan.io/token/${data.nft[i].id}"><img class="nft_icon_solana" src="${data.nft[i].collection.imageUrl}" onerror="this.onerror=null;this.src='images/default_nft.png';"><img class="chain_icon_nft" src="images/chain_icon_solana.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="a_underline">${data.nft[i].collection.name}</span></a></th>
                                                    <td class="hide_tel">${Math.round(data.nft[i].floorPrice* 10000) / 10000} SOL</td>
                                                    <td id="total"><span title="Owner address" class="address_on_total" style="visibility:${address_on_total_visibility}">${address.substring(39,43)} </span><span class="nft_value">${Math.round((data.nft[i].floorPrice * SOL_PRICE) * 10) / 10}</span> $</td>
                                                </tr>
                                                <tr style="display: none;" class="more_info_tr ${tr_class}" id="nft_sol_${i}">
                                                    <td colspan="3">
                                                        <div class="more_info_tr_div_sol">
                                                            Floor Price : ${Math.round(data.nft[i].floorPrice* 10000) / 10000} SOL <br>
                                                            Quantity : ${data.nft[i].collection.totalItems}
                                                        </div>
                                                    </td>
                                                </tr>
                                                `;
                                            }
                                            if(nft_showmore_sol && !nft_showmore){
                                                const table_div_nft = document.getElementById('table_div_nft');
                                                table_div_nft.innerHTML = table_div_nft.innerHTML + '<span id="total_nft_showmore_sol" onclick="showmore_nft()">show 0$ value</span>';
                                            }
                                            calc_and_print(); 

                                            
                                        
                                            let chain_icon_nft = document.getElementsByClassName('chain_icon_nft');
                                            for (let i = 0; i < chain_icon_nft.length; i++) {
                                                chain_icon_nft[i].style.visibility = 'visible';
                                            }
                                            
                                        }




                                    //     //recup donnes defi SOLANA
                                        fetch(`/data_solana_defi?address=${address}`)
                                        .then(response => response.json())
                                        .then(data => {
                                            if(data.defi.length > 0){
                                                if(table_defi == null){// si le tableau n'éxiste 
                                                    container.innerHTML = container.innerHTML + `
                                                    <div id="table_div_defi">
                                                    <table id="defi">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">DEFI</th>
                                                                <td class="hide_tel" scope="col">TOKENS</td>
                                                                <td scope="col" id="total">VALUE</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="tbody_defi">
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
                                                    <br>
                                                    `;
                                                    // address_vide_defi.style.display = 'none';
                                                    table_defi = document.getElementById('tbody_defi');
                                                }
                                                data.defi.sort((a, b) => (a.value < b.value ? 1 : -1));
                                                for (let i = 0; i < data.defi.length > 0; i++) {
                                                    if(data.defi[i].type=="Borrow"){ // borrow
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
                                                        if(defi_token_value_lend > 1){
                                                            var tr_display = '';
                                                            var tr_class = '';
                                                        }
                                                        else{
                                                            var tr_display = 'none';
                                                            var tr_class = 'showmore_defi';
                                                            var defi_showmore_sol = true;
                                                        }    
                                                        table_defi.innerHTML = table_defi.innerHTML +`
                                                            <tr class="tr_defi_borrow_lend tr_solana ${tr_class}" style="display: ${tr_display};" onclick="more_info_tr(defi_sol_${i}); changeBGColor_tr_sol(this)">
                                                                <th scope="row"><a target="blank" href="${data.defi[i].protocol.url}"><img class="defi_icon" src="${data.defi[i].protocol.logo}"><img class="chain_icon_defi" src="images/chain_icon_eclipse.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="a_underline">${data.defi[i].protocol.name}</span></a></th>
                                                                <td class="hide_tel">
                                                                    <span class="td_lend_borrow_span">Lending : </span> ${defi_token_name_lend} : <span class="td_lend_borrow_span"> + ${Math.round(parseFloat(defi_token_value_lend) * 1) / 1} $</span>
                                                                    <br><span class="td_lend_borrow_span">Borrow &nbsp: </span> ${defi_token_name_borrow} : <span class="td_lend_borrow_span">${Math.round(parseFloat(defi_token_value_borrow) * 1) / 1} $</span>
                                                                </td>
                                                                <td id="total"><span title="Owner address" class="address_on_total" style="visibility:${address_on_total_visibility}">${address.substring(39,43)} </span><span class="defi_value">${Math.round((defi_token_value_lend - defi_token_value_borrow) * 10) / 10}</span> $</td>
                                                            </tr>
                                                            <tr style="display: none;" class="more_info_tr ${tr_class}" id="defi_sol_${i}">
                                                                <td colspan="3">
                                                                    <div class="more_info_tr_div_sol">
                                                                        Lending : ${defi_token_name_lend} (${Math.round(parseFloat(defi_token_value_lend) * 1) / 1} $)<br>
                                                                        Borrowing : ${defi_token_name_borrow}  : (${Math.round(parseFloat(defi_token_value_borrow) * 1) / 1} $)</span> 
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            `;            
                                                    }
                                                    else if(data.defi[i].type=="Lending"){ //lending 
                                                        let defi_token_name_lend = "";
                                                        let defi_token_value_lend = 0;
                                                        for(j in data.defi[i].lend){ //token name lend
                                                            defi_token_name_lend = defi_token_name_lend + data.defi[i].lend[j].token.symbol;
                                                            defi_token_value_lend = defi_token_value_lend + data.defi[i].lend[j].value;
                                                            if(j < data.defi[i].lend.length - 1){
                                                                defi_token_name_lend = defi_token_name_lend + " / ";
                                                            }
                                                        } 
                                                        if(defi_token_value_lend > 1){
                                                            var tr_display = '';
                                                            var tr_class = '';
                                                        }
                                                        else{
                                                            var tr_display = 'none';
                                                            var tr_class = 'showmore_defi';
                                                            var defi_showmore_sol = true;
                                                        }                                     
                                                        table_defi.innerHTML = table_defi.innerHTML +`
                                                        <tr class="tr_solana ${tr_class}" style="display: ${tr_display};" onclick="more_info_tr(defi_sol_${i}); changeBGColor_tr_sol(this)">
                                                            <th scope="row"><a target="blank" href="${data.defi[i].protocol.url}"><img class="defi_icon" src="${data.defi[i].protocol.logo}"><img class="chain_icon_defi" src="images/chain_icon_eclipse.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="a_underline">${data.defi[i].protocol.name}</span></a></th>
                                                            <td class="hide_tel">
                                                                <span class="td_lend_borrow_span">Lending : </span>${defi_token_name_lend} : <span class="td_lend_borrow_span">${Math.round(parseFloat(defi_token_value_lend) * 1) / 1} $</span>
                                                            </td>
                                                            <td id="total"><span title="Owner address" class="address_on_total" style="visibility:${address_on_total_visibility}">${address.substring(39,43)} </span><span class="defi_value">${Math.round((defi_token_value_lend) * 10) / 10}</span> $</td>
                                                        </tr>
                                                        <tr style="display: none;" class="more_info_tr ${tr_class}" id="defi_sol_${i}">
                                                            <td colspan="3">
                                                                <div class="more_info_tr_div_sol">
                                                                    Lending : ${defi_token_name_lend}  : (${Math.round(parseFloat(defi_token_value_lend) * 1) / 1} $)</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        `;
                                                    }
                                                    else{ //autre positions defi
                                                        let defi_tokens_name = "";
                                                        for (j in data.defi[i].tokens){
                                                            defi_tokens_name = defi_tokens_name + data.defi[i].tokens[j].token.symbol + "<span class='td_lend_borrow_span'>(" + Math.round(data.defi[i].tokens[j].value * 1) / 1 + "$)</span>";
                                                            if(j < data.defi[i].tokens.length - 1){
                                                                defi_tokens_name = defi_tokens_name + " / ";
                                                            }
                                                        }
                                                        if(data.defi[i].value > 1){
                                                            var tr_display = '';
                                                            var tr_class = 'tr_solana';
                                                        }
                                                        else{
                                                            var tr_display = 'none';
                                                            var tr_class = 'showmore_nft';
                                                            var defi_showmore_sol = true;
                                                        }
                                                        table_defi.innerHTML = table_defi.innerHTML +`
                                                        <tr style="dispaly: ${tr_display};" class="tr_solana ${tr_class}" onclick="more_info_tr(defi_sol_${i}); changeBGColor_tr_sol(this)">
                                                            <th scope="row"><a target="blank" href="${data.defi[i].protocol.url}"><img class="defi_icon" src="${data.defi[i].protocol.logo}"><img class="chain_icon_defi" src="images/chain_icon_eclipse.png">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="a_underline">${data.defi[i].protocol.name}</span></a></th>
                                                            <td class="hide_tel">${defi_tokens_name}</td>
                                                            <td id="total"><span title="Owner address" class="address_on_total" style="visibility:${address_on_total_visibility}">${address.substring(39,43)} </span><span class="defi_value">${Math.round(parseFloat(data.defi[i].value) * 10) / 10}</span> $</td>
                                                        </tr>
                                                        <tr style="display: none;" class="more_info_tr ${tr_class}" id="defi_sol_${i}">
                                                            <td colspan="3">
                                                                <div class="more_info_tr_div_sol">
                                                                    Token(s) : ${defi_tokens_name}<br>
                                                                    
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        `;
                                                    }
                                                }
                                                if(defi_showmore_sol && !defi_showmore){
                                                    const table_div_defi = document.getElementById('table_div_defi');
                                                    table_div_defi.innerHTML = table_div_defi.innerHTML + '<span id="total_defi_showmore_sol" onclick="showmore_defi()">show 0$ value</span>';
                                                }
                                                let chain_icon_defi = document.getElementsByClassName('chain_icon_defi');
                                                for (let i = 0; i < chain_icon_defi.length; i++) {
                                                    chain_icon_defi[i].style.visibility = 'visible';
                                                }

                                            }




                                        document.getElementById('loading_solana').style.display = 'none';
                                        create_message_box('success', 'Success !', 'All data fetched successfully for Eclipse and Solana !');

                                        if(table_token == null && table_nft == null && table_defi == null){
                                            container.innerHTML = container.innerHTML + "<span id='address_vide_nft'>Address empty</span>"
                                        }


                                        })
                                        .catch(error => {
                                            create_message_box('error', 'Error fetching Solana Defi', error);
                                            document.getElementById('loading_solana').style.display = 'none';});
                                    })
                                    .catch(error => {
                                        create_message_box('error', 'Error fetching Solana NFT', error);
                                        document.getElementById('loading_solana').style.display = 'none';});
                                })
                                .catch(error => {
                                    create_message_box('error', 'Error fetching Solana token', error);
                                    document.getElementById('loading_solana').style.display = 'none';});
                            })
                            .catch(error => {
                                create_message_box('error', 'Error fetching Eclipse Defi', error);
                                document.getElementById('loading_solana').style.display = 'none';});
                        })
                        .catch(error => {
                            create_message_box('error', 'Error fetching Eclipse NFT', error);
                            document.getElementById('loading_defi').style.display = 'none';});
                    })
                    .catch(error => {
                        create_message_box('error', 'Error fetching ETH price', error);
                        document.getElementById('loading_nft').style.display = 'none';});
                })
                .catch(error => {
                    create_message_box('error', 'Error fetching Eclipse token', error);
                    document.getElementById('loading_token').style.display = 'none';});
                

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
            if(showmore_tokens[i].id.substring(0,6) != "token_" && showmore_tokens[i].id.substring(0,10) != "token_sol_"){
                showmore_tokens[i].style.display = 'table-row';
            }
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
            if(showmore_nfts[i].id.substring(0,4) != "nft_" && showmore_nfts[i].id.substring(0,8) != "nft_sol_"){
                showmore_nfts[i].style.display = 'table-row';
            }
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
            if(showmore_defis[i].id.substring(0,5) != "defi_" && showmore_defis[i].id.substring(0,9) != "defi_sol_"){
                showmore_defis[i].style.display = 'table-row';
            }
        }
        button.innerHTML = 'hide 0$ value';
    } else {
        for (let i = 0; i < showmore_defis.length; i++) {
            showmore_defis[i].style.display = 'none';
        }
        button.innerHTML = 'show 0$ value';
    }
}
function more_info_tr(tr){
    if(window.innerHeight >= 982){ //changer dans css si chgange ici
        if(tr.style.display == "table-row"){
            tr.style.display = "none";
        }
        else{
            tr.style.display = "table-row"; 
        }
    }
}
function changeBGColor_tr(element) {
    if(window.innerHeight >= 982){ //changer dans css si chgange ici
        if(element.style.backgroundColor == "var(--c5)"){
            element.style.backgroundColor = "var(--c1)";
        }
        else{
            element.style.backgroundColor = "var(--c5)"; 
        }
    }
}
function changeBGColor_tr_sol(element) {
    if(window.innerHeight >= 982){ //changer dans css si chgange ici
        if(element.style.backgroundColor == "var(--c8)"){
            element.style.backgroundColor = "var(--c1)";
        }
        else{
            element.style.backgroundColor = "var(--c8)"; 
        }
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




//create_message_box('info', 'NFT collection available', '<a href="https://scopenft.xyz/explore/ECLIPSE:GSJLVQfW9M8S2Zei6iQ9oMxPdYGBY1UBKYeVod8u2Zch?sort=cheapest">Free mint with 1k supply !<br>Mint your on scope !</a>');
