import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
}

export default ProductDetail;
