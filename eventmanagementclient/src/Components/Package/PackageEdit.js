import React, { useState, useEffect } from "react";
import axios from "axios";

function EventEdit() {
  const [FirstName, setFirstName] = useState("");
  const [PackageName, setPackageName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Contactnumber, setContactnumber] = useState("");
  const [Email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [packagee, setPackage] = useState([]);

  const id = window.sessionStorage.getItem("PackageID");

  useEffect(() => {
    axios.get(`http://localhost:3000/PackageBooking/${id}`).then((response) => {
      //   console.log(response.data);
      setFirstName(response.data.FirstName);
      setLastName(response.data.LastName);
      setEmail(response.data.EMail);
      setContactnumber(response.data.ContactNumber);
      setPackage(response.data);
      console.log(response.data);
    });
  }, []);

  function updateEvent() {
    axios
      .patch(`http://localhost:3000/PackageBooking/${id}`, {
        PackageName: PackageName,
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
          Event Name:
          <input type="text" name="name" />
        </label>
        <br></br>

        <br></br>
        <label>
          First Name:
          <input
            type="text"
            name="name"
            defaultValue={packagee.FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Last Name:
          <input
            type="text"
            name="name"
            defaultValue={packagee.LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Email:
          <input
            type="text"
            name="name"
            defaultValue={packagee.Email}
            onChange={(e) => setContactnumber(e.target.value)}
          />
        </label>
        <label>
          Contact Number:
          <input
            type="text"
            name="name"
            defaultValue={packagee.Contactnumber}
            onChange={(e) => setContactnumber(e.target.value)}
          />
        </label>

        <br></br>
        <input type="submit" value="Submit" onClick={updateEvent} />
      </form>
    </div>
  );
}

export default EventEdit;
