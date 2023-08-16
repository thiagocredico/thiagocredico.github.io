const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const { mockedAllSales } = require('../mocks/sales.mock');

const { expect } = chai;
chai.use(sinonChai);

describe('Sales Controller Tests', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('getAllSales', function () {
    it('should return all sales', async function () {
      const req = {};
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };
      sinon.stub(salesService, 'getAllSales').resolves(mockedAllSales);

      await salesController.getAllSales(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockedAllSales);
    });

    it('should handle errors and return 500 status code', async function () {
      const req = {};
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };
      const errorMessage = 'Something went wrong';
      sinon.stub(salesService, 'getAllSales').throws(new Error(errorMessage));

      await salesController.getAllSales(req, res);

      expect(res.status).to.have.been.calledWith(500);
      expect(res.json).to.have.been.calledWith({
        message: 'Internal server error',
      });
    });
  });

  describe('getSaleById', function () {
    it('should return the correct sale by ID', async function () {
      const req = {
        params: { id: 1 },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };
      sinon.stub(salesService, 'getSaleById').resolves(mockedAllSales[0]);

      await salesController.getSaleById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockedAllSales[0]);
    });

    it('should return null when the sale is not found', async function () {
      const req = {
        params: { id: 1000 },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };
      sinon
        .stub(salesService, 'getSaleById')
        .resolves({ message: 'Sale not found' });

      await salesController.getSaleById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
    });

    it('should handle errors and return 500 status code', async function () {
      const req = {
        params: { id: 1 },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };
      const errorMessage = 'Something went wrong';
      sinon.stub(salesService, 'getSaleById').throws(new Error(errorMessage));

      await salesController.getSaleById(req, res);

      expect(res.status).to.have.been.calledWith(500);
      expect(res.json).to.have.been.calledWith({
        message: 'Internal server error',
      });
    });
  });

  describe('createSale', function () {
    it('should create a new sale and return 201 status code', async function () {
      const req = {
        body: {
          items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 3 },
          ],
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      const newSale = { id: 1, items: req.body.items };
      sinon.stub(salesService, 'createSale').resolves(newSale);

      await salesController.createSale(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(newSale);
    });

    it('should handle errors and return 500 status code', async function () {
      const req = {
        body: {
          items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 3 },
          ],
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };
      const errorMessage = 'Something went wrong';

      sinon.stub(salesService, 'createSale').throws(new Error(errorMessage));

      await salesController.createSale(req, res);

      expect(res.status).to.have.been.calledWith(500);
      expect(res.json).to.have.been.calledWith({ message: 'Internal server error' });
    });
  });

  describe('deleteSale', function () {
    it('should delete a sale and return a success message when the sale exists', async function () {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      const getSaleByIdStub = sinon.stub(salesService, 'getSaleById').returns({ id: 1 });
      const deleteSaleStub = sinon.stub(salesService, 'deleteSale');

      await salesController.deleteSale(req, res);

      expect(getSaleByIdStub).to.have.been.calledWith(1);
      expect(deleteSaleStub).to.have.been.calledWith(1);
      expect(res.status).to.have.been.calledWith(204);
      expect(res.json).to.have.been.calledWith({ message: 'Deleted sale successfully' });
    });

    it('should return a "Sale not found" message when the sale does not exist', async function () {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      const getSaleByIdStub = sinon.stub(salesService, 'getSaleById').returns({ message: 'Sale not found' });

      await salesController.deleteSale(req, res);

      expect(getSaleByIdStub).to.have.been.calledWith(1);
      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
    });

    it('should handle errors and return 500 status code', async function () {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      sinon.stub(salesService, 'getSaleById').throws(new Error('Test error'));

      await salesController.deleteSale(req, res);

      expect(res.status).to.have.been.calledWith(500);
      expect(res.json).to.have.been.calledWith({ message: 'Internal server error' });
    });
  });
});
