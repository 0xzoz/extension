import React, { useState, ReactElement } from "react"
import classNames from "classnames"

export default function SharedToggleButton(): ReactElement {
  const [isActive, setIsActive] = useState(false)

  return (
    <button
      type="button"
      className={classNames("container", { is_active: isActive })}
      onClick={() => {
        setIsActive(!isActive)
      }}
    >
      <div className="bulb" />
      <style jsx>
        {`
          .container {
            width: 40px;
            height: 24px;
            border-radius: 20px;
            background-color: var(--green-80);
            box-sizing: border-box;
            padding: 4px;
            cursor: pointer;
            display: flex;
          }
          .bulb {
            width: 16px;
            height: 16px;
            border-radius: 20px;
            background-color: var(--green-40);
            transition: 0.2s ease-in-out;
          }
          .is_active .bulb {
            transform: translateX(16px);
            background-color: var(--trophy-gold);
          }
        `}
      </style>
    </button>
  )
}