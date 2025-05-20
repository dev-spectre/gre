import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 right-0 left-0 z-30 backdrop-blur">
      <nav className="container mx-auto flex justify-between px-5 py-6 text-white">
        <Link href="/" className="font-roboto text-2xl font-[900]">
          GRE NextEra
        </Link>
        <ul className="font-inter flex gap-12 text-2xl font-[600]">
          <li>
            <a href="#" className="underline hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#courses" className="hover:underline">
              Courses
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:underline">
              Testimonials
            </a>
          </li>
        </ul>
        <Link
          href="#"
          className="font-poppins rounded-md border border-white px-3 py-1 text-lg font-[400]"
        >
          Login
        </Link>
      </nav>
    </div>
  );
}
