import ProductModel, {
  ProductInputtableTypes,
  ProductSequelizeModel,
} from '../database/models/product.model';

export const createProduct = async (
  product: ProductInputtableTypes,
): Promise<ProductSequelizeModel> => {
  const newProduct = await ProductModel.create(product);

  return newProduct;
};

export const getAllProducts = async (): Promise<ProductSequelizeModel[]> => {
  const allProducts = await ProductModel.findAll();

  return allProducts;
};

const productsService = {
  createProduct,
  getAllProducts,
};

export default productsService;
