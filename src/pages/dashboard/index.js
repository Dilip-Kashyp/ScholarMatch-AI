import { DashboardContainer } from "@/containers";
import { DashboardLayout } from "@/components";

function page() {
  return <DashboardContainer />;
}

page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default page;
