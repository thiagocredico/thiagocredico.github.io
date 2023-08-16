const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { salesService } = require('../../../src/services');
const { salesModel } = require('../../../src/models');
const { mockedAllSales } = require('../mocks/sales.mock');

const { expect } = chai;
chai.use(sinonChai);

describe('Sales Service Tests', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('should retrieve all sales', async function () {
    sinon.stub(salesModel, 'findAllSales').resolves(mockedAllSales);

    const sales = await salesService.getAllSales();

    expect(sales).to.be.deep.equal(mockedAllSales);
  });

  it('should retrieve a specific sale by ID', async function () {
    sinon.stub(salesModel, 'findSaleById').resolves(mockedAllSales[0]);

    const sale = await salesService.getSaleById(1);

    expect(sale).to.be.deep.equal(mockedAllSales[0]);
  });

  it('should generate "Sale not found" message when a sale is not found by ID', async function () {
    sinon.stub(salesModel, 'findSaleById').resolves([]);

    const sale = await salesService.getSaleById(999);

    expect(sale).to.be.deep.equal({ message: 'Sale not found' });
  });

  it('should create a new sale', async function () {
    const sale = [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 1 },
      { productId: 3, quantity: 4 },
    ];
    const newId = 123;

    sinon.stub(salesModel, 'createSaleId').resolves(newId);
    sinon.stub(salesModel, 'createSale');

    const result = await salesService.createSale(sale);

    expect(result).to.deep.equal({ id: newId, itemsSold: sale });
  });

  it('should delete a sale', async function () {
    const id = 123;

    const deleteSaleStub = sinon.stub(salesModel, 'deleteSale');
    
    await salesService.deleteSale(id);

    expect(deleteSaleStub).to.have.been.calledWith(id);
  });
});
