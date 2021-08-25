import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import bilalAvatar from '../assets/bilal.png';
import gigiAvatar from '../assets/gigi.png';

const authContext = createContext();

const userApi = {
  'bilal':{
    user: 'Bilal Hasson',
    displayName: 'Bilal Hasson 🙂',
    AvatarImage: bilalAvatar,
    poems: 13, // Count of poems added
    visits: 3, // Count of site visits
    permissions: ['genevieve']
  },
  'gigi': {
    user: 'Genevieve Hasson',
    AvatarImage: gigiAvatar,
    permissions: ['genevieve']
  },
  'n' : {
    user: undefined,
    AvatarImage: undefined,
    permissions: []
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
    // userApi['bilal']
    // userApi['gigi']
    const [user, setUser] = useState(userApi['gigi']);
  
    const signin = cb => {
      return fakeAuth.signin(() => {
        setUser(userApi['bilal']);
        cb();
      });
    };
  
    const signout = cb => {
      return fakeAuth.signout(() => {
        setUser(userApi['n']);
        cb();
      });
    };

    const signup = cb => {
      return fakeAuth.signout(() => {
        setUser(userApi['bilal']);
        cb();
      });
    };
  
    return {
      ...user,
      signin,
      signout,
      signup
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
    },
    signup(cb) {
      fakeAuth.isAuthenticated = true;
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
