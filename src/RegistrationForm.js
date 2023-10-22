import React, { useState } from 'react';

function RegistrationForm({ onRegister }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    bio: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number format';
    }

    if (!formData.bio) {
      newErrors.bio = 'Bio is required';
    } else if (formData.bio.length > 200) {
      newErrors.bio = 'Bio must be 200 characters or less';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // If validation passes, register the user
      onRegister(formData);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        bio: '',
      });
      setErrors({});
    } else {
      // If validation fails, update the errors state
      setErrors(newErrors);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
      <h2 style={{ textAlign: 'center', color: '#007bff', marginBottom: '20px' }}>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          {errors.fullName && <div style={{ color: 'red' }}>{errors.fullName}</div>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          {errors.phoneNumber && <div style={{ color: 'red' }}>{errors.phoneNumber}</div>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Bio"
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          {errors.bio && <div style={{ color: 'red' }}>{errors.bio}</div>}
        </div>
        <button
          type="submit"
          style={{ width: '100%', backgroundColor: '#007bff', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;