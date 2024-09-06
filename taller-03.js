function desglosarString(str, tipo){
    const vocales= ['a','e','i','o','u']
    let cant= 0
    let pal = str.split('')
    if (tipo == 'vocales'){     
        cant= pal.filter((item)=> vocales.includes(item)).length
        return cant
    }
    
    if (tipo == 'consonantes'){
        cant= pal.filter((item)=> !vocales.includes(item)).length
        return cant
    }

    return cant
}

function twoSum(lista, num) {
    return lista.reduce((acumulador, elemento, i) => {
        if (acumulador.resultado) {
            return acumulador; 
        }

        let complemento = num - elemento;

        if (acumulador.mapa.has(complemento)) {
            acumulador.resultado = [acumulador.mapa.get(complemento), i];
        } else {
            acumulador.mapa.set(elemento, i);
        }

        return acumulador;
    }, { mapa: new Map(), resultado: null }).resultado;
}

function conversionRomana(romano) {
    const mapaRomano = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    const valores = romano.split('').map(cifra => mapaRomano[cifra])

    return numero = valores.reduce((total, actual, i)=>{
        siguient = valores[i+1]
        if (siguient> valores[i]){
             return total -actual
        }else{
            return total +actual
        }
        
    },0)

    return numero
}

//PUNTO 1
console.log(desglosarString("murcielagos","vocales"))
console.log(desglosarString("murcielagos","consonantes"))

//PUNTO 2
console.log(twoSum([ 2, 7, 11, 15], 9))
console.log(twoSum([  3, 4, 2], 6))

//PUNTO 3
console.log(conversionRomana('III'))
console.log(conversionRomana('XIV'))
console.log(conversionRomana('MMXXIV'))
console.log(conversionRomana('MXMVII'))