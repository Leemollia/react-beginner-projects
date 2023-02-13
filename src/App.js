import { useEffect, useState } from 'react';
import { Success } from './components/Success';
import { Users } from './components/Users';
import './index.scss';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [invited, setInvited] = useState(false);

  const result = useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(result => {
        setIsLoaded(true);
        setUsers(result.data);
      })
      .catch(error => {
        console.error(error);
      })
  }, [])

  return (
    <div className="App">
      {invited ?
        <Success
        count={selectedUsers.length}
        setInvited={setInvited}
        setSelectedUsers={setSelectedUsers} />
        :
        <Users
        key={users.id + users.email}
        users={users}
        isLoaded={isLoaded}
        setInvited={setInvited} 
        selectedUsers={selectedUsers}
        setSelectedUsers={setSelectedUsers} />
        }
    </div>
  );
}

export default App;
