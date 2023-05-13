import React from 'react'
import {UserInfo} from './UserInfo'
import {CurrentUserLoader} from "./CurrentUserLoader.tsx";
import {UserLoader} from "./UserLoader.tsx";
import {ResourceLoader} from "./ResourceLoader.tsx";
import {ProductInfo} from "./ProductInfo.tsx";

export const App = () => {
  const userIds = ['1', '2', '3']
  const productIds = ['1', '2', '3']

  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>

      <h1>---------------------------------------------</h1>

      {userIds.map(userId => (
        <UserLoader key={userId} userId={userId}>
          <UserInfo />
        </UserLoader>
      ))}

      <h1>---------------------------------------------</h1>

      <ResourceLoader resourceUrl={`http://localhost:8080/users/${userIds[2]}`} resourceName="user">
        <UserInfo />
      </ResourceLoader>

      <h1>---------------------------------------------</h1>

      <ResourceLoader resourceUrl={`http://localhost:8080/products/${productIds[0]}`} resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  )
}
