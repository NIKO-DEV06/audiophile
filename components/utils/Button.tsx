interface ButtonProps {
  color: string;
  hover: string;
  children: React.ReactNode;
}

const Button = ({ color, hover, children }: ButtonProps) => {
  return (
    <button
      className={`${color} ${hover} duration-150 py-[1rem] px-[2.3rem] font-bold md:font-semibold tracking-wider md:tracking-widest mt-[1rem] md:mt-[1.5rem] md:text-[0.8rem] uppercase text-white `}
    >
      {children}
    </button>
  );
};

export default Button;
