import {useState} from 'react';
import {BasketModal} from '../app/components/BasketModal';
import {BtnBasket} from '../app/components/BtnBasket';

const Header = () => {
  const [isBasketModalOpen, setIsBasketModalOpen] = useState(false);

  return (
    <header>
      <div className="flex items-center justify-between m-6">
        <h1 className="text-4xl text-center mx-auto">Nanushka</h1>
        <BtnBasket setIsBasketModalOpen={setIsBasketModalOpen} />
        <BasketModal
          isOpen={isBasketModalOpen}
          onClose={() => setIsBasketModalOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
