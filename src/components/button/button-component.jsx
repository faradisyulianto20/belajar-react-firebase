const BUTTON_TYPE_CLASSES = {
  red: 'btn-secondary',
  green: 'btn-accent',
  yellow: 'btn-warning',
};

const Button = ({ children, buttonType = 'green', type = 'button', className = '', ...otherProps }) => {
  const buttonClass = BUTTON_TYPE_CLASSES[buttonType] || '';

  return (
    <button
      type={type}
      className={`btn btn-soft ${buttonClass} ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;