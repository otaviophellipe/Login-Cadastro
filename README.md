<p align="left">
  <a href="https://img.shields.io/badge/Status-%20Concluido-green">
    <img src="https://img.shields.io/badge/Status-%20Concluido-green" alt="Status: Concluído" />
<img src="https://img.shields.io/badge/License-%20MIT-blue" alt="MIT" />
  </a>
</p>
<div style="display: flex; justify-content: space-around; align-items: center;">
  <div style="text-align: center;">
    <h4>Tela de Login</h4>
    <img src="https://github.com/user-attachments/assets/a723de00-d042-4b9b-82ab-917f4df85ec2" alt="Login" style="width: 50%;"/>
  </div>
  <div style="text-align: center;">
    <h4>Tela de Cadastro</h4>
    <img src="https://github.com/user-attachments/assets/a88a4a72-d6d8-4cce-8170-195828d02f32" alt="Cadastro" style="width: 50%;"/>
  </div>
</div>

# Sistema de Login

Um site moderno de login e cadastro com tema escuro, apresentando validação do lado do cliente e processamento do lado do servidor.

## Linguagens Utilizadas

- **HTML**: Estrutura das páginas web (index.html, cadastro.html)
- **SASS**: Pré-processador de estilos para CSS (login.scss, cadastro.scss)
- **TypeScript**: Script do lado do cliente com segurança de tipos (script.ts)
- **PHP**: Manipulação de formulários do lado do servidor (login.php, register.php)
- **JSON**: Dados de configuração (config.json)

## Funcionalidades

- Design responsivo com tema escuro
- Validação de formulários do lado do cliente usando TypeScript
- Processamento de login e cadastro do lado do servidor com PHP
- Dados do usuário armazenados em arquivo JSON (para fins de demonstração)
- SASS para CSS mantível

## Configuração e Instalação

### Pré-requisitos

- Node.js e npm (para compilação de SASS e TypeScript)
- PHP (para processamento do lado do servidor, ex.: via XAMPP ou servidor integrado)

### Passos de Instalação

1. **Instalar dependências:**
   ```bash
   npm install -g sass typescript
   ```

2. **Compilar SASS para CSS:**
   ```bash
   sass login.scss login.css
   sass cadastro.scss cadastro.css
   ```

3. **Compilar TypeScript para JavaScript:**
   ```bash
   tsc script.ts --outFile script.js --target ES2015
   ```

4. **Executar o servidor PHP:**
   - Se usando servidor PHP integrado:
     ```bash
     php -S localhost:8000
     ```
   - Então abra `http://localhost:8000/index.html` no seu navegador.
   - Ou use XAMPP e coloque o projeto em htdocs.

## Estrutura do Projeto

- `index.html`: Página de login
- `cadastro.html`: Página de cadastro
- `login.scss` / `login.css`: Estilos para página de login
- `cadastro.scss` / `cadastro.css`: Estilos para página de cadastro
- `script.ts` / `script.js`: Validação do lado do cliente
- `config.json`: Configuração do site
- `login.php`: Processamento de login
- `register.php`: Processamento de cadastro
- `users.json`: Armazenamento de dados do usuário (criado dinamicamente)
- `images/`: Ativos de imagem
- `TODO.md`: Notas de desenvolvimento

## Uso

- Navegue até a página de login e insira credenciais (demo: admin/password123 ou user/pass456).
- Clique em "Cadastre-se aqui!" para ir ao cadastro.
- Os formulários validam entradas do lado do cliente e processam do lado do servidor.

## Créditos

Código por: [Otavio Phellipe](https://www.linkedin.com/in/otaviophellipe/) | [GitHub](https://github.com/otaviophellipe)
