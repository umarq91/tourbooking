import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    selectedDate: '',
    // other form fields...
  });

  const handleDateChange = (event) => {
    setFormData({
      ...formData,
      selectedDate: event.target.value,
    });
  };
  console.log(formData.selectedDate);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedDate = new Date(formData.selectedDate).toISOString();

    // Format the date if necessary before sending it to the backend
  


    // Send the data to the backend API
    fetch('your-backend-api-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        selectedDate: formattedDate,
        // other form fields...
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server if needed
        console.log('Data sent to the backend:', data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error sending data to the backend:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select a Date:
        <input
          type="date"
          value={formData.selectedDate}
          onChange={handleDateChange}
        />
      </label>

      {/* Add other form elements as needed */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
