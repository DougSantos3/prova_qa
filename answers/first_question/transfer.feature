Cenário: Tranferência feita 
Dado que o cliente preecheu os dados:
  | Cliente destino    | José Fonseca |
  | Valor              | 200,00       |
  | Data de efetivação | 29/07/2024   |
Quando clico no botão transferir
Então recebo uma mensagem:
"""
Tranferência feita, aguarde o tempo determinado para cair na conta destino
"""


Esquema do Cenário: Tranferência com cliente destino inválido
Dado que o cliente preecheu os dados:
  | Cliente destino    | <inválido>   |
  | Valor              | 200,00       |
  | Data de efetivação | 29/07/2024   |
Quando clico no botão transferir
Então recebo uma mensagem encima do componente Cliente destino:
"""
Campo nome não preenchido ou com campos inválidos
"""
Exemplos:
| inválido        |
|                 |
| 65465465        |
| joao1479        |
| $&%¨$ddh4645654 | 


Esquema do Cenário: Tranferência com valor inválido
Dado que o cliente preecheu os dados:
  | Cliente destino    | José Santos  |
  | Valor              | <inválido>   |
  | Data de efetivação | 29/07/2024   |
Quando clico no botão transferir
Então recebo uma mensagem encima do componente valor:
"""
Campo valor não preenchido ou com campos inválidos
"""
Exemplos:
| inválido        |
|                 |
| 0,00            |
| joao            |
| $&%¨$ddh4645654 | 


Esquema do Cenário: Tranferência com data de efetivação inválida
Dado que o cliente preecheu os dados:
  | Cliente destino    | José Santos  |
  | Valor              | 2000.00      |
  | Data de efetivação | <inválido>   |
Quando clico no botão transferir
Então recebo uma mensagem encima do componente data de efetivação:
"""
Campo data não preenchido ou com campos inválidos
"""
Exemplos:
| inválido                                |
|                                         |
| 31/02/2024                              |
| dia anterior                            |
| 31/13/2024                              | 
| ano anterior ou posterior               |
| caracteres letras podendo ser inseridos |


Cenário: Tranferência com cliente destino valor e data de efetivação inválido
Dado que o cliente preecheu os dados:
  | Cliente destino    | %$¨%%$¨%$    |
  | Valor              | 0000.00      |
  | Data de efetivação | 32/07/2030   |
Quando clico no botão transferir
Então recebo uma mensagem encima dos componentes:
"""
Campos não preenchidos ou com campos inválidos
"""


Cenário: Dados preenchidos porém clica no cancelar 
Dado que o cliente preecheu os dados:
  | Cliente destino    | José Fonseca |
  | Valor              | 200,00       |
  | Data de efetivação | 29/07/2024   |
Quando clico no botão cancelar
Então operação é cancelada
E os dados apagados


Cenário: Cair a internet
Dado que o cliente preecheu os dados:
  | Cliente destino    | José Fonseca |
  | Valor              | 200,00       |
  | Data de efetivação | 29/07/2024   |
Quando cai a internet 
E clico no botão tranferir
Então aparece uma mensagem "sem internet, tente novamente mais tarde"


Cenário: Desliga o computador ou celular
Dado que o cliente preecheu os dados:
  | Cliente destino    | José Fonseca |
  | Valor              | 200,00       |
  | Data de efetivação | 29/07/2024   |
Quando desliga o dispositivo por falta de bateria ou etc
Então quando ligo o dispositivo preciso fazer a operação do zero preeenchendo todos os dados


Cenário: Validar removendo o token de autenticação
Dado que tenho acesso as apis de tranferência
Quando valido removendo o token de autenticação
Então aplicação não deve mostrar a seção do cliente avisando que o cliente precisa se autenciar novamente


Cenário: Teste de carga
Dado que validamos uma quantidade de requisições grande por um bom tempo na aplicação
Quando valido a aplicação
Então ela continua no ar sem lentidão, quebra de layout ou qualquer outro problema


Cenário: Spike teste
Dado que o nosso app/site é apresentado no comercial da copa do mundo
Quando valido que muitas requisições foram feitas de uma vez
Então ela continua no ar sem lentidão, quebra de layout ou qualquer outro problema.
E após um breve tempo diminui consideravelmente as requisições devido ter voltado o tempo do jogo e aplicação continua com as caracteristicas acima


Cenário: Teste de Stress
Dado que validamos uma quantidade consideravel de tranferências muito acima da média sendo feitas simultaneamente
Quando valido a aplicação
Então observo a quantidade de requisições que a nossa aplicação suporta sem perder desempenho
E olho banco de dados, nodes(pods), front(app ou web) para ver a situação deles