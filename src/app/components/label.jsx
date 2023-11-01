import React from 'react'

export default function Label(props) {
  return (
    <>
        <label className="contact-label" for={props.target}>{props.label}</label>
    </>
  )
}
