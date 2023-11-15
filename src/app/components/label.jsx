import React from 'react'

export default function Label({target,label}) {
  return (
    <>
        <label className="contact-label" for={target}>{label}</label>
    </>
  )
}
