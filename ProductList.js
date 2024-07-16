import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Laptop');
  const [top, setTop] = useState(10);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/products`, {
      params: {
        companyname: company,
        categoryname: category,
        top: top,
        minPrice: minPrice,
        maxPrice: maxPrice,
      }
    })
    .then(response => {
      console.log('Response data:', response.data);
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        console.error('Expected an array but got:', response.data);
        setProducts([]);
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setProducts([]);
    });
  }, [company, category, top, minPrice, maxPrice]);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
