import React, { useState, useEffect } from "react";
import axios from "axios";

function EventEdit() {
  const [EventName, setEventName] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contactnumber, setContactnumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState([]);

  const id = window.sessionStorage.getItem("EventID");

  useEffect(() => {
    axios.get(`http://localhost:3000/EventBooking/${id}`).then((response) => {
      //   console.log(response.data);
      setFirstName(response.data.FirstName);
      setLastName(response.data.LastName);
      setEmail(response.data.EMail);
      setContactnumber(response.data.ContactNumber);
      setEvent(response.data);
      console.log(response.data);
    });
  }, []);

  function updateEvent() {
    axios
      .patch(`http://localhost:3000/EventBooking/${id}`, {
        EventName: EventName,
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
            defaultValue={event.FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Last Name:
          <input
            type="text"
            name="name"
            defaultValue={event.LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Contact Number:
          <input
            type="text"
            name="name"
            defaultValue={event.Contactnumber}
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
