
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
  glow?: boolean;
  glowColor?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
}

const Card = ({ 
  children, 
  className, 
  glass = false, 
  hover = true, 
  glow = false,
  glowColor = "primary",
  size = "md",
  ...props 
}: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300",
        size === "sm" ? "p-4" : size === "md" ? "p-6" : "p-8",
        glass ? "glass" : "bg-card text-card-foreground",
        hover ? "hover:shadow-lg hover:-translate-y-1" : "",
        glow ? `shadow-lg ${
          glowColor === "primary" 
            ? "shadow-primary/20 hover:shadow-primary/40" 
            : glowColor === "secondary" 
              ? "shadow-secondary/20 hover:shadow-secondary/40" 
              : "shadow-accent/20 hover:shadow-accent/40"
        }` : "",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
