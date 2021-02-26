import { createContext, useState, useEffect } from "react";
import firebase from "../firebase/Firebase.utils";
export const FirebaseAuthContext = createContext();
function AuthContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    firebase?.firebaseAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(currentUser.displayName);
      console.log(user.displayName);
    });
  }, []);
  return (
    <FirebaseAuthContext.Provider value={{ currentUser }}>
      {props.children}
    </FirebaseAuthContext.Provider>
  );
}
export default AuthContextProvider;