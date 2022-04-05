import React,{useState, useEffect} from 'react';
import SaladItem from '../SelectItem/SelectItem';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: [10, 50],
    justifyContent: 'center',
    flexDirection:'column',
  }
});
export default function AllItems() {
    const [ingredients, fetchUsers] = useState([])
    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res) => {
          fetchUsers(res)
        })
    }
    useEffect(() => {
      getData()
    }, [])
  const classes = useStyles();
  return(
    <div className={classes.wrapper}>
      {
        ingredients.map(ingredients => (
          <SaladItem
            key={ingredients.name}
            name={ingredients.name}
          />
        ))
      }
    </div>
  )
}