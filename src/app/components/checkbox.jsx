import React from 'react'

export default function Checkbox(props) {
  return (
    <>
        <input className="accent-lred" type="checkbox" name="remember" id={props.id}/>
    </>
  )
}
