import React, { useState, useEffect } from "react";
import axios from "axios";

function VehicleEdit() {
  const [VegicleCategory, setVegicleCategory] = useState("");
  const [VehicleModel, setVehicleModel] = useState("");
  const [NoOfDays, setNoOfDays] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contactnumber, setContactnumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [vehicle, setVehicle] = useState([]);

  const id = window.sessionStorage.getItem("VehicleID");

  useEffect(() => {
    axios.get(`http://localhost:3000/VehicleBooking/${id}`).then((response) => {
      //   console.log(response.data);
      setNoOfDays(response.data.NoOfDays);
      setFirstName(response.data.FirstName);
      setLastName(response.data.LastName);
      setEmail(response.data.EMail);
      setContactnumber(response.data.ContactNumber);
      setVehicle(response.data);
      console.log(response.data);
    });
  }, []);

  function updateVehicle() {
    axios
      .patch(`http://localhost:3000/VehicleBooking/${id}`, {
        VegicleCategory: VegicleCategory,
        VehicleModel: VehicleModel,
        NoOfDays: NoOfDays,
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Contactnumber: Contactnumber,
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
          VegicleCategory
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          VehicleModel
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          NoOfDays
          <input type="text" name="name" />
        </label>
        <br></br>

        <br></br>
        <label>
          First Name:
          <input
            type="text"
            name="name"
            defaultValue={vehicle.FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Last Name:
          <input
            type="text"
            name="name"
            defaultValue={vehicle.LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Contact Number:
          <input
            type="text"
            name="name"
            defaultValue={vehicle.Contactnumber}
            onChange={(e) => setContactnumber(e.target.value)}
          />
        </label>

        <br></br>
        <label>
          Email:
          <input
            type="text"
            name="name"
            defaultValue={vehicle.Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <br></br>
        <input type="submit" value="Submit" onClick={updateVehicle} />
      </form>
    </div>
  );
}

export default VehicleEdit;
