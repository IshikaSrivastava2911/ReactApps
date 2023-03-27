import { Button } from '@mui/material';
import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  color?:string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  variant?:"text" | "outlined" | "contained" | undefined;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Buttons = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  variant,
  ...props
}: ButtonProps) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    // <button
    //   type="button"
    // >
    //   {label}
    // </button>
    <Button variant={variant} onClick={() => {alert('Signed In');}} id="btn">{label}</Button>
  );
};
