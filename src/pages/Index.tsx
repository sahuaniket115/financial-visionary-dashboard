
import DashboardLayout from "@/components/layout/DashboardLayout";
import FinancialOverview from "@/components/dashboard/FinancialOverview";
import SpendingChart from "@/components/dashboard/SpendingChart";
import BudgetTracker from "@/components/dashboard/BudgetTracker";
import RecentTransactions from "@/components/dashboard/RecentTransactions";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here's an overview of your finances.
          </p>
        </div>
        
        <FinancialOverview />
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <SpendingChart />
          <BudgetTracker />
        </div>
        
        <RecentTransactions />
      </div>
    </DashboardLayout>
  );
};

export default Index;
