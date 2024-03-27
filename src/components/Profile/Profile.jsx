// //
// import userData from "../../userData.json";

// const userData = {
//   username: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// export default function Profile(props) {
//   return (
//     <div>
//       <div>
//         <img src={userData.avatar} alt="User avatar" />
//         <p>{props.amount}</p>
//         <p>{userData.tag}</p>
//         <p>{userData.location}</p>
//       </div>
//     </div>
//   );
// }
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
    <div>
      <div>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
