import { ScholarshipsContainer } from "@/containers";
import { DashboardLayout } from "@/components";
function page() {
  return <ScholarshipsContainer />;
}

page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default page;
