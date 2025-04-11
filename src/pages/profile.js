import { DashboardLayout } from "@/components";
import { ProfilePageContainer } from "@/containers";

function page() {
  return <ProfilePageContainer />;
}

page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default page;
