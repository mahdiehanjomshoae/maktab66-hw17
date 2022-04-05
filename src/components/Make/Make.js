import React, {useReducer, createContext,useContext } from 'react';
import { createUseStyles } from 'react-jss';
import AllItems from '../AllItems/AllItems';
import Showitems from '../Showitems/Showitems';
import UserContext from '../User/User';
const useStyles = createUseStyles({
  wrapper: {
    textAlign: 'center',
    backgroundColor:'#0dd8d8'
  }
});
export const checkboxContext = createContext();
function reducer(state, item) {
    return [...state, item]
  }
export default function Make() {
  const classes = useStyles();
  const [x, setx] = useReducer(reducer, []);
  const user = useContext(UserContext);
  return(
    <checkboxContext.Provider value={{ x, setx}}>
      <h1 className={classes.wrapper}>
          {user.name}
      </h1>
      <AllItems />
      <Showitems />
      </checkboxContext.Provider>
  )
}