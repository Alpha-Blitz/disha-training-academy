"use client";

interface EnquireButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function EnquireButton({ className, children }: EnquireButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("openEnquireModal"));
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
