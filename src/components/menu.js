import React from "react"
import Link from "gatsby-link"

const Menu = () => (
  <div
    style={{
      background: "#f4f4f4",
      paddingTop: "0",
      height: "2rem",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link
          to="/"
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/portfolio"
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
        >
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Menu
