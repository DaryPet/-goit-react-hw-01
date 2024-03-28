import styles from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({
  friend: { avatar, name, isOnline, id },
}) {
  const statusClassNames = clsx(
    styles.frienStatus,
    isOnline ? styles.isOnline : styles.isOffline
  );
  return (
    <div className={styles.card}>
      <img
        className={styles.friendImg}
        src={avatar}
        alt="Friend avatar"
        width="48"
      />
      <p className={styles.friendName}>{name}</p>
      <p className={statusClassNames}> {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
