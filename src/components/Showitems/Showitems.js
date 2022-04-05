import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { checkboxContext } from '../Make/Make';
const useStyles = createUseStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: 50,
    '& li': {
      width: 100
    }
  },
  wrapper: {
    border: 'black solid 1px',
    display: 'flex',
    
    flexDirection:'column',
    padding: 25,
    backgroundColor:'#e98686'
  }
});

export default function Showitems() {
  const classes = useStyles();
  const { x } = useContext(checkboxContext);
  return(
    
    <div className={classes.wrapper}>
      <h2>Selected Items:</h2>
      <ul className={classes.list}>
      {x.map(({ name, id }) => (<li key={id}>{name}</li>))}
      </ul>
    </div>
  )
}
