export default function FriendListItem({
  friend: { avatar, name, isOnline, id },
}) {
  return (
    <div>
      <img src={avatar} alt="Friend avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
}
