import "./css/App.css";

import userData from "../src/userData.json";
import friends from "../src/friends.json";

import transactions from "../src/transactions.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";




const App = () => {
   return (
      <>
         <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            status={userData.status}
       />
       <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
      </>
   );
};

export default App
