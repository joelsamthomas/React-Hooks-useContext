import React from 'react';
import './style.css';
import ComponentC from './ComponentC';
import { ProviderMyContext } from './userContext';

let state = {
  name: 'Joel',
  address: 'Mith',
};


export default function App() {
  return (
    <div>
      <ProviderMyContext value={state}>
        <ComponentC />
      </ProviderMyContext>
    </div>
  );
}
