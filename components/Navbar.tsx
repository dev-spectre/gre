export default function Navbar() {
  return (
    <div className="backdrop-blur">
      <nav className="px-5 py-6 container mx-auto text-white flex justify-between">
        <a href="/" className="font-[900] text-2xl font-roboto">GRE NextEra</a>
        <ul className="flex gap-12 font-inter font-[600] text-xl">
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
        <a href="#" className="font-poppins rounded-md border border-white py-1 px-3">
          Login
        </a>
      </nav>
    </div>
  );
}
