import Image from "next/image";

export function LeadGenerationForm() {
  return (
    <div className="to-black-40 inline-block rounded-xl max-w-lg w-full bg-black/20 bg-gradient-to-b from-black/20 via-black/15 to-black/20 px-8 py-11 text-white backdrop:blur-2xl">
      <h2 className="font-roboto mb-6 text-4xl font-[900] capitalize">
        Get free <span className="uppercase">GRE</span> strategy
      </h2>
      <form>
        <div>
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="mt-2 mb-3 h-8 w-full rounded-md bg-black/12 px-2 placeholder:text-white backdrop:blur-2xl"
            placeholder="Eg.: Abhishek"
            type="text"
            id="name"
          />
        </div>
        <div>
          <label className="block" htmlFor="email">
            Email ID
          </label>
          <input
            className="mt-2 mb-3 h-8 w-full rounded-md bg-black/12 px-2 placeholder:text-white backdrop:blur-2xl"
            placeholder="Eg.: abhishek@example.com"
            type="email"
            id="email"
          />
        </div>
        <div>
          <label className="block capitalize" htmlFor="contactNumber">
            Contact number
          </label>
          <input
            placeholder="Eg.: +91-7798773994"
            type="text"
            id="contactNumber"
            pattern="+[0-9]{1,3}-[0-9]{10}"
            className="mt-2 mb-3 h-8 w-full rounded-md bg-black/12 px-2 placeholder:text-white backdrop:blur-2xl"
          />
        </div>
        <div>
          <label className="block" htmlFor="course">
            Course
          </label>
          <div className="mt-2 mb-3 flex h-8 items-center justify-between rounded-md bg-black/12 px-2 hover:cursor-pointer">
            <p>Select Course</p>
            <Image
              src="/icons/chevron-down.svg"
              alt="Options"
              width="25"
              height="25"
            />
          </div>
        </div>
        <button className="mt-3 w-full rounded-md bg-[#1F1D39] px-3 py-2">
          Submit
        </button>
      </form>
    </div>
  );
}
