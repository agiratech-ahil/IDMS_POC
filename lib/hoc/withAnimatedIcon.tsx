import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

export interface AnimatedIconButtonProps extends ButtonProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const withAnimatedIcon = (BaseButton: typeof Button) => {
  const AnimatedIconButton: React.FC<AnimatedIconButtonProps> = ({ icon, children, className, ...props }) => {
    return (
      <>
        <BaseButton 
          icon={icon} 
          className={`icon-button ${className || ''}`} 
          {...props}
        >
          {children && <span className="button-label">{children}</span>}
        </BaseButton>
        <style jsx>{`
          .icon-button {
            display: flex;
            align-items: center;
            overflow: hidden;
            max-width: 32px;
            padding: 4px 15px 4px 24px;
            transition: all 0.4s ease-in-out;
          }
          .icon-button:hover {
            max-width: 200px;
            padding: 4px 15px;
          }
          .button-label {
            opacity: 0;
            max-width: 0;
            white-space: nowrap;
            transition: opacity 0.4s ease-in-out, max-width 0.4s ease-in-out, margin-left 0.4s ease-in-out;
          }
          .icon-button:hover .button-label {
            opacity: 1;
            max-width: 160px;
            margin-left: 8px;
          }
        `}</style>
      </>
    );
  };

  return AnimatedIconButton;
};

export default withAnimatedIcon;
