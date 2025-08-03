function carregar() {
    let horaSistem = new Date();
    let hora = horaSistem.getHours().toString().padStart(2, '0');
    let min = horaSistem.getMinutes().toString().padStart(2, '0');

    let msg = document.getElementById('msg');
    let img = document.getElementById('img');

    msg.innerText = `Agora são ${hora}:${min}.`;
    if (hora >= 0 && hora < 5) {
        //madrugada
        img.src = './img/fotomadrugada.png';
        document.body.style.background = '#91808C';
    } else if (hora < 12) {
        //manhã
        img.src = './img/fotomanha.png';
        document.body.style.background = '#ECDBC2';
    } else if (hora < 18) {
        //tarde
        img.src = './img/fototarde.png';
        document.body.style.background = '#FCC664';
    } else {
        //noite
        img.src = './img/fotonoite.png';
        document.body.style.background = '#011C37';
    }
}