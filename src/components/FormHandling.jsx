import React, { useState } from 'react';
import '../FormHandling.css';
 // Assuming you create a separate CSS file

function FormHandling() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [option, setOption] = useState("");
  const [comments, setComments] = useState("");
  const [agree, setAgree] = useState(false);

  function getFormData(e) {
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Age: ", age);
    console.log("Gender: ", gender);
    console.log("Selected Option: ", option);
    console.log("Comments: ", comments);
    console.log("Agreed: ", agree);
    e.preventDefault(); // to prevent default behaviour of form submission
  }

  return (
    <>
      <h2>Form Handling Components</h2>
      <form onSubmit={getFormData} className="form-container">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            placeholder="Enter Your Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min="1"
            max="120"
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={gender === "other"}
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="options">Select Option:</label>
          <select
            name="options"
            id="options"
            value={option}
            onChange={(e) => setOption(e.target.value)}
            required
          >
            <option value="">Select Option given Below</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            placeholder="Enter Your Comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows="4"
          />
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              required
            />
            I agree to the terms and conditions
          </label>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </>
  );
}

export default FormHandling;