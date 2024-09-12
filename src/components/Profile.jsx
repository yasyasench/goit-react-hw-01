function Profile({
  name, tag, location, image, status
}) {
  return (
    <div>
      <div>
        <img
          src={image}
          alt={name}
        />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>Followers: {status.followers || 0}</li>
        <li>Views: {status.views || 0}</li>
        <li>Likes: {status.likes || 0}</li>
      </ul>
    </div>
  );
}

export default Profile;
