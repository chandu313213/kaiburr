import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateServer.css";

const CreateServer = () => {
  const [info, setInfo] = useState({
    name: "",
    id: 0,
    language: "",
    framework: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await axios.post("http://localhost:8080/put", info);
    if (data.status === 200) {
      navigate("/");
    }
  };
  return (
    <div class="container">
      <form
        action=""
        method="post"
        class="sign-form"
        id="sign-form"
        autocomplete="on"
        onSubmit={handleSubmit}
      >
        <h1 class="form-title">Create Server</h1>

        <input
          type="text"
          name="id"
          id="id"
          placeholder="Id"
          autofocus
          required
          onChange={(e) => setInfo({ ...info, id: e.target.value })}
        />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Name"
          autofocus
          required
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
        />
        <input
          type="text"
          name="language"
          id="language"
          placeholder="language"
          autofocus
          required
          onChange={(e) => setInfo({ ...info, language: e.target.value })}
        />
        <input
          type="text"
          name="framework"
          id="framework"
          placeholder="Framework"
          autofocus
          required
          onChange={(e) => setInfo({ ...info, framework: e.target.value })}
        />

        <input type="submit" value="Create" id="submit" />
      </form>
    </div>
  );
};

export default CreateServer;
