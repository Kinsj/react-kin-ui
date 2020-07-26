import React, {ButtonHTMLAttributes} from 'react';
import classes from '../helpers/classes';
import './button.scss';


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'normal' | 'important' | 'danger'
}

const Button: React.FC<Props> = (props) => {
  const {className, level, children, ...rest} = props;
  return (
    <button
      className={classes('gulu-button', `gulu-button-${level}`)}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  level: 'normal'
};

export default Button;