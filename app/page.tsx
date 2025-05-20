import { Button } from "@/components/Button";
import {
  CourseFeaturesCard,
  InfoCard,
  TestimonialCard,
} from "@/components/Cards";
import { LeadGenerationForm } from "@/components/Forms";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  const tableData = [
    ["Micro-Batch size for personalized attention.", "1:1 Private Classes"],
    [
      "12+12 Live Classes (Quant & Verbal, 2 hours each).",
      "24 Pre-Recorded Classes (12 Quant, 12 Verbal) 2 hours each.",
    ],
    [
      "30+ Pre-Recorded Beginner Videos (Quant).",
      "30+ Pre-Recorded Beginner Videos (Quant).",
    ],
    [
      "Full Study Material (1000+ Questions).",
      "Full Study Material (1000+ Questions).",
    ],
    [
      "Video solutions for all questions.",
      "Video solutions for all questions.",
    ],
    [
      "2 Full Length Adaptive Mock Tests.",
      "2 Full Length Adaptive Mock Tests.",
    ],
    ["1200 words vocab list.", "1200 words vocab list."],
    ["Vocab quizzes.", "Vocab quizzes."],
    [
      "Continuous counselling and evaluation.",
      "Continuous counselling and evaluation.",
    ],
    [
      "Unlimited doubt clearing sessions",
      "4 days a week classes customized on your convenience (1 hr each).",
    ],
    [
      "1 year validity (Repeat batches as many times you want).",
      "Study plan customized to students needs.",
    ],
  ];

  return (
    <>
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-[#1b428e] to-[#e7ecf4]">
          <section className="container mx-auto flex flex-wrap items-center justify-between px-5">
            <div className="font-roboto-flex relative isolate -ml-40 inline-block rounded-full bg-black/3 px-7.5 py-7.5 text-2xl font-[400]">
              <div className="inline-block rounded-full bg-black/3 px-7.5 py-7.5">
                <div className="inline-block rounded-full bg-black/3 px-7.5 py-7.5">
                  <div className="inline-block rounded-full bg-black/3 px-7.5 py-7.5">
                    <div className="relative inline-block rounded-full bg-black/3 px-7.5 py-7.5">
                      <div className="flex h-[400px] w-[400px] items-center justify-center overflow-hidden rounded-full">
                        <img
                          className="mt-[48%] w-[120%]"
                          src="/images/prof-punit.jpg"
                          alt="Prof. Punit"
                        />
                      </div>
                      <p className="absolute -right-15 bottom-14 z-10 inline-block rounded-full bg-white px-5 py-2 font-[600] text-[#505866]">
                        Prof. Punit
                      </p>
                    </div>
                    <p className="absolute top-37 -right-10 rounded-full bg-[#CCE5FE] px-3 py-2 text-[#16416B]">
                      1000+ students
                    </p>
                  </div>
                  <p className="absolute bottom-15 left-50 inline-block min-w-72 rounded-full bg-[#EFF7E2] px-3 py-2 text-center text-[#3C6C26]">
                    Founder, Millionare GRE
                  </p>
                </div>
              </div>
              <p className="absolute top-10 left-35 rounded-full bg-[#F8EFE2] px-3 py-2 text-[#A1631C] capitalize">
                GRE score: 337/340
              </p>
            </div>
            <div className="z-10 flex flex-grow justify-end">
              <LeadGenerationForm />
            </div>
          </section>
          <section id="about" className="container mx-auto mt-44 px-5 pb-5">
            <h2 className="font-roboto mb-20 text-4xl font-[900] text-[#1B438F] capitalize">
              Why join millionare GRE?
            </h2>
            <div className="flex flex-wrap items-start justify-center gap-6 lg:min-h-[390px]">
              <InfoCard
                title="Realistic Strategies"
                description="No fluff, just proven techniques that work."
                imgSrc="/images/chess-fill.svg"
              />
              <div className="self-end">
                <InfoCard
                  title="Beginner Friendly"
                  description="A supportive environment for all skill levels."
                  imgSrc="/images/star-badge.svg"
                />
              </div>
              <InfoCard
                title="Comprehensive"
                description="Covers everything you need, nothing you don't."
                imgSrc="/images/book-education.png"
              />
              <div className="self-end">
                <InfoCard
                  title="Affordable"
                  description="High quality prep at a fair price."
                  imgSrc="/images/money-bag.png"
                />
              </div>
            </div>
          </section>
        </div>
        <div id="courses" className="bg-gradient-to-b from-[#e7ecf4] to-[#bec9df] px-5">
          <div className="container mx-auto flex min-h-[100vh] items-center justify-center py-10">
            <CourseFeaturesCard />
          </div>
        </div>
        <section className="container mx-auto px-5 pt-21">
          <table className="w-full text-[#1F1D39]">
            <thead>
              <tr>
                <th className="font-roboto pb-8 text-start text-4xl font-[900] text-[#1B438F]">
                  Online live Classes
                </th>
                <th className="font-roboto pb-8 text-start text-4xl font-[900] text-[#1B438F]">
                  Private Personalized Tutoring
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, key) => (
                <tr key={key} className="divide-x divide-[#1B438F33]">
                  {row.map((data, i) => (
                    <td
                      key={`${data}-${i}`}
                      className="border-y border-y-[#1B438F33] px-2.5 py-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="min-h-2.5 min-w-2.5 gap-2.5 rounded-full border border-[#FF9053] bg-[#FF90534D]"></div>
                        <p>{data}</p>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}

              <tr>
                <td className="py-8 pr-2.5 text-white">
                  <Button label="Know more" />
                </td>
                <td className="py-6 pl-2.5">
                  <Button label="Know more" bgColor="#fff" />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
      <section
        id="testimonials"
        className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1c4490] to-[#0f2247] pt-25 pb-38"
      >
        <div className="absolute bottom-10 left-0 -translate-x-[90%] scale-[0.95]">
          <TestimonialCard
            imgSrc="/images/victoria.jpg"
            title="Best Course for GRE exams"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices"
            greScore={328}
            designation="Standford Odio Co."
            name="Victoria Wotton"
            linkedin=""
          />
        </div>
        <TestimonialCard
          imgSrc="/images/victoria.jpg"
          title="Best Course for GRE exams"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices"
          greScore={328}
          designation="Standford Odio Co."
          name="Victoria Wotton"
          linkedin=""
          caption={true}
        />
        <div className="absolute right-0 bottom-10 translate-x-[90%] scale-[0.95]">
          <TestimonialCard
            imgSrc="/images/victoria.jpg"
            title="Best Course for GRE exams"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices"
            greScore={328}
            designation="Standford Odio Co."
            name="Victoria Wotton"
            linkedin=""
          />
        </div>
      </section>
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
          <div className="mt-4.5 pb-24 grid grid-cols-2 grid-rows-2 gap-7">
            <div>
              <h4 className="font-inter text-xl font-[500] uppercase">
                Company
              </h4>
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
              <p className="text-[#A19FBA] text-xl">contact@gre.com</p>
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
    </>
  );
}
