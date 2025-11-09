import React, { type ReactNode } from "react";
import "./badge.css"

type BadgeVariant = "primary" | "secondary";

interface BadgeProps {
  variant?: BadgeVariant;
  className?: string;
  key?: any;
  children: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  key,
  variant = "primary",
  className,
  children,
}) => {
  return (
    <span key={key} className={`cineplex_badge ${variant} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
