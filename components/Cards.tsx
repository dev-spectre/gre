import Image from "next/image";
import { Button } from "./Button";

interface InfoCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

export function InfoCard({ title, description, imgSrc }: InfoCardProps) {
  return (
    <section className="font-inter max-w-[263px] rounded-xl bg-white px-5 py-6 text-center capitalize shadow-lg">
      <h3 className="text-2xl font-[400]">{title}</h3>
      <Image
        className="mx-auto my-9 rounded-full border-2 border-[#FF9053] px-3 py-3"
        src={imgSrc}
        alt=""
        width={"100"}
        height={"100"}
      />
      <p className="font-[300]">{description}</p>
    </section>
  );
}

export function CourseFeaturesCard() {
  const features = [
    "30+ Pre-Recorded Beginner Vidoes (Quant)",
    "24 Pre-Recorded Classes (12 Quant, 12 Verbal) 2 hours each.",
    "Full Study Material (1000+ Questions).",
    "Video solutions for all questions.",
    "2 Full Length Adaptive Mock Tests.",
    "1200 words vocab list.",
    "3 Live doubt sessions every week.",
    "1 month and 2 months study plan.",
  ];

  return (
    <article className="font-inter inline-block rounded-3xl bg-white px-32 py-12 text-lg font-[400] shadow-lg shadow-[#1B438F4D]">
      <h2 className="font-roboto text-4xl font-[900] text-[#1B438F] uppercase">
        GRE 330 Course
      </h2>
      <p className="font-[600] capitalize">
        World's most affordable complete <span className="uppercase">GRE</span>{" "}
        prep
      </p>

      <ul className="my-8">
        {features.map((feature, i) => (
          <li
            key={i}
            className="mt-2 flex items-center gap-2.5 border-b border-b-[#1B438F80] pb-2"
          >
            <div className="min-h-8 min-w-8 gap-2.5 rounded-full border border-[#FF9053]"></div>
            <p className="text-[#211C37]">{feature}</p>
          </li>
        ))}
      </ul>

      <div className="text-white">
        <Button label="Subscribe now" />
      </div>
    </article>
  );
}

interface TestimonialCardProps {
  title: string;
  description: string;
  greScore: number | `${number}`;
  name: string;
  linkedin: string;
  designation: string;
  imgSrc: string;
  caption?: boolean;
}

export function TestimonialCard({
  title,
  description,
  greScore,
  name,
  designation,
  linkedin,
  imgSrc,
  caption,
}: TestimonialCardProps) {
  return (
    <article className="font-urbanist relative grid min-h-[450px] max-w-5xl grid-cols-10 gap-12 rounded-2xl bg-white px-30 py-14.5">
      <div className="relative col-span-4">
        <img
          className="absolute top-0 -left-5"
          src="/icons/quote.png"
          alt="quote"
        />
        <img
          className="absolute top-10 h-[120%] max-w-[300px] rounded-full object-cover"
          src={imgSrc}
          alt={name}
        />
      </div>
      <section className="col-span-6">
        <h3 className="mb-6 text-3xl font-[800]">{title}</h3>
        <p className="mb-12 text-xl font-[600] text-[#626262] italic">
          {description}
        </p>
        <div className="mb-3.5 flex gap-13 text-[#1B438F]">
          <p className="text-4xl font-[900]">{greScore}/330</p>
          <a href={linkedin}>
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
        <p className="text-2xl font-[900]">{name}</p>
        <p className="text-lg font-[500] text-[#21967B]">{designation}</p>
      </section>
      {caption && (
        <p className="font-roboto absolute right-0 -bottom-15 text-4xl font-[900] text-white">
          Our Student, Our Pride
        </p>
      )}
    </article>
  );
}
