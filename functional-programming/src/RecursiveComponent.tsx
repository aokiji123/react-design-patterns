import { NestedObject } from './App';

const isObject = (data: NestedObject | string): data is NestedObject => {
  return typeof data === 'object' && data !== null;
};

export const RecursiveComponent = ({ data }: { data: NestedObject | string }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);
  return (
    <>
      {pairs.map(([key, value]) => (
        <li key={key}>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  );
};
