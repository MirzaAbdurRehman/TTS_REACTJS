import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // For dynamic ID
import "./UpdateProduct.css";

const UpdateProduct = () => {
  const { id } = useParams(); // Agar URL se ID aa raha hai (recommended)
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    discountPrice: "",
    category: "",
    brand: "",
    stock: "",
    sku: "",
    isFeatured: false,
  });

  const [image, setImage] = useState(null); // New image
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [fetching, setFetching] = useState(true);

  // Auto fetch product on load
  useEffect(() => {
    if (id) {
      fetchProduct(id);
    } else {
      setFetching(false);
    }
  }, [id]);

  const fetchProduct = async (productId) => {
    try {
      setFetching(true);
      const res = await axios.get(`http://localhost:5000/product/${productId}`);
      const p = res.data;

      setFormData({
        name: p.name || "",
        description: p.description || "",
        price: p.price || "",
        discountPrice: p.discountPrice || "",
        category: p.category || "",
        brand: p.brand || "",
        stock: p.stock || "",
        sku: p.sku || "",
        isFeatured: p.isFeatured || false,
      });
      setMessage("");
    } catch (err) {
      setMessage("Product not found or server error!");
      console.error(err);
    } finally {
      setFetching(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const checkSku = async (sku, productId) => {
    if (!sku) return true;
    try {
      const res = await axios.get(`http://localhost:5000/check-sku/${sku}`);
      return !(res.data.exists && res.data.productId !== productId);
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) return setMessage("Invalid Product ID!");

    if (!formData.name || !formData.price) {
      return setMessage("Name and Price are required!");
    }

    if (formData.sku && !(await checkSku(formData.sku, id))) {
      return setMessage("SKU already exists!");
    }

    setLoading(true);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("discountPrice", formData.discountPrice || "");
    data.append("category", formData.category);
    data.append("brand", formData.brand);
    data.append("stock", formData.stock || 0);
    data.append("sku", formData.sku);
    data.append("isFeatured", formData.isFeatured);
    if (image) data.append("image", image);

    try {
      const res = await axios.put(
        `http://localhost:5000/updateproduct/${id}`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessage(`Product updated: ${res.data.name}`);
      setTimeout(() => navigate("/products"), 1500);
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      setMessage(`Update failed: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <p className="msg loading">Loading product...</p>;

  return (
    <div className="update-container">
      <h2>Update Product</h2>
      <button onClick={() => navigate(-1)} className="back-btn">
        Back
      </button>

      <form onSubmit={handleSubmit} className="update-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Name *</label>
            <input name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Price *</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Discount Price</label>
            <input type="number" name="discountPrice" value={formData.discountPrice} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input name="category" value={formData.category} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Brand</label>
            <input name="brand" value={formData.brand} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Stock</label>
            <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>SKU</label>
            <input name="sku" value={formData.sku} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>New Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="isFeatured"
                checked={formData.isFeatured}
                onChange={handleChange}
              />
              Featured Product
            </label>
          </div>
        </div>

        <button type="submit" className="update-btn" disabled={loading}>
          {loading ? "Updating..." : "Update Product"}
        </button>
      </form>

      {message && <p className={`message ${message.includes("success") ? "success" : "error"}`}>{message}</p>}
    </div>
  );
};

export default UpdateProduct;