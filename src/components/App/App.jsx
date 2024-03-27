// import React from 'react';
import Profile from "../Profile/Profile";
import userData from "../../userData.json";

export default function App() {
  return (
    <>
      <Profile data={userData} />
    </>
  );
}
