import type { Product } from "../../types/productTypes";

export const getTotalItems = (items: Product[]): number =>
  items.reduce((sum, item) => sum + item.amount, 0);

export const calcTotal = (items: Product[]): number =>
  items.reduce((sum, item) => sum + item.amount * +item.price, 0);

