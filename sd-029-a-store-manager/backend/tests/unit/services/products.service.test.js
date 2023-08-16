const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { service } = require('../../../src/services');
const { model } = require('../../../src/models');
const { mockedAllProducts } = require('../mocks/products.mock');

const { expect } = chai;
chai.use(sinonChai);

describe('Products Service Tests', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('should retrieve all products', async function () {
    sinon.stub(model, 'findAll').resolves(mockedAllProducts);

    const products = await service.getAllProducts();

    expect(products).to.deep.equal(mockedAllProducts);
  });

  it('should retrieve the correct product by ID', async function () {
    sinon.stub(model, 'findById').resolves(mockedAllProducts[0]);

    const product = await service.getProductById(1);

    expect(product).to.deep.equal(mockedAllProducts[0]);
  });

  it('should generate an error message when the product is not found by ID', async function () {
    sinon.stub(model, 'findById').resolves(false);

    const product = await service.getProductById(1000);

    expect(product).to.deep.equal({ message: 'Product not found' });
  });

  describe('Create Product', function () {
    it('should create a product with the given name', async function () {
      const mockProduct = { id: 1, name: 'Test Product' };
      sinon.stub(model, 'create').resolves(mockProduct);

      const productName = 'Test Product';
      const createdProduct = await service.createProduct(productName);

      expect(createdProduct).to.deep.equal(mockProduct);
    });
  });

  describe('Update Product', function () {
    it('should update a product with the given ID and name', async function () {
      const productId = 1;
      const updatedProduct = { id: productId, name: 'Updated Product' };
      sinon.stub(model, 'update').resolves(updatedProduct);

      const updatedName = 'Updated Product';
      const product = await service.updateProduct(productId, updatedName);

      expect(model.update).to.have.been.calledWith(productId, updatedName);
      expect(product).to.deep.equal(updatedProduct);
    });
  });

  describe('Delete Product', function () {
    it('should delete a product with the given ID', async function () {
      const productId = 1;
      const deletedProduct = { id: productId, name: 'Deleted Product' };
      sinon.stub(model, 'remove').resolves(deletedProduct);

      const product = await service.deleteProduct(productId);

      expect(model.remove).to.have.been.calledWith(productId);
      expect(product).to.deep.equal(deletedProduct);
    });
  });
});
