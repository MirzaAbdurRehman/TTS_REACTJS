

import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  
import "./product_list.css";


const ProductList = () => {

    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] =  useState(null);

    const navigate = useNavigate();


    const getProductData = async () => {
        try{
            const res = await axios.get('http://localhost:5001/api/products/productlist');
            setProduct(res.data);
            setLoading(false);
        }catch(error){
            console.error("Error fetching product data:", error);
            setError("Failed to fetch product data.");
            setLoading(false);
        }
    }
    useEffect(() => {
        getProductData();
    }, []);

    const handleDelete = async (id, name) => {
      if(window.confirm(`Are you sure you want to delete the product: ${name} ?`)){
        try{
          await axios.delete(`http://localhost:5001/api/products/productDelete/${id}`);
          alert("Product deleted successfully");
          // Refresh product list after deletion
          getProductData();
        }catch(error){
          alert("Error deleting product");
          console.error("Error deleting product:", error);
        }
    }};

    const handleUpdate = (id) => {
      // Navigate to update page or open update modal
      navigate(`/update-product/${id}`);
    }

    if(loading) return <p>Loading products...</p>;
    if(error) return <p>{error}</p>;


  return (
   <>
    <section className="wrapper">
      <h1 className="page-title">Our Collection</h1>

      <div className="grid">
        {products.map((p) => (
          <article key={p._id} className="card">
            {/* Image Container */}
            <div className="img-container">
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
   </>
  )
}

export default ProductList
