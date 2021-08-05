import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import bilalAvatar from '../assets/bilal.png';
import gigiAvatar from '../assets/gigi.png';

const authContext = createContext();

const userApi = {
  'bilal':{
    user: 'Bilal Hasson',
    AvatarImage: bilalAvatar
  },
  'gigi': {
    user: 'Genevieve Hasson',
    AvatarImage: gigiAvatar
  },
  'n' : {
    user: undefined,
    AvatarImage: undefined
  }
}

function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    );
}

export default ProvideAuth;

export function useAuth() {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(userApi['bilal']);
  
    const signin = cb => {
      return fakeAuth.signin(() => {
        setUser("user");
        cb();
      });
    };
  
    const signout = cb => {
      return fakeAuth.signout(() => {
        setUser(null);
        cb();
      });
    };
  
    return {
      ...user,
      signin,
      signout
    };
}

const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
};

export function AuthButton() {
    let history = useHistory();
    let auth = useAuth();
  
    return auth.user ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            auth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
        <br/>
      </p>
    ) : (
      <p>You are not logged in.<br/></p>
    );
}
