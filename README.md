# Documentação do Site MR Store


Desenvolvedores: Marcell Landry Negrão Gomes e Roberth da Silva Souza
                 

## Estrutura do Projeto

O projeto MR Store é uma loja online que utiliza tecnologias web modernas, incluindo HTML, CSS, JavaScript e o framework Vue.js para a interatividade da interface do usuário.


### Estrutura do HTML


O arquivo HTML (`index.html`) contém a estrutura básica do site e inclui os seguintes elementos:

- **Metadados:** Definidos na seção `<head>`, incluindo a codificação, viewport e links para folhas de estilo e scripts.
  
- **Barra de Navegação:** Implementada usando o componente Bootstrap Navbar, que fornece links para as páginas principais e uma barra de pesquisa.

- **Carrossel:** Apresenta uma seleção de imagens destacadas, usando o componente Bootstrap Carousel.

- **Região de Conteúdo:** Inclui uma seção para listar produtos e um carrinho de compras usando o Vue.js.

- **Rodapé:** Contém informações sobre a loja, como nome, slogan e links para política de privacidade e contato.


### Estilo e Layout


O site utiliza folhas de estilo internas (dentro da tag `<style>` no HTML) para personalizar a aparência. As classes Bootstrap são amplamente empregadas, e estilos adicionais são aplicados para melhorar a experiência do usuário.


## Vue.js e Interação com o Supabase


O site faz uso do framework Vue.js para a manipulação da interface do usuário e interação dinâmica com o Supabase, um banco de dados como serviço.

- **Listagem de Produtos:** Os produtos são carregados do banco de dados Supabase através da API REST. Eles são exibidos na seção "Produtos" usando o Vue.js.

- **Carrinho de Compras:** O carrinho de compras é gerenciado dinamicamente pelo Vue.js. Os usuários podem adicionar produtos ao carrinho, removê-los e finalizar a compra. Os detalhes da compra são enviados de volta ao Supabase.


## Requisitos e Dependências


O site utiliza as seguintes bibliotecas e frameworks:

- Bootstrap (v4.5.2 e v5.0.0-beta1): Para estilos e componentes responsivos.
- Vue.js (v2.6.14): Para a manipulação da interface do usuário e interação com o Supabase.

