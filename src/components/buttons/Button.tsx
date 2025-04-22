import "../../styles/button.css";

interface ButtonProps {
  width?: number,
  height?: number,
  minus?: boolean,
  onClick:() => void
}


const Button = ({width, height, minus=false, onClick}: ButtonProps) => {
  return <button className="button" onClick={onClick} style={{width, height, backgroundColor: minus ? 'red' : 'green'}}>{minus ? '-' : '+'}</button>;
};

export default Button;
