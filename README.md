### 1) Quais cenários de teste você especificaria para validar a funcionalidade do aplicativo bancário desenhado abaixo? Liste todas as premissas adotadas.
Pasta de arquivo com resposta: answers/first_question/transfer.feature

<br>

### 2) Considere o esquema Entidade / Relacionamento abaixo:
Pasta de arquivo com resposta: answers/second_question/sql.docx

<br>


### 3) Para validarmos a sua técnica de automação de testes, vamos utilizar uma api de desenvolvimento referente a plataforma Trello.
<br>

Fazer download das bibliotecas:
```bash
npm install
```

Rodar os cenários de serviços via headless:
```bash
npx cypress run
```

Para abrir Dashboard do Cypress:

```bash
npx cypress open
```
<br>

### Observações sobre o item 3
<br>
A) Foi mapeado o contrato de um requisição usando a lib Joi: cypress/e2e/services/contracts/boardSchema.ts

<br> 
B) Testes de contrato: cypress/e2e/services/tests/boards.spec.cy.ts

<br>
C) Existe a Integração com o banco postgres e queries nos commands: /home/douglas/Documents/prova_qa/cypress/support/commands/database-commands.js

<br> 
D) Page objects: cypress/e2e/ui/pages

<br>
E) Testes de api: cypress/e2e/services/tests/

<br>
F) Teste de interface gráfica: cypress/e2e/ui/tests/
