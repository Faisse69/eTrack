<!doctype html>
<html lang="fr" >
<head>
  <meta charset="utf-8">
  <title>eTrack - Wallet visualizer</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="images/eTrack_icon_green.ico" />
</head>





<body onscroll="scroll()">
    <header id="header">   

        <div id="header_left">
            <a href="https://www.e-track.xyz/" class="header_elem_pc"><IMG src="images/EclipseTrack_light.png" id="img_etrack_logo"></a>
            <a href="https://www.e-track.xyz/" class="header_elem_tel"><IMG src="images/eTrack_logo_light.png" id="img_etrack_logo_tel"></a>
        </div> 
        
        <div id="header_right">
          <form action="" method="get" id="form_address_header" name="form_address">
            <input type="text" name="address" placeholder="Eclipse address... " id="form_address_header_input">
            <button type="submit" value="🔎" id="form_address_header_button">
          </form>
        </div>

    </header>
    <div id="cache_header"></div>
    <div id="background_fixed"></div>

<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  -->

    
    <div id="page">
        <div id="container_header">
          <span id="container_header_address" onclick="copy_address()">Address</span> 
          <span id="container_header_total">TOTAL : <span id="total_total">0</span> $</span>
        </div>
        <div id="container">
          <div id="container_form_box">
            <form action="" method="get" id="form_address" name="form_address">
              <div id="form_address_more_address">
                <input autofocus type="text" name="address" placeholder="Eclipse address... " id="form_address_input" class="form_address_more_address_input">
              </div>
              <div id="cache_form_address_more"></div>
              <button type="button" id="form_address_more" title="Add one address" onclick="add_address()">+</button>
              <button id="form_address_submit" type="submit" value="🔎">
            </form>
          </div>
        </div>
    </div>


 <!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  -->


    <footer>
        <div id="footer_header">
            <div id="footer_header_left"><a href="https://x.com/faisse0" target="blank">@faisse0</a> - © - <a href="https://github.com/Faisse69/eTrack/" target="blank">Open Source on GitHub</a> </div>
            <!-- lmao the "©" is just here to make it look pro -->
            <a href="https://discord.gg/Cg8HjERN" target="blank"><img class="footer_contacts" src="images/discord_light.png" id="discord"></a>
            <a href="https://x.com/faisse0" target="blank"><img class="footer_contacts" src="images/x_light.png" id="x"></a>
            <a href="https://github.com/Faisse69/eTrack" target="blank"><img class="footer_contacts" src="images/github_light.png" id="github"></a>
        </div>

        <div id="footer">
          <div class="footer_contenu" id="footer_contenu_left">
            Legal and Policy Information <br>
            <span>
              Legal notices : this app is totaly <a href="https://github.com/Faisse69/eTrack" target="blank">opensource on Github</a>.<br>
              Terms and conditions : It only builded for a wallet analysis use, nothing else.<br>
              Cookie policy : We dont use cookies or store any data, we dont track you.<br>
            </span>
          </div>
          <div class="footer_contenu" id="footer_contenu_middle">
            Thanks to <br>
            <span>
              <a href="https://app.getnimbus.io" target="blank">Nimbus</a> APi to fetch data onchain.<br>
              <a href="https://www.eclipse.xyz" target="blank">Eclipse</a> team to support me on this project.<br>
              Community to help me keeping this active !
            </span>
          </div>
          <div class="footer_contenu" id="footer_contenu_right" onclick="click_address_don()">
            Why Donnate / Tips ?<br>
            <span>
              GU2PA837V4qHxvkPVzdUM9c88ptox9dK2gPFMzg8XytE <br>Eclipse Network<br>
              To pay the hosting, the APi, and the domain !<br>
              For now its a cheap hosting offer, and cheap APi, so website is slow<br>
              Help me to pay better offer ! 💚
            </span>
          </div>
          <div id="footer_contenu_large">
            <!-- jsp quoi mettre dedans mdr -->
          </div>
          <div id="footer_bigimage"></div>
        </div>
    </footer>


    <script src="script.js"></script> 
</body>
</html>