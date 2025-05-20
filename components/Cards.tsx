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
        {features.map((feature) => (
          <li className="mt-2 flex items-center gap-2.5 border-b border-b-[#1B438F80] pb-2">
            <div className="h-8 w-8 gap-2.5 rounded-full border border-[#FF9053]"></div>
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
