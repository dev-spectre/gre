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
            <Link href="#" className="underline hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="#courses" className="hover:underline">
              Courses
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="hover:underline">
              Testimonials
            </Link>
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
