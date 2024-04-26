function contar(){
    let inicio = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');

    let res = document.getElementById('res');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Digite os valores para o contador`;
    }else{
        res.innerHTML = `Contando: <br>`
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(p <= 0){
            p = 1;
        }

        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F3C3}`
            }
        }else{
            //contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F3C3}`
            }
        }
        res.innerHTML += `\u{1F3C1}`;
        
    }
}