import React from 'react';

const UserContext = React.createContext({})
export function UserProvider({children}) {
  const [user, setUser] = React.useState({});
  const value = {user, setUser}
  return(<UserContext.Provider value={value}>{children}</UserContext.Provider>)
}

export function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context;
  
}
