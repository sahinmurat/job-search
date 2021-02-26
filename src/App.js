// import './App.css';
// import AppRouter from './router/Router'
// import { createContext, useState, useEffect } from "react";
// import firebase from './firebase/Firebase.utils'

// export const AuthContext = createContext();

// function App() {
//   const [user , setUser]  = useState('')

  
//   useEffect(() => {
//     firebase?.firebaseAuth.onAuthStateChanged((user) => {
//       setUser(user.displayName);
//     });
//   }, [user]);

//   return (
//     <AuthContext.Provider value={{ user }} className="App">
//       <AppRouter />
//     </AuthContext.Provider>
//   );
// }

// export default App;

import "./App.css";
import AppRouter from "./router/Router";
import AuthContextProvider from "./context/AuthContext";
function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}
export default App;
