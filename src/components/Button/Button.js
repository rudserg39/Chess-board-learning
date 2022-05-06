import './style.css';

const Button = ({ text, onClick }) => <span className="button" onClick={onClick}>{text}</span>;

export default Button;
