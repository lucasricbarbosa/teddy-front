<h1 align="center">
  <img alt="project logo" src="https://teddydigital.io/wp-content/uploads/2023/02/Ativo-13-8.png" width="224px"/><br/>
  Teste Teddy Fullstack 
</h1>
<p align="center">
    Um projeto desenvolvido como parte do teste técnico para Desenvolvedor Full Stack Jr na Teddy Open Finance. Este é o frontend do sistema de gestão de clientes, construído com <b>React</b> e <b>Vite</b>. O projeto inclui <b>autenticação</b>, <b>modo claro e escuro</b>, <b>responsividade</b> e boas práticas.
    <br/>
    <br/>
    Feito focando em um código <b>moderno</b>, <b>eficiente</b> e <b>estruturado</b>, com foco em usabilidade, qualidade e facilidade de manutenção.
</p>

<hr>

<div align="center">

**[SOBRE O PROJETO](#-sobre-o-projeto) •
[TECH STACK & LIBS](#-tech-stack--libs) •
[COMO INSTALAR](#-como-instalar) •
[UTILIZANDO O SISTEMA](#-utilizando-o-sistema) •
[TESTES](#-testes) •
[OUTROS DETALHES TÉCNICOS](#-alguns-outros-detalhes-técnicos) •
[CONSIDERAÇÕES FINAIS](#-considerações-finais) •
[AGRADECIMENTOS](#-agradecimentos)**

</div>
<br />

# 🚀 Sobre o Projeto

# Frontend Dashboard - Teddy Open Finance

## 🚀 Sobre o Projeto

O frontend deste sistema é um **dashboard para gestão de clientes**, desenvolvido como parte de um teste técnico para a posição de Desenvolvedor Full Stack Jr. Ele oferece funcionalidades como:

- CRUD de clientes (criar, listar, editar e excluir);
- Salvar usuário no sistema;
- Middlewares para controle de navegação e rotas protegidas;
- Temas personalizáveis (dark e light);
- Interface totalmente responsiva, adaptada para diferentes dispositivos;
- Página inicial (home).

Este projeto vai além dos requisitos solicitados, incorporando várias melhorias e funcionalidades extras para entregar uma solução robusta e alinhada com padrões de qualidade.

A organização do código segue o princípio de pastas limpas, com pastas e módulos estruturados para clareza e facilidade de manutenção. Utilizei práticas como:

- Componentização;
- Componentes reutilizáveis seguindo o Composition Pattern;
- Gerenciamento de estado com Context API;
- Boas práticas de linting e formatação com ESLint;
- Princípios de Clean Code.

<br />

# 💻 Tech Stack & Libs

As tecnologias e bibliotecas utilizadas neste projeto incluem:

- **[React](https://reactjs.org/)** - Biblioteca JavaScript para construção de interfaces de usuário.
- **[Vite](https://vitejs.dev/)** - Ferramenta moderna de build para desenvolvimento frontend.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitário para interfaces modernas e responsivas.
- **[ESLint](https://eslint.org/)** - Ferramenta para análise estática e correção de código.
- **[Prettier](https://prettier.io/)** - Ferramenta de formatação de código.
- **[Tanstack Query](https://tanstack.com/query/latest)** - biblioteca para gerenciamento de estado assíncrono.
- **[Vitest](https://vitest.dev/)** - Framework de testes unitários rápido para Vite.
- **[Playwright](https://playwright.dev/)** - Framework para testes end-to-end multiplataforma.

<br />

# ⚙️ Como Instalar

## Configuração do Ambiente

1. No diretório frontend, copie o arquivo de exemplo:

```bash
cp .env.example .env
```

2. Insira a URL do backend na variável VITE_API_HOST, que corresponde ao endereço do servidor backend. Por exemplo:

```bash
VITE_API_HOST=http://localhost:3000
```

3. Insira a URL do frontend na variável VITE_FRONT_HOST, que corresponde ao endereço do frontend. Por exemplo:

```bash
VITE_FRONT_HOST=http://localhost:5173
```

## Rodando o projeto

Instale o Node.js LTS na sua máquina e siga os passos abaixo:

1. Instale as dependências do projeto:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento (ou rode o script ./entrypoint.sh que decide qual melhor comando de acordo com
   o seu ambiente:

```bash
npm run dev
```

<br/>

# 🖥️ Utilizando o sistema

Depois de instalar e iniciar o projeto, você pode acessar o dashboard através do navegador no endereço http://localhost:5173.

Funcionalidades disponíveis:

- Login de Usuário: Sistema protegido que requer autenticação para acesso ao dashboard, onde o usuário deve inserir o nome.
- Gerenciamento de Clientes: Adicione, modifique, remova e consulte informações dos clientes cadastrados.
- Seleção múltipla de clientes com controle de estado eficiente
- Aparência Personalizada: Troque facilmente entre tema claro e escuro conforme sua preferência.
- Design Adaptativo: Interface otimizada para computadores, tablets e smartphones.
- Tela de início para conhecer melhor a Teddy Open Finance

<br/>

# 🧪 Testes

Este projeto conta com uma suíte completa de testes que garante a qualidade e confiabilidade do código:

## Testes Unitários

Os testes unitários foram implementados utilizando Vitest, garantindo a validação dos componentes individuais e funções do sistema.

Para executar os testes unitários:

```bash
npx vitest
```

## Testes End-to-End (E2E)

Os testes end-to-end foram implementados com Playwright, validando o funcionamento completo da aplicação em cenários reais de uso.

Para executar os testes end-to-end:

```bash
npx playwright test
```

A implementação de testes foi um requisito fundamental do processo seletivo, demonstrando a preocupação com a qualidade do código e a estabilidade da aplicação.

<br/>

# 📚 Alguns Outros Detalhes Técnicos

- **Design Responsivo**:
   - A interface foi desenvolvida utilizando componentes personalizados para garantir adaptabilidade em qualquer dispositivo, proporcionando uma experiência consistente tanto em computadores quanto em smartphones.

- **Estruturação do Código**:
   - O projeto adota a **Screaming Architecture**, tornando clara a divisão de domínios e as responsabilidades de cada módulo.
   - Implementação rigorosa de **ESLint** para manter a qualidade e uniformidade do código.

- **Otimização**:
   - A combinação **React e Vite** proporciona um ambiente de desenvolvimento ágil e gera builds altamente eficientes para produção.

- **Gerenciamento de Estado**:
   - O uso do **Context API** permite um controle de estado eficiente e centralizado.

- **Página Inicial Personalizada**:
   - Desenvolvimento de uma página home do zero, com layout moderno e informativo para melhor experiência do usuário.

- **Tanstack Query (React Query)**:
   - Implementação para gerenciamento otimizado de estado do servidor
   - Cache inteligente que reduz requisições desnecessárias
   - Sincronização automática de dados
   - Tratamento simplificado de erros e estados de carregamento

<br />

# 🎯 Considerações Finais

Este dashboard foi criado com dedicação e foco na qualidade para oferecer uma solução robusta e expansível. Além de cumprir todos os requisitos do teste, incorporei recursos adicionais que elevam tanto a experiência do usuário quanto a manutenibilidade do código.

Estou à disposição para esclarecer quaisquer dúvidas ou receber feedback sobre o projeto. Espero que esta solução demonstre minhas habilidades e comprometimento com o desenvolvimento de qualidade! 💻✨