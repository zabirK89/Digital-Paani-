import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import RegisteredUsersList from "./RegisteredUsersList";
import UserDetails from "./UserDetails";

function App() {
  const [users, setUsers] = useState([]);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleRegister = (formData) => {
    const timestamp = new Date().toLocaleString();
    const newUser = { ...formData, timestamp };
    setUsers([...users, newUser]);
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setShowUserDetails(true);
  };

  const handleCloseDetails = () => {
    setShowUserDetails(false);
    setSelectedUser(null);
  };

  return (
    <div className="App">
      <RegistrationForm onRegister={handleRegister} />
      <br/>
      <RegisteredUsersList users={users} onViewDetails={handleViewDetails} />
      {showUserDetails && (
        <UserDetails user={selectedUser} onClose={handleCloseDetails} />
      )}
    </div>
  );
}

export default App;