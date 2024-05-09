document.addEventListener('DOMContentLoaded', function() {
    // Get form data from local storage
    const formDataArray = JSON.parse(localStorage.getItem('formData')) || [];
  
    // Display form data in table
    const tableBody = document.getElementById('tableBody');
    formDataArray.forEach(function(formData, index) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${formData.name}</td>
        <td>${formData.email}</td>
        <td>${formData.phone}</td>
        <td>${formData.dob}</td>
        <td>${formData.message}</td>
      `;
      tableBody.appendChild(row);
    });
  });
  