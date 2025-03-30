
import { DollarSignIcon, TrendingDownIcon, TrendingUpIcon, WalletIcon } from "lucide-react";
import StatsCard from "../ui/StatsCard";

const FinancialOverview = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Balance"
        value="$24,562.00"
        description="Updated just now"
        icon={WalletIcon}
        trend={{ value: 2.5, isPositive: true }}
      />
      <StatsCard
        title="Monthly Income"
        value="$8,350.00"
        description="vs. $7,900 last month"
        icon={TrendingUpIcon}
        trend={{ value: 5.7, isPositive: true }}
      />
      <StatsCard
        title="Monthly Expenses"
        value="$5,240.00"
        description="vs. $5,430 last month"
        icon={TrendingDownIcon}
        trend={{ value: 3.5, isPositive: true }}
      />
      <StatsCard
        title="Savings Rate"
        value="37.2%"
        description="vs. 31.5% last month"
        icon={DollarSignIcon}
        trend={{ value: 5.7, isPositive: true }}
      />
    </div>
  );
};

export default FinancialOverview;
