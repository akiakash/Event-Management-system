import React, { useState, useEffect } from "react";
import axios from "axios";

function FoodEdit() {
  const [FoodName, setFoodName] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [food, setFood] = useState([]);

  const id = window.sessionStorage.getItem("FoodID");

  useEffect(() => {
    axios.get(`http://localhost:3000/FoodsBooking/${id}`).then((response) => {
      //   console.log(response.data);
      setFirstName(response.data.FirstName);
      setLastName(response.data.LastName);
      setEmail(response.data.EMail);
      setContactNumber(response.data.ContactNumber);
      setFood(response.data);
      console.log(response.data);
    });
  }, []);

  function updateFood() {
    axios
      .patch(`http://localhost:3000/FoodsBooking/${id}`, {
        FoodName: FoodName,
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Contactnumber: ContactNumber,
      })
      .then((response) => {
        setLoading(false);

        // window.location.reload();
        window.location("/User");
      })
      .catch((error) => {
        setLoading(false);
        alert("Sorry, Something Error...");
      });
  }

  return (
    <div>
      <form>
        <label>
          Food Name:
          <input type="text" name="name" />
        </label>
        <br></br>

        <br></br>
        <label>
          First Name:
          <input
            type="text"
            name="name"
            defaultValue={food.FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Last Name:
          <input
            type="text"
            name="name"
            defaultValue={food.LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="name"
            defaultValue={food.Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Contact Number:
          <input
            type="text"
            name="name"
            defaultValue={food.ContactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </label>

        <br></br>
        <input type="submit" value="Submit" onClick={updateFood} />
      </form>
    </div>
  );
}

export default FoodEdit;
