
import DashboardLayout from "@/components/layout/DashboardLayout";
import EmptyStateCard from "@/components/EmptyStateCard";
import { CreditCardIcon } from "lucide-react";

const Transactions = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Transactions</h2>
          <p className="text-muted-foreground mt-2">
            View and manage your financial transactions
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <EmptyStateCard 
            icon={<CreditCardIcon className="h-10 w-10 text-muted-foreground" />}
            title="Transactions Coming Soon"
            description="Track all your financial transactions in one place"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Transactions;
