import { NextFunction, Request, Response } from 'express';

const validateField = (fieldName: string, fieldValue: unknown, minLength: number, res: Response)
: boolean => {
  // console.log('validateField', fieldName, fieldValue, minLength, res);
  
  if (!fieldValue) {
    res.status(400).json({ message: `"${fieldName}" is required` });
    return false;
  }
  if (typeof fieldValue !== 'string') {
    res.status(422).json({ message: `"${fieldName}" must be a string` });
    return false;
  }
  if (fieldValue.length < minLength) {
    res.status(422)
      .json({ message: `"${fieldName}" length must be at least ${minLength} characters long` });
    return false;
  }
  console.log('chegou aqui');
  return true;
};

const validateProduct = (req: Request, res: Response, next: NextFunction): void => {
  const isValidName = validateField('name', req.body.name, 3, res);
  const isValidPrice = validateField('price', req.body.price, 3, res);

  console.log('validateProduct', isValidName, isValidPrice);
    
  if (!(isValidName && isValidPrice)) return;

  next();
};

export default validateProduct;
