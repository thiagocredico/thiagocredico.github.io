const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { service } = require('../../../src/services');
const { controller } = require('../../../src/controllers');
const { mockedAllProducts, mockedProductById } = require('../mocks/products.mock');
const { model } = require('../../../src/models');

const { expect } = chai;
chai.use(sinonChai);

describe('Product Controller', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('should return all products when calling getAllProducts', async function () {
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(service, 'getAllProducts').resolves(mockedAllProducts);
    await controller.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockedAllProducts);
  });

  it('should return the correct product when calling getProductById', async function () {
    const req = {
      params: { id: 1 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(service, 'getProductById').resolves(mockedAllProducts[0]);
    await controller.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockedAllProducts[0]);
  });

  it('should return null when the product is not found', async function () {
    const req = {
      params: { id: 1000 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(service, 'getProductById').resolves(null);
    await controller.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.been.calledWith({
      message: 'Internal server error',
    });
  });

  it('should return the correct id when adding a product', async function () {
    const req = {
      body: { name: 'Test Product' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const newProductId = 4;
    sinon.stub(service, 'createProduct').resolves(newProductId);
    await controller.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProductId);
  });

  it('should return an error when adding a product with an empty name', async function () {
    const req = {
      body: { name: '' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(service, 'createProduct').resolves(null);
    await controller.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(null);
  });

  it('should return an error when adding a product with a name that already exists', async function () {
    const req = {
      body: { name: 'Test Product' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(service, 'createProduct').resolves(null);
    await controller.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(null);
  });

  it('should handle errors and return 500 status code for createProduct', async function () {
    const req = { body: { name: 'Test Product' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const errorMessage = 'Something went wrong';
    sinon.stub(service, 'createProduct').rejects(new Error(errorMessage));

    await controller.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.been.calledWith({
      message: 'Internal server erro.',
    });
  });

  it('should handle errors and return 500 status code for getAllProducts', async function () {
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const errorMessage = 'Something went wrong';
    sinon.stub(service, 'getAllProducts').throws(new Error(errorMessage));

    await controller.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.been.calledWith({
      message: 'Internal server error',
    });
  });

  it('should delete the product and return 204 status code when calling deleteProduct', async function () {
    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(model, 'findById').resolves(mockedProductById);
    sinon.stub(service, 'deleteProduct').resolves();
  
    await controller.deleteProduct(req, res);
  
    expect(res.status).to.have.been.calledWith(204);
  });
  
  it('should return 404 status code when the product is not found in deleteProduct', async function () {
    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
  
    sinon.stub(model, 'findById').resolves(null);
  
    await controller.deleteProduct(req, res);
  
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledOnceWithExactly({ message: 'Product not found' });
  });
  
  it('should handle errors and return 500 status code for deleteProduct', async function () {
    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const errorMessage = 'Something went wrong';
  
    sinon.stub(service, 'getProductById').resolves({});
    sinon.stub(service, 'deleteProduct').rejects(new Error(errorMessage));
  
    await controller.deleteProduct(req, res);
  
    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.been.calledWith({ message: 'Internal server error' });
  });

  it('should update the product and return the updated product when calling updateProduct', async function () {
    const req = { params: { id: 1 }, body: { name: 'Updated Product' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
  
    const productOnDB = { id: 1, name: 'Old Product' };
    const updatedProduct = { id: 1, name: 'Updated Product' };
  
    sinon.stub(model, 'findById').resolves(productOnDB);
    sinon.stub(service, 'updateProduct').resolves(updatedProduct);
  
    await controller.updateProduct(req, res);
  
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(updatedProduct);
  });
  
  it('should return 404 status code when the product is not found in updateProduct', async function () {
    const req = {
      params: { id: 1 },
      body: { name: 'Updated Product' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
  
    sinon.stub(model, 'findById').resolves(null);
  
    await controller.updateProduct(req, res);
  
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
  
  it('should handle errors and return 500 status code in updateProduct', async function () {
    const req = { params: { id: 1 }, body: { name: 'Updated Product' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const errorMessage = 'Something went wrong';
  
    sinon.stub(model, 'findById').throws(new Error(errorMessage));
  
    await controller.updateProduct(req, res);
  
    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.been.calledWith({ message: 'Internal server error' });
  });
});
