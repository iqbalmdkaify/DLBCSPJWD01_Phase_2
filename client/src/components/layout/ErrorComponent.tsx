import React from 'react'

type TErrorComponentProps = {
  message: string;
  type: "Error" | "Warning" | "Success" | "Info";
}

const ErrorComponent = ({ message, type }: TErrorComponentProps) => {
  const getColor = (type: string) => {
    switch (type) {
      case "Error":
        return "yellow";
      case "Success":
        return "green";
      case "Info":
        return "blue";
      case "Warning":
        return "red"
    }
  }
  return (
    <div className='error-component' style={{ color: getColor(type) }}>
      <p>{message}</p>
    </div>
  )
}

export default ErrorComponent