import type { ButtonProps } from '../types';

function Button({
  type = 'button',
  text,
  onClick,
  disabled = false,
  className,
}: ButtonProps) {
  const buttonStyles = {
    button: 'border border-sky-500',
    reset: 'border',
    submit: 'border border-green-500',
  };

  onClick = () => {
    if (onClick) {
      alert(`${text} button clicked`);
    }
  };

  return (
    <button
      className={`py-2 rounded hover:cursor-pointer ${buttonStyles[type]} ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
