import { HomePageContainer } from "@/containers";
import { DashboardLayout } from "@/components";

function page() {
  return <HomePageContainer />;
}

page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default page;