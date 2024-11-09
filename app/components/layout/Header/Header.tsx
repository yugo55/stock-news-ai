import Link from "next/link";
import { FaGear } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="flex justify-between py-4">
      <Link href="/" className="text-3xl text-[#353535] hover:opacity-70">STOCK-NEWS-AI</Link>
      <Link href="/">
        <FaGear className="text-[#353535] hover:opacity-70" size={35} />
      </Link>
    </header>
  );
}