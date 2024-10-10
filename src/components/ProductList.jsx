import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/api';
import './ProductList.css'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    fetchProducts(productsPerPage, (page - 1) * productsPerPage).then((data) => {
      setProducts(data.products);
    });
  }, [page]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product Catalog</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={product.thumbnail} alt={product.title} className="card-img-top product-image" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="btn btn-secondary">
          Previous
        </button>
        <button onClick={() => setPage(page + 1)} className="btn btn-secondary">
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
