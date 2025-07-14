import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import { Link } from 'react-router-dom';
import Button from '../../components/button/button-component';

const Shop = () => {
  const { categoryId } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  if (!categoriesMap || Object.keys(categoriesMap).length === 0) {
    return <p>Loading categories...</p>;
  }

  const products = categoriesMap[categoryId];
  const productsToShow = products && products.length > 0
    ? products
    : Object.values(categoriesMap).flat();

  return (
    <>
      <div>
        <h2 className="dark:text-white text-center text-3xl font-bold uppercase mb-4">
          {productsToShow === products ? categoryId : 'All Products'}
        </h2>

        {/* KATEGORI LINKS */}
        <nav className="categories-links flex gap-4 justify-center py-4 flex-wrap">
          {Object.keys(categoriesMap).map((category) => (
            <Link key={category} to={`/shop/${category}`}>
              <Button
                buttonType="green"
                className="uppercase font-semibold"
                isActive={category === categoryId}
              >
                {category}
              </Button>
            </Link>
          ))}

          {/* Tombol 'All' */}
          <Link to="/shop">
            <Button
              buttonType="yellow"
              className="uppercase font-semibold"
              isActive={!categoryId}
            >
              All
            </Button>
          </Link>
        </nav>

        {/* GRID PRODUK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 py-8">
          {productsToShow.length > 0 ? (
            productsToShow.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
