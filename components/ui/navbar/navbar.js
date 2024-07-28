import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-nl_sec_background px-8 md:px-16 py-6 flex justify-between items-center border-b border-nl_button_border z-10">
      <p className="text-2xl">Logotype</p>
      <nav className="text-base">
        <Link href="/advertise" className="ml-6">
          Advertise
        </Link>
        <Link href="/archive" className="ml-6">
          Archive
        </Link>
        <Link href="/contact" className="ml-6">
          Contact us
        </Link>
      </nav>
    </header>
  );
}
