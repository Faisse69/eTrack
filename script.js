const header = document.getElementById("header");
const img1 = document.getElementById('img_eclipse_logo');
const img2 = document.getElementById('img_etrack_logo');
const a1 = document.getElementById('header_a_prJS1');
const a2 = document.getElementById('header_a_prJS2');
const a3 = document.getElementById('header_a_prJS3');
const a4 = document.getElementById('header_a_prJS4');

function scroll(){
    if ((window.innerHeight + document.documentElement.scrollTop) >= document.documentElement.scrollHeight) {
        header.style.setProperty("background-color", "var(--c3)");
        header.style.setProperty("border-radius", "0px 0px 20px 20px");
        header.style.setProperty("box-shadow", "0px 0px 50px var(--c1)");
        a1.style.setProperty("color", "var(--c1)");
        a2.style.setProperty("color", "var(--c1)");
        a3.style.setProperty("color", "var(--c1)");
        a4.style.setProperty("color", "var(--c1)");
        img1.src = 'images/Eclipse_logo_lockup_dark.png';
        img2.src = 'images/eTrack_logo_lockup_black.png';

    }
    else if(header.style.backgroundColor=="var(--c3)"){
        header.style.setProperty("background", "linear-gradient(to bottom, var(--c3), transparent)");
        header.style.setProperty("border-radius", "0px 0px 0px 0px");
        header.style.setProperty("box-shadow", "0px 0px 0px var(--c1)");
        a1.style.setProperty("color", "var(--c2)");
        a2.style.setProperty("color", "var(--c2)");
        a3.style.setProperty("color", "var(--c2)");
        a4.style.setProperty("color", "var(--c2)");
        img1.src = 'images/Eclipse_logo_lockup_light.png';
        img2.src = 'images/eTrack_logo_lockup_white.png';
   
    }
}