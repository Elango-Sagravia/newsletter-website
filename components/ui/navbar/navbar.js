import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-nl_sec_background px-8 md:px-16 py-6 flex justify-between items-center border-b border-nl_button_border z-10">
      <p className="text-2xl text-black">Logotype</p>
      <nav className="text-base">
        <Link href="/advertise" className="ml-6 text-black">
          Advertise
        </Link>
        <Link href="/archive" className="ml-6 text-black">
          Archive
        </Link>
        <Link href="/contact" className="ml-6 text-black">
          Contact us
        </Link>
      </nav>
    </header>
  );
}
