// import React from 'react';
import Profile from "../Profile/Profile";
import FriendList from "../Friends/FriendList";
import userData from "../userData.json";
import friends from "../friends.json";

export default function App() {
  return (
    <>
      <Profile data={userData} />
      <FriendList friends={friends} />
    </>
  );
}
