import React from "react";

interface IProduct {
  name: string;
  price: string;
}

interface ISmallProductListItem {
  product: IProduct;
}

export const SmallProductListItem: React.FC<ISmallProductListItem> = ({ product }) => {
  const { name, price } = product;
  return (
    <>
      <h3>{name} - {price}</h3>
    </>
  );
}
