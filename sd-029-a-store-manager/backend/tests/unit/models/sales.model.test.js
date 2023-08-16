const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/db/connection');
const { salesModel } = require('../../../src/models');
const { mockedAllSales } = require('../mocks/sales.mock');

chai.use(sinonChai);

describe('Sales Model Tests', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('should return all sales from the model', async function () {
    sinon.stub(connection, 'execute').resolves([mockedAllSales]);
    const sales = await salesModel.findAllSales();
    expect(sales).to.deep.equal(mockedAllSales);
  });

  it('should return the correct sale by ID from the model', async function () {
    sinon.stub(connection, 'execute').resolves([mockedAllSales[0]]);
    const sale = await salesModel.findSaleById(1);
    expect(sale).to.deep.equal(mockedAllSales[0]);
  });

  it('should return null if the sale is not found by ID from the model', async function () {
    sinon.stub(connection, 'execute').resolves([null]);
    const sale = await salesModel.findSaleById(1000);
    expect(sale).to.deep.equal(null);
  });

  it('should create a new sale in the database', async function () {
    const newId = 123;
    const productId = 456;
    const quantity = 2;
    const insertId = 789;

    sinon.stub(connection, 'execute').resolves([{ insertId }]);

    const result = await salesModel.createSale(newId, productId, quantity);

    expect(connection.execute).to.have.been.calledWith(
      sinon.match('INSERT INTO StoreManager.sales_products'),
      sinon.match([newId, productId, quantity]),
    );
    expect(result).to.equal(insertId);
  });

  it('should create a new sale ID in the database', async function () {
    const insertId = 789;

    sinon.stub(connection, 'execute').resolves([{ insertId }]);

    const result = await salesModel.createSaleId();

    expect(connection.execute).to.have.been.calledWith(sinon.match(/INSERT INTO StoreManager.sales \(date\) VALUES \(NOW\(\)\);/));
    expect(result).to.equal(insertId);
  });

  it('should delete a sale from the database', async function () {
    sinon.stub(connection, 'execute').resolves([1]);

    const result = await salesModel.deleteSale(1);

    expect(connection.execute).to.have.been.calledWith(
      sinon.match('DELETE FROM StoreManager.sales WHERE id = ?'),
      sinon.match(1),
    );
    expect(result).to.equal(1);
  });
});
