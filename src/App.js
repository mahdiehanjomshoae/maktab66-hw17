import React from 'react';
import Make from './components/Make/Make';
import UserContext from './components/User/User';

const user = {
  name: 'ALL Items :',
}
function App() {
  return (
    <UserContext.Provider value={user}>
      <Make />
      </UserContext.Provider>
  );
}

export default App;