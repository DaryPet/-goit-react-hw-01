import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map((item) => (
        <li key={item.id}>
          <FriendListItem friend={item} />
        </li>
      ))}
    </ul>
  );
}
