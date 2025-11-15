

import React,{useState} from 'react'
import "./Product_Add.css";
import axios from 'axios';

const Product_Add = () => {

    const [formData, setFormData] =  useState({
        name: '',
        price: '',
        description: '',
        category: '',
        discountPrice: '',
        stock: '',
        isFeatured: false,
        ratings: '',
    });

    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    }


    const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      setImagePreview(null);
    }
  };


    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const productData = new FormData();
        productData.append('name', formData.name);
        productData.append('price', formData.price);
        productData.append('description', formData.description);
        productData.append('category', formData.category);
        productData.append('discountPrice', formData.discountPrice);
        productData.append('stock', formData.stock);
        productData.append('isFeatured', formData.isFeatured);
        productData.append('ratings', formData.ratings);


        if(imageFile){
            productData.append('image', imageFile);
        }

        try{
            const response =  await axios.post('http://localhost:5001/api/products/addProduct',productData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',  // Set the content type for file upload
                    },
                }
             );

            setMessage("Data Added Successfully");
            console.log("Product added:", response.productData);


            // Reset form

            setFormData({
                name: '',
                price: '',
                description: '',
                category: '',
                discountPrice: '',
                stock: '',
                isFeatured: false,
                ratings: '',
            });
            setImageFile(null);
            setImagePreview(null);
            setLoading(false);
            document.getElementById("imageInput").value = null;


        }catch(err){
            setError("Error in Data Adding");
            setMessage( err.response?.productData?.message || 'Failed to add product. Please try again.');    
        }finally{
            setLoading(false);
        }
    }

  return (
    <>
     <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Add New Product</h2>

        {message && (
          <p
            className={`message ${message.includes("successfully") ? "success" : "error"
              }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="form-grid">
          {/* Product Name */}
          <div className="form-group">
            <label>Product Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
            />
          </div>

          {/* Price */}
          <div className="form-group">
            <label>Price ($)*</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          {/* Discount Price */}
          <div className="form-group">
            <label>Discount Price ($)</label>
            <input
              type="number"
              name="discountPrice"
              placeholder="Enter discount price"
              value={formData.discountPrice}
              onChange={handleChange}
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category *</label>
            <input
              type="text"
              name="category"
              placeholder="Enter category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>

    

          {/* Stock */}
          <div className="form-group">
            <label>Stock *</label>
            <input
              type="number"
              name="stock"
              placeholder="Available stock"
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </div>


          {/* Image Upload */}
          <div className="form-group full-width">
            <label>Product Image</label>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <div className="image-preview">
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{ width: "100%", maxHeight: "200px", objectFit: "cover", marginTop: "10px", borderRadius: "8px" }}
                />
              </div>
            )}
          </div>

          {/* Featured Checkbox */}
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              name="isFeatured"
              checked={formData.isFeatured}
              onChange={handleChange}
            />
            <label>Mark as Featured Product</label>
          </div>

          {/* Submit Button */}
          <div className="form-group full-width">
            <button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Product_Add
