// import ExploreCategories from "@/components/ExploreCategories";
import Layout from "@/components/Layout";

export default function PrivacyPolicy({ menu_data }) {
  return (
    <>
      <Layout menuItems={menu_data}>
        {/* <ExploreCategories categories={categories}></ExploreCategories> */}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  // const response = await fetch(
  //   "http://127.0.0.1:10028/wp-json/wp/v2/job-categories?per_page=8"
  // );
  // const data = await response.json();

  const menu = await fetch(
    "http://127.0.0.1:10028/wp-json/wp/v2/menus/primary-menu"
  );
  const menu_data = await menu.json();

  return {
    props: {
      // categories: data,
      menu_data: menu_data,
    },
  };
}
