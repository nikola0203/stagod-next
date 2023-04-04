import Layout from "@/components/Layout";
import ExploreCategories from "@/components/ExploreCategories";
import UsersSlider from "@/components/home/UsersSlider";

export default function Home({ categories, menu_data, users }) {
  return (
    <>
      <Layout menuItems={menu_data}>
        <ExploreCategories categories={categories}></ExploreCategories>
        <UsersSlider users={users}></UsersSlider>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const get_job_categories = await fetch(
    "http://127.0.0.1:10028/wp-json/wp/v2/job-categories?per_page=8"
  ).then((res) => res.json());
  // const job_categories = await get_job_categories.json();

  const get_primary_menu = await fetch(
    "http://127.0.0.1:10028/wp-json/wp/v2/menus/primary-menu"
  ).then((res) => res.json());
  // const primary_menu = await get_primary_menu.json();

  const get_all_users = await fetch(
    "http://127.0.0.1:10028/wp-json/wp/v2/users"
  ).then((res) => res.json());
  // const all_users = await get_all_users.json();

  // console.log(get_all_users);

  return {
    props: {
      categories: get_job_categories,
      menu_data: get_primary_menu,
      users: get_all_users
    }
  };
}
