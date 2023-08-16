const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const app = require('../../../src/app');
const connection = require('../../../src/db/connection');
const { mockedProductById } = require('../mocks/products.mock');

chai.use(chaiHttp);
const { expect } = chai;

describe('Integration Tests', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('should list a product by ID at GET /products/:id', async function () {
    sinon.stub(connection, 'execute').resolves([[mockedProductById]]);
    
    const response = await chai.request(app).get('/products/10');
    
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(mockedProductById);
  });

    it('should return an error if product is not found at GET /products/:id', async function () {
    sinon.stub(connection, 'execute').resolves([[undefined]]);
        
    const response = await chai.request(app).get('/products/10');
        
    expect(response.status).to.equal(404);
    expect(response.body).to.deep.equal({ message: 'Product not found' });
    });

    it('should list all products at GET /products', async function () { 
    sinon.stub(connection, 'execute').resolves([[mockedProductById]]);

    const response = await chai.request(app).get('/products');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal([mockedProductById]);
    });
});
