let bton = document.getElementById("jg");

bton.addEventListener('click', (e) => {
    for(let cont = 0; cont <= 20; cont++){
        cont = cont;
        if (cont%2 == 0){
            console.log(`${cont} es par `);
        } else{
           console.log(`${cont} es impar `);
        }
    }
});
