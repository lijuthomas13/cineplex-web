import React, { type ReactNode } from "react";
import "./badge.css"

type BadgeVariant = "primary" | "secondary" | "danger";

interface BadgeProps {
  variant?: BadgeVariant;
  className?: string;
  id?: any;
  children: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  id,
  variant = "primary",
  className,
  children,
}) => {
  return (
    <span key={id} className={`cineplex_badge ${variant} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
