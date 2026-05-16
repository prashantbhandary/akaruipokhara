type RevealProps = {
  children: React.ReactNode;
  delay?: number;
};

export function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <div
      className="reveal-fade"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
