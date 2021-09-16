import React from 'react';
import './button.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large' | 'extra small';
  /**
   * Button contents
   */
  label: string;
   /**
   * Button font size
   */
  fontSize?: string;
  /**
   * Optional click handler
   */
  boxShadow?:string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  fontSize,
  boxShadow = '#1ea7fd 0px 0px 0px 1px inset',
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor,boxShadow }}
      {...props}
    >
      <div style={{fontSize}}>{label}</div>
    </button>
  );
};
