import React, { useEffect, useState } from "react";
import axios from "axios";
import "./table.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [servers, setServers] = useState([]);
  useEffect(() => {
    const getAllServers = async () => {
      const { data } = await axios.get("http://localhost:8080/");
      console.log(data);
      setServers(data);
    };
    getAllServers();
  }, []);
  console.log(servers);
  const handleDelete = async (id) => {
    console.log(id, "ll");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.delete(`http://localhost:8080/delete/${id}`, config);
    const { data } = await axios.get("http://localhost:8080/");
    setServers(data);
  };
  return (
    <div className="home">
      <Link to="/create">
        <button className="create_button">Create Server</button>
      </Link>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Language</th>
          <th>Framework</th>
          <th>Action</th>
        </tr>

        {servers.map((s) => (
          <tr>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.language}</td>
            <td>{s.framework}</td>
            <td onClick={() => handleDelete(s.id)}>Delete</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default HomePage;
