export const data = [
  {
    title: "Subscriber",
    value: 14.0,
  },
  {
    title: "Revenue",
    value: 120000.5,
  },
  {
    title: "User Count",
    value: 5000,
  },
  {
    title: "Product Sales",
    value: 75000,
  },
  {
    title: "something ",
    value: 1000000,
  },
  {
    title: "Customer Satisfaction",
    value: 0.95,
  },
];

import Image from "next/image";

export default function GridContainer({ hideButton }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {/* Component rendering */}
        {data.map((item, i) => (
          <a
            href="#"
            key={i}
            className="flex flex-col min-w-[250px] sm:min-w-[260px] md:min-w-[300px] relative min-h-[300px]"
          >
            <div className="relative min-h-[200px]">
              <Image
                src="https://hedonova.b-cdn.net/Hedonova%20images/%20All%20Hedonova%20blogs/How%20to%20calculate%20your%20retirement%20needs/How%20to%20calculate%20your%20retirement%20needs.webp"
                alt="Example"
                layout="fill"
                objectFit="cover"
                className="block"
              />
            </div>
            <span className="text-[10px] text-nl_background my-2 block font-bold">
              4 JUL 2024 <span>.</span> 9 MIN READ
            </span>
            <p className="">
              Preferred equity real estate investing - How to guide
            </p>
          </a>
        ))}
      </div>

      {!hideButton && (
        <div className="flex justify-center mt-16">
          <a className="px-8 py-2 border" href="">
            See archives
          </a>
        </div>
      )}
    </>
  );
}
