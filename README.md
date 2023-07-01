# Leadster 

Projeto feito para concorrer a uma vaga na Leadster no cargo de front-end.

### 💻 Deploy

* [Leadster por Luiz Carlos Bonini](https://leadster-frontend-luiztest.vercel.app) - Deploy na Versel

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 🔧 Instalação

Para iniciar e ter um ambiente de desenvolvimento em execução, siga os passos nesta exata sequencia:

Primeiro clone o repositório para a sua máquina:

```
git clone https://github.com/LuizCBonini/Leadster-Frontend.git
```

Em seguida, dentro do projeto agora clonado para a sua máquina, instale as dependências:

```
yarn
```
ou:
```
npm install
```

Agora é importante que primeiro startemos a api:

```
yarn start:api
```
ou:
```
npm run start:api
```

Então, com a api rodando, podemos rodar o front em um terminal separado:
```
yarn dev
```
ou: 
```
npm run dev
```

E está pronto para começar o desenvolvimento de novas features.

## ✅ Decisões

Fiz este projeto pensando na sua escalabilidade e na sua manutenibilidade, por isso algumas das decisões tomadas para este projeto foram:

- Utilizei do eslint e do prettier para que qualquer futuro dev, que pegasse o código para refatorar ou implementar novas features fosse corretamente guidado a seguir o mesmo padrão do código font.

- TypeScript foi a escolha para que a detecção de erros seja feita em tempo de produção, o que ajuda a encontrar bugs mais cedo no processo de desenvolvimento. Além de ajudar na refatoração, manutenção e documentação do projeto.
  
- Clean Code e Componentização foram as metodologias utilizados para a organização do código, cada componente é responsável por uma tarefa específica e encapsula sua própria lógica, estado e apresentação. Isso torna o código mais legível, fácil de entender e manter.
  
- Também tomei a liberdade de me inspirar na frase "menos conversinha, mais conversão" e implementar algo que acredito ser importante para a Leadster que foi a internacionalização (i18n), pois com um site/sistema que se adapte à diferentes idiomas e culturas, é possível alcançar um público mais amplo e explorar novos mercados. Isso pode aumentar o alcance e potencial de crescimento, permitindo que atenda a usuários de diferentes países e regiões.

  (Branchs não foram excluidas para que possa ser avaliado a linha de pensamento e de criação do projeto)

## 🛠️ Construído com

* [TypeScript](https://www.typescriptlang.org) - Linguagem de programação
* [Next](https://nextjs.org) - O framework web usado
* [Yarn](https://yarnpkg.com) - Gerente de Dependência
* [Axios](https://axios-http.com/ptbr/docs/intro) - Lib para requisições HTTP
* [i18next](https://www.i18next.com) - Framework de internacionalização
* [Styled-Components](https://styled-components.com) - CSS-in-JS
* [Json-Server](https://www.npmjs.com/package/json-server) - Simulação de uma api

## ✒️ Autores

* **Luiz Carlos Bonini** - *Criação do projeto* - [LuizCBonini](https://github.com/LuizCBonini)

## 🎁 Gratidão

Desenvolver este projeto não só foi um excelente teste sobre meus conhecimentos atuais em progrmação como também foi uma bussula inpiradora que me apontou o norte para onse seguir estudando e ter uma visão melhor de meu futuro como dev. 

---
⌨️ com ❤️ por [Luiz Carlos Bonini](https://www.linkedin.com/in/dev-luiz-carlos/)😊
