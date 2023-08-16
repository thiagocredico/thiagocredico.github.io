const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/db/connection');
const { model } = require('../../../src/models');
const {
  mockedAllProducts,
  mockedProductById,
} = require('../mocks/products.mock');

describe('Products Model Tests', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('should retrieve a product from the database by ID', async function () {
    sinon.stub(connection, 'execute').resolves([[mockedAllProducts[0]]]);
    const responseFromDb = await model.findById(10);

    expect(responseFromDb).to.be.an('object').to.deep.equal(mockedProductById);
  });

  it('should retrieve all products from the database', async function () {
    sinon.stub(connection, 'execute').resolves([mockedAllProducts]);
    const responseFromDb = await model.findAll();

    expect(responseFromDb)
      .to.be.an('array')
      .to.have.lengthOf(3)
      .to.deep.equal(mockedAllProducts);
  });

  it('should return false if ID is not found or not provided', async function () {
    sinon.stub(connection, 'execute').resolves([[undefined]]);
    const responseFromDb = await model.findById(10);

    expect(responseFromDb).to.be.equal(false);
  });

  it('should create a new product in the database', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 10 }]);
    const responseFromDb = await model.create('Pera');

    expect(responseFromDb).to.be.an('object').to.deep.equal({
      id: 10,
      name: 'Pera',
    });
  });

  it('should throw an error if the product name is not provided', async function () {
    const executeStub = sinon.stub(connection, 'execute');
    executeStub.throws(new Error('Product name not provided'));

    try {
      await model.create();
    } catch (error) {
      expect(error.message).to.equal('Product name not provided');
    }

    expect(executeStub).to.have.been.calledOnceWith(
      'INSERT INTO StoreManager.products (name) VALUES (?);',
      [undefined],
    );
  });

  it('should update a product in the database', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const responseFromDb = await model.update(10, 'Pera');

    expect(responseFromDb).to.be.an('object').to.deep.equal({
      id: 10,
      name: 'Pera',
    });
  });

  it('should throw an error if the product name is not correct', async function () {
    const executeStub = sinon.stub(connection, 'execute');
    executeStub.throws(new Error('Product name not provided'));

    try {
      await model.update(10);
    } catch (error) {
      expect(error.message).to.equal('Product name not provided');
    }

    expect(executeStub).to.have.been.calledOnceWith(
      'UPDATE StoreManager.products SET name = ? WHERE id = ?;',
      [undefined, 10],
    );
  });

  it('should throw an error if the product ID is not provided', async function () {
    const executeStub = sinon.stub(connection, 'execute');
    executeStub.throws(new Error('Product ID not provided'));

    try {
      await model.update();
    } catch (error) {
      expect(error.message).to.equal('Product ID not provided');
    }

    expect(executeStub).to.have.been.calledOnceWith(
      'UPDATE StoreManager.products SET name = ? WHERE id = ?;',
      [undefined, undefined],
    );
  });

  it('should throw an error if deleting the product fails', async function () {
    const id = 1;

    sinon.stub(connection, 'execute').throws(new Error('Failed to execute the query'));

    try {
      await model.remove(id);
      expect.fail('The remove function should throw an error');
    } catch (error) {
      expect(error.message).to.equal('Failed to execute the query');
    }
  });

  it('should delete a product from the database', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const responseFromDb = await model.remove(1);

    expect(responseFromDb).to.equal(true);
  });
});
