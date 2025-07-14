const BUTTON_TYPE_CLASSES = {
  red: 'btn-secondary',
  green: 'btn-accent',
  yellow: 'btn-warning',
};

const ACTIVE_STYLE_CLASSES = {
  red: 'bg-secondary text-white border-secondary',
  green: 'bg-accent text-white border-accent',
  yellow: 'bg-warning text-white border-warning',
};

const Button = ({
  children,
  buttonType = 'green',
  type = 'button',
  isActive = false,
  className = '',
  ...otherProps
}) => {
  const buttonClass = BUTTON_TYPE_CLASSES[buttonType] || '';
  const activeStyle = isActive
    ? ACTIVE_STYLE_CLASSES[buttonType] || ''
    : 'btn-outline';

  return (
    <button
      type={type}
      className={`btn ${buttonClass} ${activeStyle} ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
