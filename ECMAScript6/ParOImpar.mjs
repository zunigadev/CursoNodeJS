export function contador(numero) {
        if (numero === 0) {
            return "Es un numero par";
        }else if (numero === 1) {
            return "Es un numero impar";
        }else{
            //console.log(numero);
            return contador(numero - 2);
        }
}

export let suma = (x,y) => {
    return x + y;
}




//console.log(contador(20)); 