import React, { useReducer,useContext,useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { checkboxContext } from '../Make/Make';
const useStyles = createUseStyles({
  add: {
    width:20,
    height:20,
    marginTop:20
  },
  wrapper: {
    display:'flex',
  }
});

// const reducer = key => key + 1;
export default function SelectItem({ name }) {
  const classes = useStyles();
  const { setx } = useContext(checkboxContext)
  const [checked, setChecked] = useState([]);
  
  function update(event) {
    var updatedList = [...checked];
    if (event.target.checked) {
      setx({ name })
     } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
     }
     setChecked(updatedList);
  };
  return(
    <div className={classes.wrapper}>
        <h3>
          {name}
        </h3>
          <input
          
              type="checkbox"
              className ={classes.add}
              onClick={update}
            />
    </div>
    
  )
}

SelectItem.propTypes = {
  name: PropTypes.string.isRequired,
}