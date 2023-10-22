import React from "react";

function RegisteredUsersList({ users, onViewDetails }) {
  const listStyle = {
    backgroundColor: "white",
    border: "1px solid #e1e1e1",
    borderRadius: "8px",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    padding: "20px",
  };

  const itemStyle = {
    borderBottom: "1px solid #e1e1e1",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
    fontWeight: "bold",
  };

  return (
    <div style={listStyle}>
      <h2 style={headingStyle}>Registered Users for the Event</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user, index) => (
          <li key={index} style={itemStyle}>
            <div>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>{user.fullName}</span>
              <br />
              <span style={{ color: "#555" }}>{user.timestamp}</span>
            </div>
            <button style={buttonStyle} onClick={() => onViewDetails(user)}>
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RegisteredUsersList;