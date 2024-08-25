import React from 'react';
import styles from '../styles/FilterSidebar.module.css';

const FilterSidebar = ({ setFilter, visible }) => {
  return (
    <aside className={`${styles.filterSidebar} ${visible ? styles.visible : ''}`}>
      <div className={styles.filterOptions}>
        <h3>Filter by Category</h3>
        <ul>
          <li onClick={() => setFilter('electronics')}>Electronics</li>
          <li onClick={() => setFilter('jewelery')}>Jewelery</li>
          <li onClick={() => setFilter("men's clothing")}>Men's Clothing</li>
          <li onClick={() => setFilter("women's clothing")}>Women's Clothing</li>
        </ul>
      </div>
      <div className={styles.filterOptions}>
        <h3>Filter by Price</h3>
        <ul>
          <li onClick={() => setFilter('lowToHigh')}>Price: Low to High</li>
          <li onClick={() => setFilter('highToLow')}>Price: High to Low</li>
        </ul>
      </div>
    </aside>
  );
};

export default FilterSidebar;