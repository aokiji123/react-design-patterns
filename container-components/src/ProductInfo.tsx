import React from 'react'

export interface IProductInfo {
  id: string;
  name: string;
  price: string;
  description: string;
  rating: number;
}

interface IProduct {
  product?: IProductInfo;
}

export const ProductInfo = ({ product }: IProduct) => {
  const { name, price, description, rating } = product || {};

  return product ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  ) : <p>Loading...</p>;
}
