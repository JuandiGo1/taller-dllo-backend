function findMax(lista ){
    let max=0
    lista.forEach(i =>{
        if (i> max){
            max=i
        }
    })
    return max
}


function includes(lista, num){
    let find= false
    lista.forEach(i =>{
        if (i === num){
            find= true
        }
    })
    return find

}

function sum(lista){
    return lista.reduce((acumulador, valorActual) => {
        return acumulador + valorActual;
    }, 0);
}

function missingNumbers(lista){
    const min = Math.min(...lista);
    const max = Math.max(...lista);
    const numerosFaltantes = [];

    for (let i = min; i <= max; i++) {
        if (!lista.includes(i)) {
            numerosFaltantes.push(i);
        }
    }

    return numerosFaltantes;
}

//PUNTO 1
console.log(findMax([3,17,-1,4,-19]))

//PUNTO 2
console.log(includes([3,17,-1,4,-19],4))

//PUNTO 2
console.log(sum([3,17,-1,4,-19]))

//PUNTO 4
console.log(missingNumbers([7, 2, 4, 6, 3, 9 ]))
