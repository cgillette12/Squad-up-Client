import React from 'react'


export function Label({ className, ...props }) {
  return (
    <label className={className} {...props} />
  )
}

export const Input = ({ className, ...props }) => {
  return (
    <input className={className} type='text'{...props} />
  )
}

export function Required({ className, ...props }) {
  return (
    <span className={className} {...props}>
      &#42;
    </span>
  )
}

export function Textarea({ className, ...props }) {
  return (
    <textarea className={className} {...props} />
  )
}