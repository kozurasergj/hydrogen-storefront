import {useSelectedProducts} from './SelectedProductsContext';

interface IBtnBasket {
  setIsBasketModalOpen: (value: boolean) => void;
}

export const BtnBasket = ({setIsBasketModalOpen}: IBtnBasket) => {
  const {selectedProducts} = useSelectedProducts();

  return (
    <div className="relative ml-auto">
      <button onClick={() => setIsBasketModalOpen(true)}>
        <img src="/buy.svg" alt="icon buy" width={40} height={40} />
      </button>
      {selectedProducts.length > 0 && (
        <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
          {selectedProducts.length}
        </div>
      )}
    </div>
  );
};
