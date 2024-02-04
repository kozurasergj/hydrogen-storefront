import {productsData} from '../mocks';
import {IProduct} from './BasketModal';
import {BtnClose} from './BtnClose';
import {useSelectedProducts} from './SelectedProductsContext';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProductsModal = ({isOpen, onClose}: ProductModalProps) => {
  const {addProductToSelection} = useSelectedProducts();

  const handleAddToBag = (productId: number) => {
    addProductToSelection(productId);
    addLocalStorage(productId);
  };

  const addLocalStorage = (productId: number) => {
    const storedSelectedProducts = JSON.parse(
      window.localStorage.getItem('selected') || '[]',
    );

    const updatedSelectedProducts = [
      ...(storedSelectedProducts as number[]),
      productId,
    ];

    window.localStorage.setItem(
      'selected',
      JSON.stringify(updatedSelectedProducts),
    );
  };

  return (
    // eslint-disable-next-line eslint-comments/disable-enable-pair
    /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src="/logo.webp"
          className="modal-img"
          alt="icon buy"
          width={1500}
          height={2264}
        />
        <ul className="flex flex-col justify-between gap-2 overflow-scroll">
          {productsData.map((product: IProduct) => (
            <li key={product.id}>
              <div className="flex m-3">
                <img
                  alt="icon buy"
                  width={200}
                  height={300}
                  src={product.imageSrc}
                />
                <div className="flex justify-between">
                  <div className="flex flex-col w-[70%] items-start justify-between">
                    <h3 className="text-left mx-6 mb-6 text-2xl">
                      {product.name}
                    </h3>
                    <p className="mx-6 mb-6 text-left">{product.description}</p>
                    <button
                      className="mx-6 py-2 px-5 border border-black rounded-md hover:bg-gray-200"
                      onClick={() => {
                        handleAddToBag(product.id);
                        addLocalStorage(product.id);
                      }}
                    >
                      Add to bag
                    </button>
                  </div>
                  <div className="flex flex-col w-[30%] mr-2">
                    <span className="text-right">{product.price}</span>
                    <span className="text-right text-with-line w-fit ml-auto">
                      {product.discountedPrice}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <BtnClose onClose={onClose} />
      </div>
    </div>
  );
};
