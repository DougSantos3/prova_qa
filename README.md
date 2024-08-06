### 1) Quais cenários de teste você especificaria para validar a funcionalidade do aplicativo bancário desenhado abaixo? Liste todas as premissas adotadas.
### Pasta de arquivo com resposta: answers/first_question/transfer.feature

<br>

### 2) Considere o esquema Entidade / Relacionamento abaixo:
### Pasta de arquivo com resposta: answers/second_question/sql.docx

<br>


### 3) Para validarmos a sua técnica de automação de testes, vamos utilizar uma api de desenvolvimento referente a plataforma Trello.

### Execução:
```bash
npm install
```

Rodar via headless
```bash
npx cypress run
```
ou
```bash
cypress run
```

Para rodar gráfico:

```bash
npx cypress open
```
ou
```bash
cypress open
```

### Observações sobre o item 3
### A) Foi mapeado o contrato de um requisição usando a lib Joi: cypress/e2e/services/contracts/boardSchema.ts
### B) Testes de contrato: cypress/e2e/services/tests/boards.spec.cy.ts
### C) Existe a Integração com o banco postgres e queries no commands: 
###     /home/douglas/Documents/prova_qa/cypress/support/commands/database-commands.js
### D) Page objects: cypress/e2e/ui/pages
### E) Testes de funcionalidades de api: cypress/e2e/services/tests
### F) Teste de interface gráfica: login.spec.cy
