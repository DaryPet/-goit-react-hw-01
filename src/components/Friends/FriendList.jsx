import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((item) => (
        <li key={item.id}>
          <FriendListItem friend={item} />
        </li>
      ))}
    </ul>
  );
}
