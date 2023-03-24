import { Link } from '@mui/material';
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
export const Links = ({
  text,
  href,
  backgroundColor,
//   size="small",
  ...props
}: LinkProps) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <Link href={href} variant="body1" underline="none">{text}</Link>
      // <a href={href} >{text}</a>
  );
};
