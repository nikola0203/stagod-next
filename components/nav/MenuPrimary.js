import Link from "next/link";

function MenuPrimary({ menuItems }) {
  return (
    <nav className="section-expore-menuItems container">
      <ul className="flex flex-row justify-end">
        {menuItems.map((menuItem, index, menuItems) => {
          return (
            <li
              key={menuItem.ID}
              className={`rounded-md text-white font-bold ${
                menuItems.length - 1 === index ? "ml-3" : "mx-3"
              }`}
            >
              <Link href={menuItem.slug} className="text-base">
                {menuItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MenuPrimary;
