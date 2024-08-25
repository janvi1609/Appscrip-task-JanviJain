import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import FilterSidebar from '../components/FilterSidebar';
import styles from '../styles/Home.module.css';
import axios from 'axios';

const Home = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);
  const [isVisible, setIsVisible] = useState(true); // Start with the sidebar visible

  const filterProducts = async (filter) => {
    let url = 'https://fakestoreapi.com/products';
    
    // Handle sorting logic
    if (filter === 'lowToHigh') {
      const response = await axios.get(url);
      const sortedProducts = response.data.sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    } else if (filter === 'highToLow') {
      const response = await axios.get(url);
      const sortedProducts = response.data.sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    } else if (filter) {
      // If it's a category filter, fetch products by category
      const response = await axios.get(`${url}?category=${filter}`);
      setProducts(response.data);
    } else {
      // If no filter is selected, reset to initial products
      setProducts(initialProducts);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Discover Our Products - Your Store</title>
        <meta name="description" content="Explore a wide range of products with amazing deals." />
        <meta name="keywords" content="products, ecommerce, shopping" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <div className={styles.main}>
        {isVisible && <FilterSidebar setFilter={filterProducts} />}
        <div className={styles.content}>
          <button className={styles.toggleButton} onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? 'Hide Filter' : 'Show Filter'}
          </button>
          <ProductGrid products={products} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return {
    props: {
      initialProducts: response.data,
    },
  };
};

export default Home;
