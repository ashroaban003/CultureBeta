import { createContext, useEffect, useReducer } from "react";
//usereducer - store and update object
//useEffect--render page
//createContext -- create NEW context,have consumer and provider
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,  //if previously login
    error: null,
};

export const AuthContext = createContext(INITIAL_STATE);
//creating new context
const AuthReducer = (state,action)=>{  //return state
    switch(action.type){
        case "LOGIN_START":
            return{
                user:null,
                error:null,
            };
        case "LOGIN_SUCCESS":
            if(action.payload==="Incorrect email" || action.payload==="login failed"){
                return {
                  user: null,
                  error: action.payload,
                };
              }
              else{
                return {
                  user: action.payload,
                  error: null,
                };
              };
        case "LOGIN_FAILED":
            return{
                user:null,
                error:action.payload,
            } 
        case "LOGOUT":
            return{
                user:null,
                error:null,
            }    
        default: return state;     

    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);  //intially state wil hv intial_state and when dispatch
    //dispatch triggers authreducer qwhich returns state that updates state function
  
    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);
  
    return (
      <AuthContext.Provider
        value={{
          user: state.user,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
}