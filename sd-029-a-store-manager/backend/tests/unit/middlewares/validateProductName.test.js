const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const validateName = require('../../../src/middlewares/validateProductName');

const { expect } = chai;
chai.use(sinonChai);

describe('Middleware Test for Product Route', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('Should call next when a valid name is passed', async function () {
    const req = {
      body: { name: 'Banana' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const next = sinon.stub().returns();
    await validateName(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Should return an error when an empty name is passed', async function () {
    const req = {
      body: { name: '' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const next = sinon.stub().returns();
    await validateName(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
  });

  it('Should return an error when a name with less than 5 characters is given', async function () {
    const req = {
      body: { name: 'Uva' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const next = sinon.stub().returns();
    await validateName(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({
      message: '"name" length must be at least 5 characters long',
    });
  });
});
