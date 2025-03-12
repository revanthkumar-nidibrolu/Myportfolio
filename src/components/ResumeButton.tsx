import React from 'react';
import { cn } from "@/lib/utils";
import { FileDown } from "lucide-react";
import { useState } from "react";

interface ResumeButtonProps {
  className?: string;
  href?: string;
}

const ResumeButton = ({ className = "" }: ResumeButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href="https://drive.google.com/file/d/1KVIObhtBu0QttklibnmwGjwOfRD1Jp8e/view"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 px-6 py-3 font-medium text-white bg-primary rounded-full transition-all duration-300",
        "hover:shadow-lg hover:shadow-primary/20",
        isHovered ? "gap-3" : "gap-2",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>Resume</span>
      <FileDown className={`w-5 h-5 transition-all duration-300 ${isHovered ? 'translate-y-0.5' : ''}`} />
    </a>
  );
};

export default ResumeButton;
