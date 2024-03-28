import styles from "./FriendListItem.module.css";

export default function FriendListItem({
  friend: { avatar, name, isOnline, id },
}) {
  return (
    <div className={styles.card}>
      <img
        className={styles.friendImg}
        src={avatar}
        alt="Friend avatar"
        width="48"
      />
      <p className={styles.friendName}>{name}</p>
      <p className={styles.friendStatus}>
        {isOnline ? (
          <p className={styles.online}>Online</p>
        ) : (
          <p className={styles.offline}>Offline</p>
        )}
      </p>
    </div>
  );
}
