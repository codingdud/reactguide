import React from 'react'
import classes from './Item.module.css'
export const Item:React.FC<{text:string,onRemove:()=>void}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemove}>{props.text}</li>
  )
}
