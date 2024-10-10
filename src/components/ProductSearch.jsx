import React, { useState } from 'react';
import { searchProducts } from '../services/api';
import { Link } from 'react-router-dom';
import './ProductSearch.css'; // Add this for component-specific styling

const ProductSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    searchProducts(query).then((data) => {
      setResults(data.products);
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Search Products</h1>
      <form onSubmit={handleSearch} className="d-flex mb-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search for a product..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
      <div className="row">
        {results.map((product) => (
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
    </div>
  );
};

export default ProductSearch;
