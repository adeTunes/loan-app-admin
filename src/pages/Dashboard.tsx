import "../components/Dashboard/dashboard.scss";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import StatsCarousel from "../components/Dashboard/StatsCarousel";
import UserTable from "../components/Dashboard/UserTable";

function Dashboard() {
  return (
    <DashboardLayout padding="0px">
      <p className="contentHeading">Users</p>
      <div className="contentStatsCards">
        <StatsCarousel />
      </div>
      <UserTable />
    </DashboardLayout>
  );
}

export default Dashboard;
