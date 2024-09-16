import css from "./Profile.module.css";

function Profile({
  name, tag, location, image, status
}) {
  return (
    <div className={css.main}>
      <div className={css.profileInfo}>
        <img className={css.image}
          src={image}
          alt={name}
        />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.profileList}>
         <li className={css.profileSubLi}>
          <span>Followers</span>
          <span>{status.followers}</span>
        </li>

        <li className={css.profileSubLi}>
          <span>Views</span>
          <span>{status.views}</span>
        </li>

        <li className={css.profileSubLi}>
          <span>Likes</span>
          <span>{status.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
