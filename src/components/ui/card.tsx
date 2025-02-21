import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string; // ✅ 允許 className
}

export function Card({ children, className = "" }: CardProps) {
  return <div className={`border p-4 shadow-md rounded ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`p-2 ${className}`}>{children}</div>;
}
