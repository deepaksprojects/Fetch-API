import React, { useState } from "react";
import "./style.css";

function Form(props) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    emailId: "",
    phoneNumber: "",
    countryCode: "",
  });
  let name, value;
  const getData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      address,
      country,
      emailId,
      phoneNumber,
      countryCode,
    } = data;
    let res = await fetch(
      "https://fetcgh-api-default-rtdb.firebaseio.com/fetchAPIform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          address,
          country,
          emailId,
          phoneNumber,
          countryCode,
        }),
      }
    );
  };
  return (
    <>
    <div>
      {props.showModel==="open" && (
        <div className="submit-m-form">
          <section className="section-f-div" onClick={props.handleClick}>
            <div className="first-s-div">
              Hi reader.
              <span className="f-s-d-s">Here's Your News!</span>
            </div>
            <div className="third-s-div">
              Have a Feedback?
              <button className="form-s-d-button">
                <span>We're Listening!</span>
              </button>
            </div>
          </section>

          <div  className={props.showModel==="open" ? "submit-c-form" : "submit-c-form-2" }>
            <div>
              <h1 id="form-heading"> Thank you so much for taking the time!</h1>
              <span id="span-id">Plase provide the below details!</span>
              <form className="submit-form" method="POST">
                <label for="fname">First name:</label>
                <input
                  type="text"
                  id="fname"
                  name="firstName"
                  placeholder="Joe"
                  value={data.firstName}
                  onChange={getData}
                />
                <br />
                <label for="lname">Last name:</label>
                <input
                  type="text"
                  id="lname"
                  name="lastName"
                  placeholder="Doe"
                  value={data.lastName}
                  onChange={getData}
                />
                <br />
                <label for="Aname">Address :</label>
                <textarea
                  name="address"
                  value={data.address}
                  placeholder="Enter your full postal address"
                  onChange={getData}
                ></textarea>
                <br />
                <label for="Cname">Country:</label>
                <div>
                  <input
                    type="text"
                    id="Cname"
                    name="country"
                    value={data.country}
                    placeholder="India"
                    onChange={getData}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="rgb(204,204,204)"
                    className="search-img"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                </div>
                <br />
                <label for="Ename">Email ID :</label>
                <input
                  type="text"
                  id="Ename"
                  name="emailId"
                  value={data.emailId}
                  placeholder="example@example.com"
                  onChange={getData}
                  required
                />
                <br />
                <label for="pname">Phone Number:</label>
                <div className="phone-num">
                  <input
                    type="tel"
                    id="Pname"
                    onChange={getData}
                    name="countryCode"
                    value={data.countryCode}
                    placeholder="+91"
                  />

                  <input
                    type="tel"
                    id="Ccode"
                    name="phoneNumber"
                    value={data.phoneNumber}
                    placeholder="123456789"
                    onChange={getData}
                    required
                  />
                </div>
                <br />
                <input
                  type="submit"
                  value="Submit Feedback"
                  id="submit-button"
                  onClick={postData}
                />
              </form>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default Form;
