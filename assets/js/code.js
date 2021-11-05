window.onload = function() {

    let casq1 = document.getElementById('roseGold');
    let casq2 = document.getElementById('gris');
    let casq3 = document.getElementById('rose');
    let casq4 = document.getElementById('radio1');
    let casq5 = document.getElementById('radio2');
    let casq6 = document.getElementById('radio3');


    casq1.addEventListener('click', afficheCasque);
    casq2.addEventListener('click', afficheCasque);
    casq3.addEventListener('click', afficheCasque);
    casq4.addEventListener('click', afficheCasque);
    casq5.addEventListener('click', afficheCasque);
    casq6.addEventListener('click', afficheCasque);

    document.getElementById('roseGold').parentElement.style.borderColor = "#fe696a";
}


function afficheCasque(){
    let TabCasq = ['color-option01.jpg', 'color-option02.jpg', 'color-option03.jpg', 'color-option04.jpg', 'color-option05.jpg', 'color-option06.jpg']

    let image = "images/headphones/";

    let select = this.id;

    let element = document.getElementById("bouton");
    element.classList.add("bordure");
    document.getElementById('roseGold').parentElement.style.borderColor = "#e6e6e6";

    if (select == 'roseGold') {
        image = image + TabCasq[0];
        document.getElementById('roseGold').parentElement.style.borderColor = "#fe696a";
    }
    if (select == 'gris') {
        image = image + TabCasq[1];
    }
    if (select == 'rose') {
        image = image + TabCasq[2];
    }
    if (select == 'radio1') {
        image = image + TabCasq[3];
    }
    if (select == 'radio2') {
        image = image + TabCasq[4];
    }
    if (select == 'radio3') {
        image = image + TabCasq[5];
    }

    document.getElementById('imgCasque').src = image;

}