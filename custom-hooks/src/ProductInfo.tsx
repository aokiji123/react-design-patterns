import {useResource} from "./useResource.tsx";

export interface IProductInfo {
  id: string;
  name: string;
  price: string;
  description: string;
  rating: number;
}

export const ProductInfo = ({ productId }: { productId: string }) => {
  const product = useResource(`http://localhost:8080/products/${productId}`)

  if (!product) return null

  const { name, price, description, rating } = product as IProductInfo || {};

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
