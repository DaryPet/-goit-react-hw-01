import styles from "./Profile.module.css";

export default function Profile({
  data: {
    username,
    tag,
    avatar,
    location,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.profileInfo}>
        <img className={styles.profileImg} src={avatar} alt="User avatar" />
        <p className={styles.profileName}>{username}</p>
        <p className={styles.profileTag}>@{tag}</p>
        <p className={styles.profileLocation}>{location}</p>
      </div>
      <ul className={styles.profileList}>
        <li className={styles.profiItems}>
          <span className={styles.listDiscr}>Followers </span>
          <span className={styles.listCount}>{followers}</span>
        </li>
        <li className={styles.profiItems}>
          <span className={styles.listDiscr}>Views </span>
          <span className={styles.listCount}>{views}</span>
        </li>
        <li className={styles.profiItems}>
          <span className={styles.listDiscr}>Likes </span>
          <span className={styles.listCount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
