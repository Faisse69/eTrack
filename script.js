const header = document.getElementById("header");
const footer_header = document.getElementById("footer_header");
const img1 = document.getElementById('img_eclipse_logo');
const img2 = document.getElementById('img_etrack_logo');
const img3 = document.getElementById('img_etrack_logo_tel');
const a1 = document.getElementById('header_a_prJS1');
const a2 = document.getElementById('header_a_prJS2');
const foot_icon1 = document.getElementById('discord');
const foot_icon2= document.getElementById('x');
const foot_icon3 = document.getElementById('team');
const foot_icon4 = document.getElementById('github');
const color_scheme_dark = window.matchMedia("(prefers-color-scheme:dark)");
const color_scheme_light = window.matchMedia("(prefers-color-scheme:light)");



// if(color_scheme_dark.matches){//light
//     img1.src = 'Eclipse_logo_lockup_dark.png';
//     img2.src = 'eTrack_logo_lockup_black.png';
//     img3.src = 'eTrack_logo_black.png';
//     foot_icon1.src = 'discord_dark.png';
//     foot_icon2.src = 'x_dark.png';
//     foot_icon3.src = 'team_dark.png';
//     foot_icon4.src = 'github_dark.png';
// }else{//dark
//     // de base dans le CSS
// }






//ADRESS ET DONEES
const adress = window.location.search.substring(8);
if (adress.length==44){

    // const requestOptions = {
    //     method: "get",
    //     headers: {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE3MzUyMzUwOTIxOTMsImVtYWlsIjoiZWx0YnJsMDFAZ21haWwuY29tIiwiYWN0aW9uIjoidG9rZW4tYXBpIiwiaWF0IjoxNzM1MjM1MDkyfQ.qHZBZ5LI4X32zTr_GJW3NGWbZsuReRwayqOv9fgTk_4"}
    //   }
    //   var on_adress = fetch("https://public-api.eclipsescan.xyz/v1.0/account/detail?address="+adress, requestOptions)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));




    const container_header_adress = document.getElementById('container_header_adress');
    const header_a_prJS2 = document.getElementById('header_a_prJS2');
    container_header_adress.innerHTML = adress.substring(0,2) + "..." + adress.substring(39,43);
    header_a_prJS2.innerHTML = adress.substring(0,2) + "..." + adress.substring(39,43);
    const container = document.getElementById('container');
    
    var tr_token_print = "";
    var is_token = true; //estce que ya des tokens dans l'adress ?
    var thead_token = '';
    var tfoot_token = '';
    if(is_token == true){
        for (let i = 0; i < 3; i++) {
            var tr_token_name = 'ETH';
            var tr_token_price = i;
            var tr_token_quantity = i*2;
            var tr_token_value = parseInt(tr_token_price) * parseInt(tr_token_quantity);
            var tr_token = `
                <tr id="tr1">
                  <th scope="row">`+tr_token_name+`</th>
                  <td>`+tr_token_price+` $</td>
                  <td>`+tr_token_quantity+`</td>
                  <td id="total"><span class="token_value">`+tr_token_value+`</span> $</td>
                </tr>
            `;
            tr_token_print = tr_token_print + tr_token;
        }
        thead_token = `
        <div id="table_div">
        <table id="tokens">
        <thead>
        <tr>
            <th scope="col">TOKENS</th>
            <td scope="col">PRICE</td>
            <td scope="col">QUANTITY</td>
            <td scope="col" id="total">VALUE</td>
            </tr>
        </thead>
        <tbody>`;

        tfoot_token = `
        </tbody>
        <tfoot>
            <tr>
                <th scope="row" colspan="2">TOTAL</th>
                <td></td>
                <td id="total"><span id="total_tokens">0</span> $</td>
            </tr>
        </tfoot>
        </table>
        </div>`; 
    }else{
        tr_token_print = "<span id='adress_vide'> Aucuns tokens</span>";
    }

    var tr_nft_print = "";
    var is_nft = false;//estce que ya des tokens dans l'adress ?
    var thead_nft = '';
    var tfoot_nft = '';
    if( is_nft == true){
        for (let i = 0; i < 2; i++) {
            var tr_nft_name = 'ASC';
            var tr_nft_price = i+10;
            var tr_nft_quantity = i+10*2;
            var tr_nft_value = parseInt(tr_nft_price) * parseInt(tr_nft_quantity);
            var tr_nft =`
                    <tr id="tr1">
                    <th scope="row">`+tr_nft_name+`</th>
                    <td>`+tr_nft_price+` $</td>
                    <td>`+tr_nft_quantity+`</td>
                    <td id="total"><span class="nft_value">`+tr_nft_value+`</span> $</td>
                    </tr>
                `;
            tr_nft_print = tr_nft_print + tr_nft;
            }
            thead_nft = `
            <div id="table_div">
            <table id="nft">
            <thead>
               <tr>
                  <th scope="col">NFT</th>
                  <td scope="col">PRICE</td>
                  <td scope="col">QUANTITY</td>
                  <td scope="col" id="total">VALUE</td>
                </tr>
              </thead>
              <tbody>`;
              tfoot_nft=`
              </tbody>
                <tfoot>
                    <tr>
                    <th scope="row" colspan="2">TOTAL</th>
                    <td></td>
                    <td id="total"><span id="total_nft">0</span> $</td>
                    </tr>
                </tfoot>
            </table>
            </div>
              `;
    }else{
            tr_nft_print = "<span id='adress_vide'> No eNFT</span>";
    }

    var tr_defi_print = "";
    var is_defi = false;//estce que ya des tokens dans l'adress ?
    var thead_defi = '';
    var tfoot_defi = '';
    if(is_defi == true){
            for (let i = 0; i < 4; i++) {
                var tr_defi_name = 'Orca';
                var tr_defi_price = i+1;
                var tr_defi_quantity = i+4*2;
                var tr_defi_value = parseInt(tr_defi_price) * parseInt(tr_defi_quantity);
                var tr_defi =`
                        <tr id="tr1">
                        <th scope="row">`+tr_defi_name+`</th>
                        <td id="total"><span class="defi_value">`+tr_defi_value+`</span> $</td>
                        </tr>
                    `;
                tr_defi_print = tr_defi_print + tr_defi;
                }
            thead_defi = `
            <div id="table_div">
            <table id="tokens">
            <thead>
            <tr>
                <th scope="col">DEFI</th>
                <td scope="col" id="total">VALUE</td>
                </tr>
            </thead>
            <tbody>`;
            tfoot_defi = `
            </tbody>
            <tfoot>
                <tr>
                <th scope="row">TOTAL</th>
                <td id="total"><span id="total_defi">0</span> $</td>
                </tr>
            </tfoot>
            </table>
            </div>
            `;
    }else{
                tr_defi_print = "<span id='adress_vide'> No DeFi</span>";
    }

    container.innerHTML = thead_token+tr_token_print+tfoot_token+'<hr>'+thead_nft+tr_nft_print+tfoot_nft+'<hr>'+thead_defi+tr_defi_print+tfoot_defi;

    //CALCULS ET AFFICHAGE TOTAL
    const total_total = document.getElementById('total_total');
    const total_tokens = document.getElementById('total_tokens');
    const total_nft = document.getElementById('total_nft');
    const total_defi = document.getElementById('total_defi');
    const token_value = document.getElementsByClassName('token_value');
    const nft_value = document.getElementsByClassName('nft_value');
    const defi_value = document.getElementsByClassName('defi_value');
    if(token_value.length>0){
        for (let i = 0; i < token_value.length; i++) {
            total_tokens.innerHTML = parseInt(total_tokens.innerHTML) + parseInt(token_value[i].innerHTML);
            var tot_tokens = total_tokens.innerHTML;
        }
    }else{var tot_tokens = 0;}
    if(nft_value.length>0){
        for (let i = 0; i < nft_value.length; i++) {
            total_nft.innerHTML = parseInt(total_nft.innerHTML) + parseInt(nft_value[i].innerHTML);
            var tot_nft =total_nft.innerHTML;
        }
    }else{var tot_nft = 0;}
    if(defi_value.length>0){
        for (let i = 0; i < defi_value.length; i++) {
            total_defi.innerHTML = parseInt(total_defi.innerHTML) + parseInt(defi_value[i].innerHTML);
            var tot_defi = total_defi.innerHTML;
        }
    }else{var tot_defi = 0;}

    total_total.innerHTML = parseInt(tot_tokens) + parseInt(tot_nft) + parseInt(tot_defi);

}else{
    console.log('invalid adress');
}





//DISIGN AU SCROLL
function scroll(){
    if ((window.innerHeight + document.documentElement.scrollTop) >= document.documentElement.scrollHeight) {
        a1.style.setProperty("color", "var(--c1)");
        a2.style.setProperty("color", "var(--c1)");
        header.style.setProperty("background-color", "var(--c3)");
        header.style.setProperty("border-radius", "0px 0px 20px 20px");
        header.style.setProperty("box-shadow", "0px 0px 70px var(--c1)");
        footer_header.style.setProperty("background-color", "var(--c3)");
        footer_header.style.setProperty("border-radius", "20px 20px 0px 0px");
        if(color_scheme_dark.matches){//light
            img1.src = 'Eclipse_logo_lockup_dark.png';
            img2.src = 'eTrack_logo_lockup_black.png';
            img3.src = 'eTrack_logo_black.png';
            foot_icon1.src = 'discord_dark.png';
            foot_icon2.src = 'x_dark.png';
            foot_icon3.src = 'team_dark.png';
            foot_icon4.src = 'github_dark.png';
        }else{//dark
            img1.src = 'Eclipse_logo_lockup_light.png';
            img2.src = 'eTrack_logo_lockup_white.png';
            img3.src = 'eTrack_logo_white.png';
            foot_icon1.src = 'discord_light.png';
            foot_icon2.src = 'x_light.png';
            foot_icon3.src = 'team_light.png';
            foot_icon4.src = 'github_light.png';
        }
        
    }
    else if(header.style.backgroundColor=="var(--c3)"){
        a1.style.setProperty("color", "var(--c2)");
        a2.style.setProperty("color", "var(--c2)");
        header.style.setProperty("background", "linear-gradient(to bottom, var(--c3), transparent)");
        header.style.setProperty("border-radius", "0px 0px 0px 0px");
        header.style.setProperty("box-shadow", "0px 0px 0px var(--c1)");
        footer_header.style.setProperty("background-color", "linear-gradient(to top, var(--c3), transparent)");
        footer_header.style.setProperty("border-radius", "0px 0px 0px 0px");
        if(color_scheme_dark.matches){//light
            img1.src = 'Eclipse_logo_lockup_light.png';
            img2.src = 'eTrack_logo_lockup_white.png';
            img3.src = 'eTrack_logo_white.png';
            foot_icon1.src = 'discord_light.png';
            foot_icon2.src = 'x_light.png';
            foot_icon3.src = 'team_light.png';
            foot_icon4.src = 'github_light.png';
        }else{//dark
            img1.src = 'Eclipse_logo_lockup_dark.png';
            img2.src = 'eTrack_logo_lockup_black.png';
            img3.src = 'eTrack_logo_black.png';
            foot_icon1.src = 'discord_dark.png';
            foot_icon2.src = 'x_dark.png';
            foot_icon3.src = 'team_dark.png';
            foot_icon4.src = 'github_dark.png';
        }
   
    }
}


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