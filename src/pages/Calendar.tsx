
import DashboardLayout from "@/components/layout/DashboardLayout";
import EmptyStateCard from "@/components/EmptyStateCard";
import { CalendarIcon } from "lucide-react";

const Calendar = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
          <p className="text-muted-foreground mt-2">
            Schedule and manage your financial events
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <EmptyStateCard 
            icon={<CalendarIcon className="h-10 w-10 text-muted-foreground" />}
            title="Financial Calendar Coming Soon"
            description="Schedule bill payments and track important financial dates"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Calendar;
