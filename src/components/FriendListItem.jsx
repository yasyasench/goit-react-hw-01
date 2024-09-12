function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={`friend-list-item ${isOnline ? 'online' : 'offline'}`}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={`status ${isOnline ? 'online' : 'offline'}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}

export default FriendListItem;