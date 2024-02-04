import React, {createContext, useContext, useState} from 'react';

interface SelectedProductsContextProps {
  selectedProducts: number[];
  addProductToSelection: (productId: number) => void;
}

const SelectedProductsContext = createContext<
  SelectedProductsContextProps | undefined
>(undefined);

export const SelectedProductsProvider: React.FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const addProductToSelection = (productId: number) => {
    setSelectedProducts((prevSelectedProducts) => {
      if (!prevSelectedProducts.includes(productId)) {
        return [...prevSelectedProducts, productId];
      } else {
        return prevSelectedProducts;
      }
    });
  };

  return (
    <SelectedProductsContext.Provider
      value={{selectedProducts, addProductToSelection}}
    >
      {children}
    </SelectedProductsContext.Provider>
  );
};

export const useSelectedProducts = () => {
  const context = useContext(SelectedProductsContext);
  if (!context) {
    throw new Error(
      'useSelectedProducts must be used within a SelectedProductsProvider',
    );
  }
  return context;
};
