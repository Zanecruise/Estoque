// inicia o código com o box não estando na tela
function showDiv() {
    document.getElementById('BOX').style.display = "block";
}

// cria um vetor
let json = []

// cria um espaço no localStorage
if (!localStorage.clickcount) {
    localStorage.setItem('banconew', '[{}]')
}

function Done() {

        // cria uma variavel de controle para saber quantos objetos foram criados
        if (typeof(Storage) !== "undefined") {
          if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
          } else {
            localStorage.clickcount = 1;
          }
        }

    // forma do objeto
    class produto {
        nome = "1";
        quantidade = 0;
        precocompra = 0;
        precovenda = 0;
        codigo = 0;
        tipo = "1";

    }

    // pega os elementos do HTML e passa para o objeto
    var Produtos = new produto();
    Produtos.nome = (document.getElementById("produto").value)
    Produtos.quantidade = (parseInt(document.getElementById("quantidade").value))
    Produtos.precocompra = (parseFloat(document.getElementById("precocompra").value))
    Produtos.precovenda = (parseFloat(document.getElementById("precovenda").value))
    Produtos.codigo = (parseInt(document.getElementById("codigo").value))
    Produtos.tipo = (document.getElementById("tipo").value)
  
    // converte para Json
    const myJSON = JSON.stringify(Produtos);
    localStorage.setItem(localStorage.clickcount , myJSON);

    // adiciona o Json no localStorage
    localStorage.setItem("banco", myJSON);
    
    // passa por parametro o conteudo do objeto para ser "setado"
    var addItem = function (nome, quantidade, precocompra, precovenda, codigo, tipo) {

        var oldItems = JSON.parse(localStorage.getItem('banconew')) || [];

        if( Object.keys(oldItems[0]).length === 0 ) {
            oldItems.shift()
        }
    
        // cria a forma do objeto
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

        // cria a forma do objeto
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
        
        // cria um produto com os atributos definidos
        addItem(Produtos.nome, Produtos.quantidade, Produtos.precocompra, Produtos.precovenda, Produtos.codigo, Produtos.tipo);
        
    } else{

        // edita os valores
        result.nome = (document.getElementById("produto").value)
        result.quantidade = (parseInt(document.getElementById("quantidade").value))
        result.precocompra = (parseFloat(document.getElementById("precocompra").value))
        result.precovenda = (parseFloat(document.getElementById("precovenda").value))
        result.tipo = (document.getElementById("tipo").value)
        
        uploadItem(result.nome, result.quantidade, result.precocompra, result.precovenda, result.codigo, result.tipo)

    }

}

var vege = JSON.parse(localStorage.getItem("banconew"));


// sempre que for adicionado um produto ele é atualizado e exibido na tela
window.onload = (event) => {

    var vege = JSON.parse(localStorage.getItem("banconew"));

    // faz o controle mostrando no console o que tem em cada variavel e cria um espaço para armazenar o item que vai ser inserido na tela
    json = vege ? vege : [];
    console.log(json)
    console.log(vege)
    var target = document.querySelector('.list-group');

    if(localStorage.clickcount) {
    json.forEach(function(ocorrencia) {
        // link externo 
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

// função que limpa o localStorage, excluindo todos os objetos criados
function removeprodutos(){

    // menssagem de confirmação para o usuario
    let text = "Tem certeza que quer remover todos os produtos?\nClique em OK ou Cancel.";
    if (confirm(text) == true) {

        //limpa o localStorage
        localStorage.clear()

        // atualiza a pagina
        window.location.reload(true)
    }

}




