import { ConsumerMyContext } from './userContext';
import React, { useSelector } from 'react';
``;

export default function ComponentF() {
  return (
    //consumer context takes an anonymours function with properrties passed in and returns a jsx
    <ConsumerMyContext>
      {(state) => {
        return (
          <div>
            <h1>{state.name}</h1>
            <h2> {state.address}</h2>
          </div>
        );
      }}
    </ConsumerMyContext>
  );
}
