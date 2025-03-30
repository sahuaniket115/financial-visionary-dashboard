
import DashboardLayout from "@/components/layout/DashboardLayout";
import EmptyStateCard from "@/components/EmptyStateCard";
import { UserIcon } from "lucide-react";

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
          <p className="text-muted-foreground mt-2">
            Manage your account information
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <EmptyStateCard 
            icon={<UserIcon className="h-10 w-10 text-muted-foreground" />}
            title="Profile Management Coming Soon"
            description="Update your personal information and account settings"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
