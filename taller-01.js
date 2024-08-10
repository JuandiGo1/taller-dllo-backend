function covertidorTemp(C) {
    return C*(9/5)+32
}

function resolvedor(a,b,c, positive) {

    const x1 = (-b + Math.sqrt((Math.pow(b, 2) - 4 * a * c))) / (2 * a)
    const x2 = (-b - Math.sqrt((Math.pow(b, 2) - 4 * a * c))) / (2 * a)
    

    return positive ? x1 : x2
}

function mejorParidad(num){
    return !(num % 2)
}

function peorParidad(num){
    let paridad

    for(let i=0; i<num+1;i++){
        if(i==num){
            paridad = num % 2 
        }
    }

    let r
    if (paridad == 0){
        r=true
    }else{
        r=false
    }
    return r
}


//PUNTO1
console.log(covertidorTemp(100))

//PUNTO2
console.log(resolvedor(1,5,4,false))

//PUNTO3
console.log(mejorParidad(10))

//PUNTO4
console.log(peorParidad(10))