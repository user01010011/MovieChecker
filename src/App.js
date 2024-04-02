import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    movieName: '',
    startDate: '',
    endDate: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Adjust the URL to your backend endpoint
      const response = await axios.post('http://localhost:5000/check_showtimes', formData);
      alert('Submission successful');
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form", error);
      alert('Submission failed');
    }
  };

  return (
    <div className="App">
      <h1>Movie Checker</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">Movie Name: </label>
          <input
            className="form-control" id="movie-name"
            type="text"
            name="movieName"
            value={formData.movieName}
            onChange={handleChange}
            placeholder="Movie Name"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">Start Date:</label>
          <input className="form-control" id="start-date"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">End Date:</label>
          <input
            className="form-control" id="end-date"
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">Email (to receive updates):</label>
          <input
            className="form-control" id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <button type="submit">Check Showtimes</button>
      </form>
    </div>
  );
}

export default App;
