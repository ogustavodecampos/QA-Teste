# Teste Técnico
# Vaga QA - Estagio
# Ao fim do Readme, se encontra a descrição para melhor entendimento do repositório

### 1. DESCRIÇÃO
O projeto consiste em um CRUD de usuários para um grupo que contém diversas empresas.

Seu desafio será testar o projeto por completo, documentando o máximo de cenários possíveis que encontrar. Caso você tenha experiência, será avaliada também sua capacidade de desenvolver testes automatizados.

O formulário de cadastro deve conter os campos de **Nome, E-mail, Telefone, Data e Empresa** como preenchimento obrigatório para realização do cadastro.

Abaixo você encontrará instruções que deve seguir:

### Instruções para Estagiários
Para estagiários, não é necessário criar automações de testes. No entanto, conhecimento em automação será considerado um diferencial.

#### Casos de Teste
- Os casos devem ser documentados utilizando o formato Gherkin para a descrição dos cenários.

### Instruções para Nível Júnior ou Superior
#### Casos de Teste
- Os casos devem ser documentados utilizando o formato Gherkin para a descrição dos cenários.
- Importante: O uso de Gherkin é apenas para organização e clareza dos testes e não deve ser implementado utilizando ferramentas como Cucumber.

#### Testes Automatizados
- E2E e API: Utilize o framework Cypress para criação dos testes.
- Importante: Não utilizamos padrões como Page Objects.

### 3. Entendimento do repositório
- Na pasta cypress do projeto, há dois arquivos em PDF:
    Documentação-Casos-de-Teste.pdf – Contém os casos de teste manuais descritos no padrão Gherkin.
    Resultados-Casos-de-Teste.pdf – Apresenta os resultados exibidos na plataforma do Cypress, incluindo testes manuais e testes de API.

- Além disso, dentro da pasta e2e, há dois arquivos principais:
    api.cy.js – Contém os testes automatizados para verificação do funcionamento das rotas da API.
    testesGherkin.cy.js – Contém os testes automatizados baseados nos casos de teste manuais descritos em Gherkin.
- Por fim, o arquivo cypress.config.js define a configuração necessária para acessar a API.
