describe("Automatização dos testes descritos - primeira parte do desafio", () => {
    const baseUrl = 'http://localhost:5400';

    it('Cadastro bem-sucedido de um usuário', () => {
        cy.visit(baseUrl);
        cy.get('button').contains('Novo Usuário').click();
        
        cy.get('input[placeholder="Nome"]').type('Felipe');
        cy.get('input[placeholder="Email"]').type('Felipe@gmail.com');
        cy.get('input[placeholder="Telefone"]').type('51999992672');
        cy.get('input[placeholder="Cidade de nascimento"]').type('Porto Alegre');
        cy.get('input[placeholder="Data de nascimento"]').type('1990-01-01');
        cy.get('#search_input').click();
        cy.get('.optionListContainer').should('be.visible');
        // Selecionar empresas: coloquei as três para que fosse possível o teste ser concluído com sucesso, entretanto, percebi que se eu seleciona-se apenas 1, dava um problema de não conseguir chegar ao botão de salvar.
        cy.get('.optionContainer li').contains('Empresa 1').click();
        cy.get('.optionContainer li').contains('Empresa 2').click();
        cy.get('.optionContainer li').contains('Empresa 3').click();
        cy.get('button[type="submit"]').click();
        cy.get('div').contains('Felipe').should('exist');
    });

    it('Tentativa de cadastro sem preencher o campo “Nome”', () => {
        cy.visit(baseUrl);
        cy.get('button').contains('Novo Usuário').click();

        cy.get('input[placeholder="Nome"]').type('');
        cy.get('input[placeholder="Email"]').type('Felipe@gmail.com');
        cy.get('input[placeholder="Telefone"]').type('51999992672');
        cy.get('input[placeholder="Cidade de nascimento"]').type('Porto Alegre');
        cy.get('input[placeholder="Data de nascimento"]').type('1990-01-01');
        cy.get('#search_input').click();
        cy.get('.optionListContainer').should('be.visible');
        cy.get('.optionContainer li').contains('Empresa 1').click();
        cy.get('.optionContainer li').contains('Empresa 2').click();
        cy.get('.optionContainer li').contains('Empresa 3').click();
        cy.get('button[type="submit"]').click();
        cy.get('div').contains('Felipe').should('exist');
    });

    it('Cadastro com campo “Nome” inválido (BUG)', () => {
        cy.visit(baseUrl);
        cy.get('button').contains('Novo Usuário').click();
        
        cy.get('input[placeholder="Nome"]').type('#');
        cy.get('input[placeholder="Email"]').type('Felipe@gmail.com');
        cy.get('input[placeholder="Telefone"]').type('51999992672');
        cy.get('input[placeholder="Cidade de nascimento"]').type('Porto Alegre');
        cy.get('input[placeholder="Data de nascimento"]').type('1990-01-01');
        cy.get('#search_input').click();
        cy.get('.optionListContainer').should('be.visible');
        cy.get('.optionContainer li').contains('Empresa 1').click();
        cy.get('.optionContainer li').contains('Empresa 2').click();
        cy.get('.optionContainer li').contains('Empresa 3').click();
        cy.get('button[type="submit"]').click();
        cy.get('div').contains('#').should('exist');
    });

    it('Tentativa de cadastro sem preencher o campo “Email”', () => {
        cy.visit(baseUrl);
        cy.get('button').contains('Novo Usuário').click();
        
        cy.get('input[placeholder="Nome"]').type('Felipe');
        cy.get('input[placeholder="Email"]').type('');
        cy.get('input[placeholder="Telefone"]').type('51999992672');
        cy.get('input[placeholder="Cidade de nascimento"]').type('Porto Alegre');
        cy.get('input[placeholder="Data de nascimento"]').type('1990-01-01');
        cy.get('#search_input').click();
        cy.get('.optionListContainer').should('be.visible');
        cy.get('.optionContainer li').contains('Empresa 1').click();
        cy.get('.optionContainer li').contains('Empresa 2').click();
        cy.get('.optionContainer li').contains('Empresa 3').click();
        cy.get('button[type="submit"]').click();
        cy.get('div').contains('Felipe').should('exist');
    });

    it('Cadastro com campo “Email” inválido (BUG)', () => {
        cy.visit(baseUrl);
        cy.get('button').contains('Novo Usuário').click();
        
        cy.get('input[placeholder="Nome"]').type('Felipe');
        cy.get('input[placeholder="Email"]').type('teste');
        cy.get('input[placeholder="Telefone"]').type('51999992672');
        cy.get('input[placeholder="Cidade de nascimento"]').type('Porto Alegre');
        cy.get('input[placeholder="Data de nascimento"]').type('1990-01-01');
        cy.get('#search_input').click();
        cy.get('.optionListContainer').should('be.visible');
        cy.get('.optionContainer li').contains('Empresa 1').click();
        cy.get('.optionContainer li').contains('Empresa 2').click();
        cy.get('.optionContainer li').contains('Empresa 3').click();
        cy.get('button[type="submit"]').click();
        cy.get('div').contains('Felipe').should('exist');
    });

    it('Cadastro com campos "Telefone" vazio (BUG)', () => {
        cy.visit(baseUrl);
        cy.get('button').contains('Novo Usuário').click();
        
        cy.get('input[placeholder="Nome"]').type('Felipe');
        cy.get('input[placeholder="Email"]').type('Felipe@gmail.com');
        cy.get('input[placeholder="Telefone"]').type('');
        cy.get('input[placeholder="Cidade de nascimento"]').type('Porto Alegre');
        cy.get('input[placeholder="Data de nascimento"]').type('1990-01-01');
        cy.get('#search_input').click();
        cy.get('.optionListContainer').should('be.visible');
        cy.get('.optionContainer li').contains('Empresa 1').click();
        cy.get('.optionContainer li').contains('Empresa 2').click();
        cy.get('.optionContainer li').contains('Empresa 3').click();
        cy.get('button[type="submit"]').click();
        cy.get('div').contains('Felipe').should('exist');
    });

    it('Cadastro com campo “Telefone” inválido (BUG)', () => {
        cy.visit(baseUrl);
        cy.get('button').contains('Novo Usuário').click();
        
        cy.get('input[placeholder="Nome"]').type('Felipe');
        cy.get('input[placeholder="Email"]').type('Felipe@gmail.com');
        cy.get('input[placeholder="Telefone"]').type('12345678910');
        cy.get('input[placeholder="Cidade de nascimento"]').type('Porto Alegre');
        cy.get('input[placeholder="Data de nascimento"]').type('1990-01-01');
        cy.get('#search_input').click();
        cy.get('.optionListContainer').should('be.visible');
        cy.get('.optionContainer li').contains('Empresa 1').click();
        cy.get('.optionContainer li').contains('Empresa 2').click();
        cy.get('.optionContainer li').contains('Empresa 3').click();
        cy.get('button[type="submit"]').click();
        cy.get('div').contains('Felipe').should('exist');
    });

    it('Cadastro sem preencher o campo “Data”', () => {
        cy.visit(baseUrl);
        cy.get('button').contains('Novo Usuário').click();
        
        cy.get('input[placeholder="Nome"]').type('Felipe');
        cy.get('input[placeholder="Email"]').type('Felipe@gmail.com');
        cy.get('input[placeholder="Telefone"]').type('51999992672');
        cy.get('input[placeholder="Cidade de nascimento"]').type('Porto Alegre');
        cy.get('input[placeholder="Data de nascimento"]').type('');
        cy.get('#search_input').click();
        cy.get('.optionListContainer').should('be.visible');
        cy.get('.optionContainer li').contains('Empresa 1').click();
        cy.get('.optionContainer li').contains('Empresa 2').click();
        cy.get('.optionContainer li').contains('Empresa 3').click();
        cy.get('button[type="submit"]').click();
        cy.get('div').contains('Felipe').should('exist');
    });

    it('Cadastro com campo “Data” inválida', () => {
        cy.visit(baseUrl);
        cy.get('button').contains('Novo Usuário').click();
        
        cy.get('input[placeholder="Nome"]').type('Felipe');
        cy.get('input[placeholder="Email"]').type('Felipe@gmail.com');
        cy.get('input[placeholder="Telefone"]').type('51999992672');
        cy.get('input[placeholder="Cidade de nascimento"]').type('Porto Alegre');
        cy.get('input[placeholder="Data de nascimento"]').type('1990-01');
        cy.get('#search_input').click();
        cy.get('.optionListContainer').should('be.visible');
        cy.get('.optionContainer li').contains('Empresa 1').click();
        cy.get('.optionContainer li').contains('Empresa 2').click();
        cy.get('.optionContainer li').contains('Empresa 3').click();
        cy.get('button[type="submit"]').click();
        cy.get('div').contains('Felipe').should('exist');
    });

    it('Cadastro com campo “Data” inválido (BUG)', () => {
        cy.visit(baseUrl);
        cy.get('button').contains('Novo Usuário').click();
        
        cy.get('input[placeholder="Nome"]').type('Felipe');
        cy.get('input[placeholder="Email"]').type('Felipe@gmail.com');
        cy.get('input[placeholder="Telefone"]').type('51999992672');
        cy.get('input[placeholder="Cidade de nascimento"]').type('Porto Alegre');
        cy.get('input[placeholder="Data de nascimento"]').type('01/01/0888');
        cy.get('#search_input').click();
        cy.get('.optionListContainer').should('be.visible');
        cy.get('.optionContainer li').contains('Empresa 1').click();
        cy.get('.optionContainer li').contains('Empresa 2').click();
        cy.get('.optionContainer li').contains('Empresa 3').click();
        cy.get('button[type="submit"]').click();
        cy.get('div').contains('Felipe').should('exist');
    });

    it('Cadastro com campo “Data” inválido (BUG – Tratamento de erros/exceção)', () => {
        cy.visit(baseUrl);
        cy.get('button').contains('Novo Usuário').click();
        
        cy.get('input[placeholder="Nome"]').type('Felipe');
        cy.get('input[placeholder="Email"]').type('Felipe@gmail.com');
        cy.get('input[placeholder="Telefone"]').type('51999992672');
        cy.get('input[placeholder="Cidade de nascimento"]').type('Porto Alegre');
        cy.get('input[placeholder="Data de nascimento"]').type('01/01/0001');
        cy.get('#search_input').click();
        cy.get('.optionListContainer').should('be.visible');
        cy.get('.optionContainer li').contains('Empresa 1').click();
        cy.get('.optionContainer li').contains('Empresa 2').click();
        cy.get('.optionContainer li').contains('Empresa 3').click();
        cy.get('button[type="submit"]').click();
        cy.get('div').contains('Felipe').should('exist');
    });

});