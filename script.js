document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const name = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail').value;
    const phone = document.getElementById('inputPhone').value;
    const dob = document.getElementById('inputDOB').value;
    const message = document.getElementById('inputMessage').value;
  
    // Create object with form data
    const formData = {
      name: name,
      email: email,
      phone: phone,
      dob: dob,
      message: message
    };
  
    // Get existing data from local storage or create empty array
    let formDataArray = JSON.parse(localStorage.getItem('formData')) || [];
  
    // Push new form data to array
    formDataArray.push(formData);
  
    // Store updated array in local storage
    localStorage.setItem('formData', JSON.stringify(formDataArray));
  
    // Redirect to new page to display data
    window.location.href = 'display.html';
  });
  