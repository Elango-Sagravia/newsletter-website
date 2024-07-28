import FancyCard from "../fancyCard/fancyCard";
import HeadingWithUnderline from "../headingWithUnderline/headingWithUnderline";

export default function Latest() {
  return (
    <div className="px-8 py-16 md:px-16">
      <HeadingWithUnderline text="Latest issue" />
      <FancyCard />
    </div>
  );
}
