import React from "react";

function UserDetails({ user, onClose }) {
  return (
    <div>
      <h2>User Details</h2>
      <p>Full Name: {user.fullName}</p>
      <p>Email: {user.email}</p>
      <p>Phone Number: {user.phoneNumber}</p>
      <p>Bio: {user.bio}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default UserDetails;