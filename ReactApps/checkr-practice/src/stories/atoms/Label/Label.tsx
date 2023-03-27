import React from 'react';

interface LabelProps {
  label:string;
  backgroundColor?: string;
    // size?:string;
}

/**
 * Primary UI component for user interaction
 */
export const Label = ({
  label,
  backgroundColor,
//   size="small",
  ...props
}: LabelProps) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (

    <label >{label}</label>
  );
};
