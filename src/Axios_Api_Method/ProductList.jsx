
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import "./product_list.css";

const ProductList = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const getProductData = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/products/productlist');
      setProduct(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product data:", error);
      setError("Failed to fetch product data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete the product: ${name}?`)) {
      try {
        await axios.delete(`http://localhost:5001/api/products/productDelete/${id}`);
        alert("Product deleted successfully");
        getProductData(); // Refresh the list
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Error deleting product");
      }
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update-product/${id}`);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="wrapper">
      <h1 className="page-title">Our Collection</h1>

      <div className="grid">
        {products.map((p) => (
          <article key={p._id} className="card">

            {/* Image + Action Icons */}
            <div className="img-container">

              {/* Product Image */}
              {p.image && p.image.data && p.image.contentType ? (
                <img
                  src={`data:${p.image.contentType};base64,${p.image.data}`}
                  alt={p.name}
                  className="product-image"
                  loading="lazy"
                />
              ) : (
                <div className="no-image">
                  <span>No Image</span>
                </div>
              )}

              {/* Edit & Delete Icons - Top Right */}
              <div className="action-icons">

                {/* EDIT BUTTON */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();   // ← Critical: stops card click
                    handleUpdate(p._id);
                  }}
                  className="icon-btn edit-btn"
                  title="Edit Product"
                >
                  <FiEdit size={18} />
                </button>

                {/* DELETE BUTTON */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();   // ← Critical: stops any parent click/navigation
                    handleDelete(p._id, p.name);
                  }}
                  className="icon-btn delete-btn"
                  title="Delete Product"
                >
                  <FiTrash2 size={18} />
                </button>

              </div>
            </div>

            {/* Product Details */}
            <div className="info">
              <h2 className="name">{p.name}</h2>
              <p className="desc">{p.description}</p>

              <div className="price">
                <span className="disc">${p.discountPrice}</span>
                {p.discountPrice < p.price && (
                  <span className="orig">${p.price}</span>
                )}
              </div>

              <div className="stock-badge">
                Stock: <strong>{p.stock}</strong>
              </div>

              <footer className="footer">
                <span className={`badge ${p.isFeatured ? "feat" : "reg"}`}>
                  {p.isFeatured ? "Featured" : "Regular"}
                </span>
                <button className="cart-btn">Add to Cart</button>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductList;