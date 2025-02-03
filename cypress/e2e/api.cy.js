describe('API', () => {

  it('Retorna todos os usuários', () => {
    cy.request('/api/user').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('Retorna um usuário pelo ID', () => {
    cy.request('/api/user/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name');
      expect(response.body).to.have.property('email');
    });
  });

  it('Retorna um erro quando é solicitado um usuário inválido', () => {
    cy.request({ url: '/api/user/10000', failOnStatusCode: false }).then((response) => {
      expect(response.status).to.be.oneOf([400, 500]);
    });
  });

  it('Cria um novo usuário', () => {
    cy.request('POST', '/api/user/create', {
      name: 'Teste User',
      email: 'teste@exemplo.com',
      companies: ['Empresa Teste']
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', 'Teste User');
    });
  });

  it('Atualiza um usuário', () => {
    cy.request('PATCH', '/api/user/1/update', {
      name: 'Nome Atualizado',
      email: 'atualizado@exemplo.com',
      companies: ['Empresa Y']
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', 'Nome Atualizado');
    });
  });

  it('Deleta um usuário', () => {
    cy.request('DELETE', '/api/user/1/delete').then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Retorna todas as empresas', () => {
    cy.request('/api/company').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('Retorna empresa pelo ID', () => {
    cy.request('/api/company/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name');
      expect(response.body).to.have.property('cnpj');
    });
  });

  it('Retorna um erro quando pesquisa por uma empresa inválida', () => {
    cy.request({ url: '/api/company/10000', failOnStatusCode: false }).then((response) => {
      expect(response.status).to.be.oneOf([400, 500]);
    });
  });

  it('Cria uma nova empresa', () => {
    cy.request('POST', '/api/company/create', {
      name: 'Empresa Nova',
      cnpj: '12345678901234',
      adress: {
        cep: '12345-678',
        country: 'Brasil',
        city: 'Porto Alegre',
        street_location: 'Rua Angelo Barcelos',
        number: '100',
        district: 'Partenon'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', 'Empresa Nova');
    });
  });

  it('Atualiza dados da empresa', () => {
    cy.request('PATCH', '/api/company/1/update', {
      name: 'Empresa Atualizada',
      cnpj: '98765432109876',
      adress: {
        cep: '54321-876',
        country: 'Brasil',
        city: 'Porto Alegre',
        street: 'Rua Angelo Barcelos',
        number: '200',
        district: 'Partenon'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', 'Empresa Atualizada');
    });
  });

  it('Deleta uma empresa', () => {
    cy.request('DELETE', '/api/company/1/delete').then((response) => {
      expect(response.status).to.eq(200);
    });
  });

});
