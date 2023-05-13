import React, {useState, useEffect} from 'react';
import axios from "axios";

interface ICurrentUser {
  resourceUrl: string;
  resourceName: string;
  children: React.ReactNode;
}

export const ResourceLoader = ({ resourceUrl, resourceName, children }: ICurrentUser) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl)
      setState(response.data)
    })()
  }, [resourceUrl]);

  return state ? (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state })
        }

        return child
      })}
    </>
  ) : <p>Loading...</p>
}
