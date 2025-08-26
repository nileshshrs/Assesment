import axios from "axios";
import type { Product } from "@/utils/types";

export const fetchProducts = async (limit: number): Promise<Product[]> => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
    return res.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
