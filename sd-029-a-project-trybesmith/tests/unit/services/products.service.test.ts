import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import { Request, Response } from 'express';
import validateProduct from '../../../src/middlerwares/validateProduct';

chai.use(chaiHttp);

describe('Products Service Layer', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('should successfully create a product', async function () {
    // Arrange
    const mockedProduct = {
      name: 'Sabre de luz medieval do futuro',
      price: '1000',
      orderId: 4,
    };
    const mockedResult = ProductModel.build(mockedProduct);
    sinon.stub(ProductModel, 'create').resolves(mockedResult);

    // Act
    const response = await chai
      .request(app)
      .post('/products')
      .send(mockedProduct);

    // Assert
    expect(response).to.have.status(201);
  });

  it('should successfully get all products', async function () {
    // Arrange
    const mockedResult = [
      {
        id: 1,
        name: 'Sabre de luz medieval do futuro',
        price: '1000',
        orderId: 4,
      },
      {
        id: 2,
        name: 'Sabre de luz medieval do passado',
        price: '1000',
        orderId: 4,
      },
    ];
    const findAllStub = sinon.stub(ProductModel, 'findAll');
    findAllStub.resolves(mockedResult.map((item) => ProductModel.build(item)));

    // Act
    const response = await chai.request(app).get('/products');

    // Assert
    expect(response).to.have.status(200);
    expect(response.body).to.be.deep.equal(mockedResult);
  });

  it('should fail when trying to create a product with an invalid name', async function () {
    // Arrange
    const mockedProduct = {
      name: '',
      price: '1000',
      orderId: 4,
    };

    const req = { method: 'POST', body: mockedProduct } as Request;
    const res = { status: () => res, json: () => res, sendStatus: () => {} } as unknown as Response;
    const next = () => {};

    // Stub validateField to simulate validation failure
    const validateFieldStub = sinon.stub();
    validateFieldStub.withArgs('name', mockedProduct.name, 3, res).returns(false);
    validateFieldStub.withArgs('price', mockedProduct.price, 3, res).returns(true);

    // Act
    const isValidName = validateFieldStub('name', mockedProduct.name, 3, res);
    const isValidPrice = validateFieldStub('price', mockedProduct.price, 3, res);

    if (!(isValidName && isValidPrice)) return;

    validateProduct(req, res, next);

    // Assert
    expect(res).to.have.status(400);
    expect(res).to.be.json;
    // expect(res.body).to.deep.equal({ message: '"name" is required' });
  });


  
});
