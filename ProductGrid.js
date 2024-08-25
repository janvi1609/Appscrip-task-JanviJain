import React from 'react';
import styles from '../styles/ProductGrid.module.css';

const ProductGrid = ({ products }) => {
  return (
    <div className={styles.gridContainer}>
      <h1>Discover Our Products</h1>
      <p>By Janvi.</p>
      <div className={styles.grid}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
