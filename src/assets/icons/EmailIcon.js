import * as React from "react"

function EmailIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="#67DB3D"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__icon prefix__icon-tabler prefix__icon-tabler-mail"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <rect x={3} y={5} width={18} height={14} rx={2} />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

export default EmailIcon
