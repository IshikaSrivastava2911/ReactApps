import React from 'react';

interface LinkProps {
  text:string;
  backgroundColor?: string;
  href: string;
    // size?:string;
}

/**
 * Primary UI component for user interaction
 */
export const Link = ({
  text,
  href,
  backgroundColor,
//   size="small",
  ...props
}: LinkProps) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (

    <a href={href} >{text}</a>
  );
};
