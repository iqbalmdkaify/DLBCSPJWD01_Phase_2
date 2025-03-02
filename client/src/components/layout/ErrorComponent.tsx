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
    <div className='block' style={{ color: getColor(type) }}>
      <p className="text-xs">{message}</p>
    </div>
  )
}

export default ErrorComponent