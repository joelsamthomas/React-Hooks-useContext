import React from 'react';

const MyContext = React.createContext();

export const ProviderMyContext = MyContext.Provider;
export const ConsumerMyContext = MyContext.Consumer;
