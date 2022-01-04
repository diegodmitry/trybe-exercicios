import React from 'react';
import './button.css';

class Button extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const { action, onClick, className, disabled, children } = this.props;
    return <button 
      onClick={ onClick } 
      className={`button-text ${className}` } 
      disabled={ disabled }>{action} { children }</button>;
  }
}

export default Button;
