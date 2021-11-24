import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components';
import { products } from '../data/product';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        product={product}
        // Si comento maxCount evito el bloqueo de incremento
        initialValues={{ count: 4, maxCount: 10 }}>
        {({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};
