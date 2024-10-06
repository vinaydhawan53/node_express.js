// Fetch data from your API
fetch('http://localhost:5000/applications/today')  // Replace with your API URL
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('card-container');
    
    data.forEach(application => {
      // Create a new card element
      const card = document.createElement('div');
      card.classList.add('card');

      // Add name, email, and applied date to the card
      card.innerHTML = `
        <h3>${application.name}</h3>
        <p><strong>Email:</strong> ${application.email}</p>
        <p><strong>Applied Date:</strong> ${new Date(application.appliedDate).toLocaleDateString()}</p>
      `;

      // Append the card to the card container
      cardContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching applications:', error));
