import PrimaryButton from "../primaryButton/primaryButton";
import { ArrowRight } from "lucide-react";

export default function AdvertiseQuestion() {
  return (
    <section className="px-8 md:px-16 py-16">
      <div className="flex flex-col items-center">
        <h5 className="text-nl_background text-5xl leading-[3rem] text-center">
          Still got questions?
        </h5>
        <PrimaryButton className="max-w-40 mt-20">
          <ArrowRight size={18} color="hsl(2.69 73.58% 41.57%)" />
          <span className="px-2">Contact Us</span>
        </PrimaryButton>
      </div>
    </section>
  );
}
