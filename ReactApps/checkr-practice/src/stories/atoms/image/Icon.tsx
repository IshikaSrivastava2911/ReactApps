import React from 'react';
import './Icon.css'

interface ImgProps{
    src?: string;
    alt?:string;
}
/**
 * Primary UI component for user interaction
 */
export const Icon = (
    {
        src,
        alt
    }: ImgProps
) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <img src={src} alt={alt}></img>
    
  );
};
