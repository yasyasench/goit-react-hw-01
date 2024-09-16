import css from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.friendsLi}>
      <div className={css.friendItem}>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p className={isOnline ? css.online : css.offline}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </li>
  );
}

export default FriendListItem;