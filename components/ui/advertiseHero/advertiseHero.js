import PrimaryButton from "../primaryButton/primaryButton";
import { ArrowDown } from "lucide-react";

export default function AdvertiseHero() {
  return (
    <div className="flex px-8 md:px-16 py-16">
      <div className="flex-1">
        <h1
          className="text-nl_background text-5xl leading-10"
          style={{ lineHeight: "3.5rem" }}
        >
          Our Goal: To share fresh geoppolitical and macroeconomic news.
        </h1>
        <p className="pt-4 pb-8">
          want to reach thousands of curious people around the world
        </p>
        <PrimaryButton>
          <ArrowDown size={18} color="hsl(2.69 73.58% 41.57%)" />
          <span className="px-2">Partner with Us</span>
        </PrimaryButton>
      </div>
      <div className="hidden flex-1 lg:block">Image</div>
    </div>
  );
}
