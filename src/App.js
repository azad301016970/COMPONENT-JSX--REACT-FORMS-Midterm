import React, { useState } from 'react';
import './Form.css'; // Import the CSS file

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setSubmittedData(formData);
  };

  const handleCancel = () => {
    console.log('Form cancelled');

    setSubmittedData(null);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">New Product</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
        <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />

        <div className="button-container">
          <button type="submit" style={{ backgroundColor: '#607A8B', color: '#fff' }}>Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>

      {submittedData && (
        <div className="submitted-data-container">
          <h2>Submitted Data:</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ProductForm;
