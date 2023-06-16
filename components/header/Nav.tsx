import Link from "next/link";

const Nav = () => {
  return (
    <nav className="hidden lg:flex gap-9 uppercase text-[0.8rem] font-[600] tracking-[0.2em] items-center translate-x-[4rem]">
      <Link href={"/"} className="hover:text-[#D87D4A] duration-150">
        Home
      </Link>
      <Link href={"/"} className="hover:text-[#D87D4A] duration-150">
        Headphones
      </Link>
      <Link href={"/"} className="hover:text-[#D87D4A] duration-150">
        Speakers
      </Link>
      <Link href={"/"} className="hover:text-[#D87D4A] duration-150">
        Earphones
      </Link>
    </nav>
  );
};

export default Nav;
