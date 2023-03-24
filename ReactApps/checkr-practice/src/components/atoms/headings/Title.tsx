import React from 'react';
import './Heading.css'
interface HeadProps {
  text:string;
  backgroundColor?: string;
    // size?:string;
}

export const Title = ({
  text,
  backgroundColor,
//   size="small",
  ...props
}: HeadProps) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <h5 className='h5'>{text}</h5>
    
  );
};