document.getElementById('submitButton').addEventListener('click', function (e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;

    // Check if a gender option is selected
    const genderElements = document.querySelectorAll('input[type="radio"][name="gender"]:checked');
    if (genderElements.length === 0) {
        alert('Please select a gender.');
        return;
    }

    // The rest of the code remains the same
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Validate mobile number
    if (!/^\d{10}$/.test(mobile)) {
        alert('Mobile number must be 10 digits and contain only numbers.');
        return;
    }

    // Display the survey results in the popup
    let gender = genderElements[0].value;
    const results = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
    `;

    document.getElementById('results').innerHTML = results;
    document.getElementById('popup').style.display = 'block';

    document.getElementById('resetButton').addEventListener('click', function () {
        document.getElementById('surveyForm').reset();
    });
    
});
