import { Request, Response } from 'express';
import Product from '../models/product';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const product = req.body;

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error: any) {
    res.status(409).json({ message: error.message });
  }
};
