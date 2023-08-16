import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import app from '../../../src/app';
import chai, { expect } from 'chai';
import { ordersService } from '../../../src/services';


describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('should successfully get all orders', async function () {
    // Arrange
    const mockedResult = [];
    const findAllStub = sinon.stub(OrderModel, 'findAll');
    findAllStub.resolves([]);

    // Act
    const response = await chai.request(app).get('/orders');

    // Assert
    expect(response).to.have.status(200);
    expect(response.body).to.be.deep.equal([]);
  }
  );

  // it('should return orders with product IDs', async function () {
  //   // Arrange
  //   const mockedOrders = [
  //     {
  //       "id": 1,
  //       "userId": 2,
  //       "productIds": [1, 2]
  //     },
  //     {
  //       "id": 2,
  //       "userId": 1,
  //       "productIds": [3, 4]
  //     }
  //   ];

  //   const findAllStub = sinon.stub(OrderModel, 'findAll').resolves(mockedOrders as any);

  //   // Act
  //   const result = await chai.request(app).get('/orders');

  //   // Assert
  //   expect(result).to.have.status(200);

  //   expect(result).to.deep.equal([
  //     { id: 1, userId: 2, productIds: [1, 2] },
  //     { id: 2, userId: 1, productIds: [3, 4] },
  //   ]);
  // });
    
  it('should map productIds if available', async () => {
    // Arrange
    const orders = [
      {
        id: 1,
        userId: 1,
        dataValues: {
          id: 1,
          userId: 1,
          productIds: [
            { id: 101, name: 'Product A' },
            { id: 102, name: 'Product B' },
          ],
        },
      },
    ];

    const findAllStub = sinon.stub(OrderModel, 'findAll').resolves(orders as any);

    // Act
    const result = await ordersService.getAllOrders();

    // Assert
    expect(result).to.deep.equal([
      {
        id: 1,
        userId: 1,
        productIds: [101, 102],
      },
    ]);

    // Clean up
    findAllStub.restore();
  });

  it('should handle empty productIds array', async () => {
    // Arrange
    const orders = [
      {
        id: 2,
        userId: 2,
        dataValues: {
          id: 2,
          userId: 2,
          productIds: [],
        },
      },
    ];

    const findAllStub = sinon.stub(OrderModel, 'findAll').resolves(orders as any);

    // Act
    const result = await ordersService.getAllOrders();

    // Assert
    expect(result).to.deep.equal([
      {
        id: 2,
        userId: 2,
        productIds: [],
      },
    ]);
  });

});
