import React from 'react'
import './style.css'



function Header() {

  function handleClick(e) {
    e.preventDefault()
  }

  return React.createElement(
    "div",
    { className: "wrap", onClick: handleClick },
    "something",
    React.createElement(
      "div",
      null,
      "something else"
    )
  )
}

export default Header