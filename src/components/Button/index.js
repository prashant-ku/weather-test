import React from 'react'
import './style.scss'

export default ({
  label,
  onClick,
  id,
}) => {
  return (
    <input
      id={id}
      type="button"
      value={label}
      className="btn btn-blue"
      onClick={onClick}
    />
  )
}
