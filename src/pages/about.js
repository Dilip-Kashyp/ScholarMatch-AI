import { AboutPageContainer } from "@/containers";
import { DashboardLayout } from "@/components";


function page() {
  return <AboutPageContainer />;
}


page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default page;