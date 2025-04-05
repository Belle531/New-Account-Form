//using the onsubmit event listener

// 1 select the form and output paragraph
const form = document.getElementById("registration-form");
const output = document.getElementById("formDataOutput");

// 2 Create the function to display the form data in the output
function showFormData(event) {
  event.preventDefault(); // Prevents page refresh

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const birthday = document.getElementById("birthday").value;

  const language = document.querySelector(
    'input[name="language"]:checked'
  )?.value;

  output.innerHTML = `
<p><strong>First Name: </strong> ${firstName}</p>
<p><strong>Last Name: </strong> ${lastName}</p>
<p><strong>Email: </strong> ${email}</p>
<p><strong>Password: </strong> ${password}</p>
<p><strong>Language: </strong> ${language}</p>
`;
}

// Get value form inputs
// ffirst Name, Last name, email, password, bday, language

// 3 Add the event listener for form subission
form.addEventListener("submit", showFormData);

console.log("This is the value were looking for This is my Value");
