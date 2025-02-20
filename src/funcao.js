       // 1 - Leio os dados preenchidos                                                           -- Ler_Dados_Preenchidos_Pelo_Input --
      // 2 - Valido os dados para ver se todos os inputs foram preenchidos                        --         Validacao_de_Campos      --
     // 3 - Adiciono os dados dentro do ArrayVazio no metodo Pai                                  -- Adicionar_Dados_dentro_do_Array  --
    // 4 - Executo o programa e listo na tabela as informações geradas dentro do input            --     Gerar_Informacao_na_Tela     --
   // 5 -  Executo a exclusão de itens da tabela                                                  --     exclusao_de_intens_da_tabela --


class Produtos{
    constructor(){
        this.id = 1; // criamos um id que comeca na contagem (1).
        this.ArrayVazio = [] // criamos um Array Vazio.
        this.Editar_Dados_input_pelo_id = null; // Estamos dando um valor nulo para a edição do ID Selecionado.
    };

    // Metodo PAI
    salvar(){

      let produtos = this.Ler_Dados_Preenchidos_Pelo_Input();

      if (this.Validacao_de_Campos(produtos) == true) {       // Verifico se os Dados foram corretamente preenchidos 
           if (this.Editar_Dados_input_pelo_id == null) {    //  Se for necessário editar algum produto edito através dessa condição
                this.Adicionar_Dados_dentro_do_Array(produtos)
           } else {
                this.atualizar(this.Editar_Dados_input_pelo_id, produtos);
           }
            
      };

      this.Gerar_Informacao_na_Tela();
      this.limpeza_do_input(produtos);   // deletamos dinamicamente para que os inputs possam ser alimentados novamente.
    };

    // 01 Metodo Filho
    Ler_Dados_Preenchidos_Pelo_Input(){
        
      
        let produto = {} // <-- Criamos um objeto vazio    <--  OBJETO VAZIO                       

        produto.id = this.id;                                                     // colocamos o id dentro do objeto vazio
        produto.nome = document.getElementById('nome').value;          // colocamos o nome do produto dentro do objeto vazio com o seu valor através do value.
        produto.endereco =  document.getElementById('Endereço').value;     // colocamos o valor do produto dentro do objeto vazio com o seu valor através do value.
        produto.tipo_de_pao = document.querySelector('select[name="selecao-de-pao"]').value
        produto.Carne = document.querySelector('select[name="menu"]').value
        produto.salada = document.querySelector('select[name="menu-salada"]').value



        return produto;                                         
    };

    // 02 Metodo Validando campos
    //  Se todos os campos estiverem preenchidos serão validados e jogados para o metodo PAI ---> salvar()

    Validacao_de_Campos(produto){

        let msg = '';

        if (produto.nome == '') {
            msg += 'Informe o nome do Cliente ' + '\n'
        };

        if (produto.endereco == '') {
            msg += 'Informe o Endreco do Cliente' + '\n'
        };

        if (produto.tipo_de_pao == '') {
            msg += 'Informe o Lanche' + '\n'
        };
        if (produto.Carne == '') {
            msg += 'Informe a Bebida' + '\n'
        };
        if (produto.salada == '') {
            msg += 'Informe o tipo de Pagamento' + '\n'
        };



        if (msg != '') {
            alert(msg)
            return false
        };
         
        return true
    };

    //  03 Metodo Filho
    // Adicionamos os dados e eles serão inseridos dentro do ArrayVazio. 
    Adicionar_Dados_dentro_do_Array(produto){
        this.ArrayVazio.push(produto);   // Adiconamos através do push novos dados dentro de um Array através do ---> push()
        this.id++                       // Incrementamos um valor mais no ID
    };

    edicao(dados){
        this.Editar_Dados_input_pelo_id = dados.id

        document.getElementById('nome').value = dados.nome; // nome
        document.getElementById('Endereço').value = dados.endereco; // endereco
        document.getElementById('selecao-de-pao').value = dados.tipo_de_pao // tio de pão
        document.getElementById('menu-de-carnes').value = dados.Carne// Carne
        document.getElementById('menu-de-saladas').value = dados.salada // salada

        document.getElementById('transformar-botão-para-atualizar').innerText = 'Atualizar';
    };

    atualizar(id, produtos){ // Estamos recebendo dois parametros (id - produtos) 
        for (let i = 0; i < this.ArrayVazio.length ; i++) { // Estamos percorrendo o array de produtos
            if (this.ArrayVazio[i].id == id) { // Se o array percorrido for igual ao id selecionado faça o que se pede a baixo
                this.ArrayVazio[i].nome = produtos.nome; // Estamos acessando o Array pelo id e trocando seu valor pela alimentação atual do metodo Ler_Dados_Preenchidos_Pelo_Input()
                this.ArrayVazio[i].endereco = produtos.endereco; // Estamos acessando o Array pelo id e trocando seu valor pela alimentação atual do metodo Ler_Dados_Preenchidos_Pelo_Input()   
                this.ArrayVazio[i].tipo_de_pao = produtos.tipo_de_pao;
                this.ArrayVazio[i].Carne = produtos.Carne;
                this.ArrayVazio[i].salada = produtos.salada
                
                document.getElementById('transformar-botão-para-atualizar').innerText = 'Salvar';


            };
        };
    };

    //  04 Metodo Filho

    Gerar_Informacao_na_Tela(){

        let tbody = document.getElementById('tbody'); // id do tbody
        tbody.innerText = ''; // evita a duplicação de informações dentro da tabela.

        for(let i = 0; i < this.ArrayVazio.length; i++){
            let tr = tbody.insertRow(); // insere uma nova linha

            let td_id = tr.insertCell();  // insere uma nova colunha
            let td_nome = tr.insertCell(); // insere uma nova coluna
            let td_endereco = tr.insertCell(); // insere uma nova coluna
            let tipo_de_pao  = tr.insertCell();// insere uma nova coluna
            let Carne = tr.insertCell();// insere uma nova coluna
            let salada = tr.insertCell();// insere uma nova coluna
            let td_acoes = tr.insertCell();// insere uma nova coluna

            
            // escreve a informação do input na tela
            td_id.innerText = this.ArrayVazio[i].id;  //--> (ID)
            td_nome.innerText = this.ArrayVazio[i].nome; //--> (Nome do Produto)
            tipo_de_pao.innerText = this.ArrayVazio[i].tipo_de_pao;
            Carne.innerText = this.ArrayVazio[i].Carne;
            salada.innerText = this.ArrayVazio[i].salada;
            td_endereco.innerText = this.ArrayVazio[i].endereco; //--> (Valor)      
            //Até aqui as informações foram geradas


            // adiciona dinamicamente uma classe no (td do ID)
            td_id.classList.add('center'); 
            td_nome.classList.add('center');
            td_endereco.classList.add('center');
            tipo_de_pao.classList.add('center');
            Carne.classList.add('center');
            salada.classList.add('center')
            td_acoes.classList.add('center');



            // criação da imagem de edição

            let imgEdicao = document.createElement('img'); // cria uma imagem 
            imgEdicao.src = 'img/editar.png'; // busca o caminho da imagem
            td_acoes.appendChild(imgEdicao); // Adiciona a imagem editar dentro do td_acoes

            imgEdicao.setAttribute('onclick' , "produto.edicao("+ JSON.stringify(this.ArrayVazio[i]) +")"); //através do setAttribute chamamos um evento de onclick o metodo chamado foi o de editar a linha selecionada através do seu ID


            // criação da imagem de excluir

            let imgExcluir = document.createElement('img'); // cria uma imagem
            imgExcluir.src = 'img/excluir.png'; // busca o caminho da imagem
            td_acoes.appendChild(imgExcluir); // Adiciona a imagem excluir dentro do td_acoes

            imgExcluir.setAttribute('onclick', "produto.exclusao_de_intens_da_tabela(" + this.ArrayVazio[i].id + ")"); //através do setAttribute chamamos um evento de onclick o metodo chamado foi o de excluir a linha selecionada através do seu ID
      
            // this.limpeza_do_input()
        };

    };

    // 05 Metodo 
    // Este metodo será chamado através do seAttribute dentro do metodo  Gerar_Informacao_na_Tela()
    exclusao_de_intens_da_tabela(id){

        if(confirm('Deseja realmente deletar o produto do ID: ' + id )){ // solicita a confrimação do usuario para deletar o id selecionado
            let tbody = document.getElementById('tbody'); // id do tbody

       
            for (let i = 0; i < this.ArrayVazio.length; i++) {
                    if(this.ArrayVazio[i].id == id){ // Percorre o array e se ele for igual ao indice ele executa o codigo abaixo
                        this.ArrayVazio.splice(i,1); // Remoção do indice dentro do array[i] e a quantidade de itens a exlcuir (1)
                        tbody.deleteRow(i); // deleta a linha escolhida dentro do array através do indice[i]
                    };       
            };
        }
       
    };
    
    //  0 Metodo Filho
    limpeza_do_input(){
        document.getElementById('nome').value = '';              // Deletamos o nome do cliente.
        document.getElementById('Endereço').value = '';    // Deletamos o endereço do cliente.
        document.getElementById('selecao-de-pao').value = '';                   // tipo de pão
        document.getElementById('menu-de-carnes').value = '';                  // Carne
        document.getElementById('menu-de-saladas').value = '';                 // salada
   
        document.getElementById('transformar-botão-para-atualizar').innerText = 'Salvar';
        this.Editar_Dados_input_pelo_id = null;

    };
};

const produto = new Produtos;




