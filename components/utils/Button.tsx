interface ButtonProps {
  color: string;
  hover: string;
  children: React.ReactNode;
}

const Button = ({ color, hover, children }: ButtonProps) => {
  return (
    <button
      className={`${color} ${hover} duration-150 py-[1rem] px-[2.3rem] font-semibold tracking-wider md:tracking-widest mt-[1rem] md:mt-[1.5rem] text-[0.85rem] uppercase`}
    >
      {children}
    </button>
  );
};

export default Button;
