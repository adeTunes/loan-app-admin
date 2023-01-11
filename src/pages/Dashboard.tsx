import "../components/Dashboard/dashboard.scss";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import Header from "../components/Dashboard/Header";
import Navbar from "../components/Dashboard/Navbar";
import StatsCard from "../components/Dashboard/StatsCard";
import UserTable from "../components/Dashboard/UserTable";
import adminStats from "../layout/adminStats";

function Dashboard() {
  return (
    <DashboardLayout padding="0px">
        <p className="contentHeading">Users</p>
        <div className="contentStatsCards">
          {adminStats.map(({ icon, name, stats, bg }, idx) => (
            <StatsCard key={idx} icon={icon} name={name} stats={stats} bg={bg} />
          ))}
        </div>
        <UserTable />
    </DashboardLayout>
  );
}

export default Dashboard;
