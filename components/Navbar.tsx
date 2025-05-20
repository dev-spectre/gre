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
          href="/dashboard"
          className="font-poppins rounded-md border border-white px-3 py-1 text-lg font-[400]"
        >
          Login
        </Link>
      </nav>
    </div>
  );
}

export function FooterNav() {
  return (
    <div className="bg-gradient-to-b from-[#0f2247] to-[#0B172D] pt-20">
      <footer className="bg-black/15 px-36 pt-13 text-white backdrop:blur">
        <div className="flex items-center justify-between border-b border-b-white pb-8">
          <Link href="/" className="font-poppins text-2xl font-[400]">
            GRE NextEra
          </Link>
          <ul className="flex gap-8">
            <li>
              <a href="#">
                <img src="/icons/facebook.svg" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icons/instagram.svg" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icons/twitter.svg" alt="X (Twitter)" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icons/youtube.svg" alt="Youtube" />
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4.5 grid grid-cols-2 grid-rows-2 gap-7 pb-24">
          <div>
            <h4 className="font-inter text-xl font-[500] uppercase">Company</h4>
            <ul className="font-poppins flex gap-6 text-lg font-[400] text-[#A19FBA]">
              <li>
                <a href={"#"}>Home</a>
              </li>
              <li>
                <a href={"#courses"}>Courses</a>
              </li>
              <li>
                <a href={"#about"}>About Us</a>
              </li>
              <li>
                <a href={"#testimonials"}>Testimonials</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-inter text-xl font-[500]">Mail</h4>
            <p className="text-xl text-[#A19FBA]">contact@gre.com</p>
          </div>
          <div>
            <h4 className="font-inter text-xl font-[500] uppercase">
              Important Links
            </h4>
            <ul className="font-poppins flex gap-6 text-lg font-[400] text-[#A19FBA]">
              <li>
                <Link href="#">Faq's</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-inter text-xl font-[500]">Phone</h4>
            <p className="font-poppins text-xl font-[400] text-[#A19FBA]">
              +91 - 9022 821 921
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function Sidebar() {
  return (
    <>
      <aside className="group border-r border-r-[#E5E5E5] row-span-2 inline-block min-h-[100lvh] min-w-24 bg-white px-6.5 pt-8.5">
        <label htmlFor="menu-btn" className="mb-8 ml-2 inline-block">
          <img src="/icons/menu.png" alt="" />
        </label>
        <input type="checkbox" id="menu-btn" className="peer hidden" />
        <nav className="peer-[:not(:checked)]:min-w-44">
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded bg-[#1B438F1A] px-2 py-2"
              >
                <img src="/icons/view-grid.png" alt="" />
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded px-2 py-2 hover:bg-[#1B438F1A]"
              >
                <img src="/icons/class-lesson.png" alt="" />
                <p>Courses</p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded px-2 py-2 hover:bg-[#1B438F1A]"
              >
                <img src="/icons/university.png" alt="" />
                <p>Universites</p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded px-2 py-2 hover:bg-[#1B438F1A]"
              >
                <img src="/icons/documents.png" alt="" />
                <p>Documents</p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded px-2 py-2 hover:bg-[#1B438F1A]"
              >
                <img
                  className="-ml-1 h-7"
                  src="/icons/exam-multiple-choice.png"
                  alt=""
                />
                <p>Mock test</p>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
