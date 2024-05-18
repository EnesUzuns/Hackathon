import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone_number: '',
    address: '',
    priority: '',
    organization: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/submit', formData)
      .then(response => {
        alert('Data submitted successfully');
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Ad:</label>
        <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />
      </div>
      <div>
        <label>Telefon Numarası:</label>
        <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
      </div>
      <div>
        <label>Adres:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label>Öncelik:</label>
        <div>
          <input type="radio" name="priority" value="Enkazdayım" onChange={handleChange} required /> Enkazdayım
        </div>
        <div>
          <input type="radio" name="priority" value="Enkazda değilim" onChange={handleChange} required /> Enkazda değilim
        </div>
        <div>
          <input type="radio" name="priority" value="Çadırdayım" onChange={handleChange} required /> Çadırdayım
        </div>
      </div>
      <div>
        <label>Yardım Kuruluşları:</label>
        <select name="organization" value={formData.organization} onChange={handleChange} required>
          <option value="Tumu">Tümü</option>
          <option value="Cansuyu">Cansuyu</option>
          <option value="IHH">IHH</option>
        </select>
      </div>
      <div>
        <label>Yardım Mesajı:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </div>
      <button type="submit">Gönder</button>
    </form>
  );
};

export default Form;
