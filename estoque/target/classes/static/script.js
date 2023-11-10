function showDiv() {
    document.getElementById('BOX').style.display = "block";
}
let json = []

if (!localStorage.clickcount) {
    localStorage.setItem('banconew', '[{}]')
}

function Done() {

        if (typeof(Storage) !== "undefined") {
          if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
          } else {
            localStorage.clickcount = 1;
          }
        }

    class produto {
        nome = "1";
        quantidade = 0;
        precocompra = 0;
        precovenda = 0;
        codigo = 0;
        tipo = "1";

    }

    var Produtos = new produto();
    Produtos.nome = (document.getElementById("produto").value)
    Produtos.quantidade = (parseInt(document.getElementById("quantidade").value))
    Produtos.precocompra = (parseFloat(document.getElementById("precocompra").value))
    Produtos.precovenda = (parseFloat(document.getElementById("precovenda").value))
    Produtos.codigo = (parseInt(document.getElementById("codigo").value))
    Produtos.tipo = (document.getElementById("tipo").value)
  
    const myJSON = JSON.stringify(Produtos);
    localStorage.setItem(localStorage.clickcount , myJSON);

    localStorage.setItem("banco", myJSON);
    
    var addItem = function (nome, quantidade, precocompra, precovenda, codigo, tipo) {

        var oldItems = JSON.parse(localStorage.getItem('banconew')) || [];

        if( Object.keys(oldItems[0]).length === 0 ) {
            oldItems.shift()
        }
    
        var newItem = {
            'nome': nome,
            'quantidade': quantidade,
            'precocompra': precocompra,
            'precovenda': precovenda,
            'codigo': codigo,
            'tipo': tipo
    
        }
        
        oldItems.push(newItem);

        localStorage.setItem('banconew', JSON.stringify(oldItems));

    };

    var uploadItem = function (nome, quantidade, precocompra, precovenda, codigo, tipo) {

        var oldItems = JSON.parse(localStorage.getItem('banconew')) || [];

        if( Object.keys(oldItems[0]).length === 0 ) {
            oldItems.shift()
        }

    
        var newItem = {
            'nome': nome,
            'quantidade': quantidade,
            'precocompra': precocompra,
            'precovenda': precovenda,
            'codigo': codigo,
            'tipo': tipo
    
        }
        
        oldItems[daleda] = (newItem);

        localStorage.setItem('banconew', JSON.stringify(oldItems));

    };

    var jsObjects = vege
 
    var result = jsObjects.find(obj => {
        
        return obj.codigo === Produtos.codigo // INPUT
    })

    var daleda = jsObjects.findIndex(obj => {
        
        return obj.codigo === Produtos.codigo // INPUT
    })
    
    if(result == undefined){
        
        
        addItem(Produtos.nome, Produtos.quantidade, Produtos.precocompra, Produtos.precovenda, Produtos.codigo, Produtos.tipo);
        
    } else{

        result.nome = (document.getElementById("produto").value)
        result.quantidade = (parseInt(document.getElementById("quantidade").value))
        result.precocompra = (parseFloat(document.getElementById("precocompra").value))
        result.precovenda = (parseFloat(document.getElementById("precovenda").value))
        result.tipo = (document.getElementById("tipo").value)
        
        uploadItem(result.nome, result.quantidade, result.precocompra, result.precovenda, result.codigo, result.tipo)

    }

}

var vege = JSON.parse(localStorage.getItem("banconew"));

window.onload = (event) => {

    var vege = JSON.parse(localStorage.getItem("banconew"));

    json = vege ? vege : [];
    console.log(json)
    console.log(vege)
    var target = document.querySelector('.list-group');

    if(localStorage.clickcount) {
    json.forEach(function(ocorrencia) {
        // link externo / wrapper
        var a = document.createElement('a');
        a.className = 'produtostodos';
        a.setAttribute('data-uib', 'twitter%20bootstrap/list_item');
        a.setAttribute('data-ver', '1');
        a.id = 'teste';
        // titulo
        var heading = document.createElement('h4');
        heading.className = 'titulo';
        heading.innerHTML = ocorrencia.nome; // NOME
        // texto
        var q = document.createElement('p');
        q.className = 'list-group-item-text';
        q.innerHTML = 'Quantidade:' + ocorrencia.quantidade;

        var pc = document.createElement('p');
        pc.className = 'precocompra';
        pc.innerHTML = 'Preço de compra:' + ocorrencia.precocompra;

        var pv = document.createElement('p');
        pv.className = 'precovenda';
        pv.innerHTML = 'Preço de venda:' + ocorrencia.precovenda;

        var c = document.createElement('p');
        c.className = 'codigo';
        c.innerHTML = 'Código do produto:' + ocorrencia.codigo;

        var t = document.createElement('p');
        t.className = 'tipo';
        t.innerHTML = 'Tipo:' + ocorrencia.tipo;

        // inserir no DOM
        a.appendChild(heading);
        a.appendChild(q);
        a.appendChild(pc);
        a.appendChild(pv);
        a.appendChild(c);
        a.appendChild(t);
        target.appendChild(a);

})};

}



function removeprodutos(){

    let text = "Tem certeza que quer remover todos os produtos?\nClique em OK ou Cancel.";
    if (confirm(text) == true) {
        localStorage.clear()

        window.location.reload(true)
    }

}




