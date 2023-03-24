import React from 'react';
import './Heading.css'
interface HeadProps {
  text:string;
  backgroundColor?: string;
    // size?:string;
}

/**
 * Primary UI component for user interaction
 */
export const Heading = ({
  text,
  backgroundColor,
//   size="small",
  ...props
}: HeadProps) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <h1 className='h1'>{text}</h1>
    
  );
};
