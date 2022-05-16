import React, { useState, useEffect } from "react";
import axios from "axios";

function AgentEdit() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [agent, setAgent] = useState([]);

  const id = window.sessionStorage.getItem("AgentID");

  useEffect(() => {
    axios.get(`http://localhost:3000/AgentBooking/${id}`).then((response) => {
      //   console.log(response.data);
      setFirstName(response.data.FirstName);
      setLastName(response.data.LastName);
      setEmail(response.data.EMail);
      setContactNumber(response.data.ContactNumber);
      setAgent(response.data);
      console.log(response.data);
    });
  }, []);

  function updateAgent() {
    axios
      .patch(`http://localhost:3000/AgentBooking/${id}`, {
        FirstName: FirstName,
        LastName: LastName,
        EMail: email,
        ContactNumber: ContactNumber,
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
          Agent First Name:
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          Agent Last Name:
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          First Name:
          <input
            type="text"
            name="name"
            defaultValue={agent.FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Last Name:
          <input
            type="text"
            name="name"
            defaultValue={agent.LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Contact Number:
          <input
            type="text"
            name="name"
            defaultValue={agent.ContactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Email:
          <input
            type="text"
            name="name"
            defplaaultValue={agent.EMail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br></br>
        <input type="submit" value="Submit" onClick={updateAgent} />
      </form>
    </div>
  );
}

export default AgentEdit;
