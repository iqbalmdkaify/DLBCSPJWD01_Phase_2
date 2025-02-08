type ButtonProps = {
  text: string;
  action?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, action }: ButtonProps) => {

  // TODO: Add spinner when onClick event is triggerred
  return <button
    className="bg-dark text-white py-5 px-8 text-base font-medium hover:opacity-80"
    onClick={action}
  >
    {text}
  </button>
};

export default Button;
