import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import './ProductDetails.css'; 

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.thumbnail} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: <strong>${product.price}</strong></p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
