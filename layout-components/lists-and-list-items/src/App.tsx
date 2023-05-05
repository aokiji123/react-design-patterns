import {RegularList} from "./RegularList.tsx";
import {SmallPersonListItem} from "./people/SmalPersonListItem.tsx";
import {LargePersonListItem} from "./people/LargePersonListItem.tsx";
import {SmallProductListItem} from "./products/SmallProductListItem.tsx";
import {LargeProductListItem} from "./products/LargeProductListItem.tsx";
import {NumberedList} from "./NumberedList.tsx";
import {Modal} from "./Modal.tsx";

const people = [{
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', 'bicycling', 'video games'],
}, {
  name: 'Brenda Smith',
  age: 33,
  hairColor: 'black',
  hobbies: ['golf', 'mathematics'],
}, {
  name: 'Jane Garcia',
  age: 27,
  hairColor: 'blonde',
  hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
  name: 'Flat-Screen TV',
  price: '$300',
  description: 'Huge LCD screen, a great deal',
  rating: 4.5,
}, {
  name: 'Basketball',
  price: '$10',
  description: 'Just like the pros use',
  rating: 3.8,
}, {
  name: 'Running Shoes',
  price: '$120',
  description: 'State-of-the-art technology for optimum running',
  rating: 4.2,
}];

export const App = () => {
  return (
    <Modal>
      <h1>People</h1>
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/*@ts-ignore*/}
      <RegularList items={people} resourceName="person" itemComponent={SmallPersonListItem} />
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/*@ts-ignore*/}
      <RegularList items={people} resourceName="person" itemComponent={LargePersonListItem} />

      <h1>Products</h1>
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/*@ts-ignore*/}
      <NumberedList items={products} resourceName="product" itemComponent={SmallProductListItem} />
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/*@ts-ignore*/}
      <NumberedList items={products} resourceName="product" itemComponent={LargeProductListItem} />
    </Modal>
  );
}
