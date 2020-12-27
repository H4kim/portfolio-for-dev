import * as React from "react"

function Loader(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        background: "0 0",
      }}
      width={100}
      height={100}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      {...props}
    >
      <circle cx={30} cy={50} fill="#67db3d" r={20}>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="30;70;30"
          begin="-0.5s"
        />
      </circle>
      <circle cx={70} cy={50} fill="#ffdc0c" r={20}>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="30;70;30"
          begin="0s"
        />
      </circle>
      <circle cx={30} cy={50} fill="#67db3d" r={20}>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="30;70;30"
          begin="-0.5s"
        />
        <animate
          attributeName="fill-opacity"
          values="0;0;1;1"
          calcMode="discrete"
          keyTimes="0;0.499;0.5;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}

export default Loader