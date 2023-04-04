import Image from "next/image";
import Link from "next/link";
import MenuPrimary from "@/components/nav/MenuPrimary";

function Header({ menuItems }) {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto py-6 px-3">
        <div className="flex flex-row">
          <div className="basis-1/4">
            <Link href="/">
              <Image src="/logo.svg" alt="Site Logo" width={58} height={64} />
            </Link>
          </div>
          <div className="basis-3/4 flex items-center">
            <MenuPrimary menuItems={menuItems}></MenuPrimary>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
