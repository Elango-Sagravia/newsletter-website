import ArchiveHeader from "@/components/ui/archiveHeader/archiveHeader";
import GridContainer from "@/components/ui/gridContainer/gridContainer";
import Subscribe from "@/components/ui/subscribe/subscribe";

export default function archive() {
  return (
    <main>
      <ArchiveHeader />
      <section className="px-8 md:px-16 py-16">
        <GridContainer hideButton={true} />
      </section>
      <Subscribe />
    </main>
  );
}
