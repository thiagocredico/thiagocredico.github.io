const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const productsModel = require('../../../src/models/products.model');
const validateSale = require('../../../src/middlewares/validateSale');

const { expect } = chai;
chai.use(sinonChai);

describe('Middleware Test for Sale Validation', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('Should call next when a valid sale is passed', async function () {
    const req = {
      body: [
        { productId: 1, quantity: 2 },
        { productId: 2, quantity: 1 },
      ],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(productsModel, 'findAll').resolves([
      { id: 1 },
      { id: 2 },
    ]);

    const next = sinon.stub().returns();
    await validateSale(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Should return an error when productId is missing', async function () {
    const req = {
      body: [
        { productId: 1, quantity: 2 },
        { quantity: 1 },
      ],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(productsModel, 'findAll').resolves([{ id: 1 }, { id: 2 }]);

    const next = sinon.stub().returns();
    await validateSale(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"productId" is required' });
  });

  it('Should return an error when a productId does not exist', async function () {
    const req = {
      body: [
        { productId: 1, quantity: 2 },
        { productId: 999, quantity: 1 },
      ],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(productsModel, 'findAll').resolves([
      { id: 1 },
      { id: 2 },
    ]);

    const next = sinon.stub().returns();
    await validateSale(req, res, next);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('Should return an error when quantity is missing', async function () {
    const req = {
      body: [
        { productId: 1, quantity: 2 },
        { productId: 2 },
      ],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(productsModel, 'findAll').resolves([
      { id: 1 },
      { id: 2 },
    ]);

    const next = sinon.stub().returns();
    await validateSale(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" is required' });
  });

  it('Should return an error when quantity is less than 1', async function () {
    const req = {
      body: [
        { productId: 1, quantity: 2 },
        { productId: 2, quantity: 0 },
      ],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(productsModel, 'findAll').resolves([
      { id: 1 },
      { id: 2 },
    ]);

    const next = sinon.stub().returns();
    await validateSale(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" must be greater than or equal to 1' });
  });
});