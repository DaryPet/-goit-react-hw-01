import styles from "./App.module.css";
import Profile from "../Profile/Profile";
import FriendList from "../Friends/FriendList";
import userData from "../userData.json";
import friends from "../friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import items from "../ transactions.json";

export default function App() {
  return (
    <div className={styles.container}>
      <Profile data={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
}
