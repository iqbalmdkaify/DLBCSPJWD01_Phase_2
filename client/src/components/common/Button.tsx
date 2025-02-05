type TButtonProps = {
  text: string;
  type: "Primary" | "Secondary";
  customStyle: string;
  action?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, type, customStyle, action }: TButtonProps) => {

  return <button
    className={`text-navLink leading-navLink tracking-navLink ${customStyle} ${type == "Primary" ? '' : '_btn-secondary'}`}
    onClick={action}
  >{text}</button>
};

export default Button;
