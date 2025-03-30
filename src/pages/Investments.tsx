
import DashboardLayout from "@/components/layout/DashboardLayout";
import EmptyStateCard from "@/components/EmptyStateCard";
import { TrendingUpIcon } from "lucide-react";

const Investments = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Investments</h2>
          <p className="text-muted-foreground mt-2">
            Track your investment portfolio performance
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <EmptyStateCard 
            icon={<TrendingUpIcon className="h-10 w-10 text-muted-foreground" />}
            title="Investment Tracking Coming Soon"
            description="Monitor your investment portfolio and track returns"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Investments;
