<div align="center">
  <img src="github/logo.png" margin="20" width="200" height="auto" alt="Welcome" />
</div>

<h3>🏆 Projeto: </h3>
<p>Api em Node Js de uma aplicação de postagens, a fim de fixar e melhorar as técnicas de upload de imagens usando o Multer,assim como os conceitos e uso do TypeScript.</p>

<h3>🔨 Tecnologias Usadas: </h3>
<ul>
  <li>Node Js</li>
  <li>TypeScript</li>
  <li>Multer</li>
  <li>Express</li>
</ul>

<h3>🌟 Funcionalidades: </h3>
<ul>
  <li>Criação de usuários</li>
  <li>Criação de postagens</li>
  <li>Login de usuários</li>
  <li>Listagem de postagens</li>
  <li>Listagem de usuários registrados e o total de postagens</li>
  <li>Upload de foto de perfil do usuário</li>
  <li>Upload de imagem que será usada no post</li>
</ul>

<h3>💻 Iniciando ambiente de desenvolvimento: </h3>

1. Execute `npm install` ou `yarn install`.<br />
2. Execute `npm run knex:migrate`ou `yarn knex:migrate` para rodar as migrations do banco de dados.<br />
3. Crie na raiz do projeto uma pasta chamada upload.<br />
4. Crie uma pasta chamada `posts` dentro da pasta upload.<br />
5. Crie uma pasta chamada `profiles` dentro da pasta upload.<br />
6. Baixe uma imagem svg e a renomeie para "default_profile",após isso,salve-a na pasta profiles,a qual foi criada no passo anterior.<br />
7. Rode o comando `npm run dev` ou `yarn dev` para rodar o servidor node na porta 3333.<br />