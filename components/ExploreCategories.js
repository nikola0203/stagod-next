import Link from "next/link";

function ExploreCategories({ categories }) {
  return (
    <section className="section-expore-categories bg-gray-100 pt-6 pb-9">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-2">Istrazi Kategorije</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {categories.map((category) => {
            return (
              <Link href={category.link_short} key={category.id}>
                <div className="bg-white rounded-md border-x border-y border-color-gray-200 p-4 md:p-6">
                  <h3 className="text-lg font-bold">{category.name}</h3>
                  <h4 className="text-sm text-purple-100 font-medium">
                    {category.count_subcategories} veština
                  </h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExploreCategories;
