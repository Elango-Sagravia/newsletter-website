import GridContainer from "../gridContainer/gridContainer";
import HeadingWithUnderline from "../headingWithUnderline/headingWithUnderline";

export default function ArchiveHome() {
  return (
    <div className="px-8 pb-16 md:px-16 pt-8">
      <HeadingWithUnderline text="Archive" />
      <GridContainer hideButton={false} />
    </div>
  );
}
