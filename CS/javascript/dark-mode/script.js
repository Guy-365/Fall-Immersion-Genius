function darkMode() {
    
    const Darkmode = document.body;

    if (Darkmode.style.backgroundColor === 'black') {
        Darkmode.style.backgroundColor = 'white';
        Darkmode.style.color = 'black';
    } else {
        Darkmode.style.backgroundColor = 'black';
        Darkmode.style.color = 'white';
    }

}
