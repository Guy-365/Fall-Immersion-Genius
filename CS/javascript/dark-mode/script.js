function darkMode() {
     
    const Back = document.body;

    
    if (Back.style.backgroundColor === 'black') {
      
        Back.style.backgroundColor = 'white';
        body.style.color = 'black';
    } else {
        
        Back.style.backgroundColor = 'black';
        Back.style.color = 'white';
    }

}
