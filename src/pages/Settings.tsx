
import DashboardLayout from "@/components/layout/DashboardLayout";
import EmptyStateCard from "@/components/EmptyStateCard";
import { SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground mt-2">
            Configure your dashboard preferences
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <EmptyStateCard 
            icon={<SettingsIcon className="h-10 w-10 text-muted-foreground" />}
            title="Settings Configuration Coming Soon"
            description="Customize your dashboard and notification preferences"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
