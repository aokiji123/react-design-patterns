import {RecursiveComponent} from "./RecursiveComponent.tsx";
import {BigSuccess, DangerButton} from "./partiallyApply.tsx";
// import {BigSuccess, DangerButton} from "./composition.tsx";

export interface NestedObject {
  a: number;
  b: {
    b1: number;
    b2: {
      b23: string;
    };
    b3: {
      b31: {
        message: string;
      };
      b32: {
        message: string;
      };
    };
  };
  c: {
    c1: number;
    c2: number;
  };
}

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: 'Hello',
    },
    b3: {
      b31: {
        message: 'Hi',
      },
      b32: {
        message: 'Hi',
      }
    }
  },
  c: {
    c1: 2,
    c2: 3,
  }
}

export const App = () => {

  return (
    <>
      <RecursiveComponent data={nestedObject} />
      <DangerButton text="Don't do it" />
      <BigSuccess text="Yes!!!!!" />
    </>
  )
}

