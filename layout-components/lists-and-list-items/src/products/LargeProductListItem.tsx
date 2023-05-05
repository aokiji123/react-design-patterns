import React from "react";

interface IProduct {
  name: string;
  price: string;
  description: string;
  rating: number;
}

interface ILargeProductListItem {
  product: IProduct;
}

export const LargeProductListItem: React.FC<ILargeProductListItem> = ({ product }) => {
  const { name, price, description, rating } = product;

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description</h3>
      <p>{description}</p>
      <p>{rating}</p>
    </>
  );
}
