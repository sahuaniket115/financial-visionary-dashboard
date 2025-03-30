
import DashboardLayout from "@/components/layout/DashboardLayout";
import EmptyStateCard from "@/components/EmptyStateCard";
import { PieChartIcon } from "lucide-react";

const Budgets = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Budgets</h2>
          <p className="text-muted-foreground mt-2">
            Create and manage your budget plans
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <EmptyStateCard 
            icon={<PieChartIcon className="h-10 w-10 text-muted-foreground" />}
            title="Budget Management Coming Soon"
            description="Set up budgets to track your spending by category"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Budgets;
