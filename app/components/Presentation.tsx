import {useState} from 'react';
import {BtnLook} from './BtnLook';
import {ProductsModal} from './ProductsModal';

export const Presentation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between my-6">
        <img src="/logo.webp" alt="icon buy" width={1500} height={2264} />
        <h3 className="text-lg text-center px-4">
          Our latest collection demonstrates an elegant eccentricity – bold
          patterns inspired by traditional nomadic dressing, embroidered
          buttons, ceramic detailing and artisanal stitching contrast with
          stark, clean-lined silhouettes that showcase refined modernity.
        </h3>
      </div>
      <BtnLook onClick={() => setIsModalOpen(!isModalOpen)} />
      <ProductsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
