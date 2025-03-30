
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Sample data - in a real app, this would come from an API
const monthlyData = [
  { name: "Jan", income: 4000, expenses: 2400 },
  { name: "Feb", income: 3000, expenses: 2210 },
  { name: "Mar", income: 2000, expenses: 1890 },
  { name: "Apr", income: 2780, expenses: 2390 },
  { name: "May", income: 1890, expenses: 1490 },
  { name: "Jun", income: 2390, expenses: 1980 },
  { name: "Jul", income: 3490, expenses: 2300 },
  { name: "Aug", income: 4000, expenses: 2400 },
  { name: "Sep", income: 3000, expenses: 2210 },
  { name: "Oct", income: 2000, expenses: 1890 },
  { name: "Nov", income: 2780, expenses: 2390 },
  { name: "Dec", income: 4890, expenses: 2980 },
];

const weeklyData = [
  { name: "Mon", income: 1100, expenses: 700 },
  { name: "Tue", income: 1200, expenses: 800 },
  { name: "Wed", income: 1300, expenses: 1000 },
  { name: "Thu", income: 900, expenses: 600 },
  { name: "Fri", income: 1500, expenses: 1100 },
  { name: "Sat", income: 800, expenses: 700 },
  { name: "Sun", income: 600, expenses: 500 },
];

const categoryData = [
  { name: "Housing", value: 2100 },
  { name: "Food", value: 800 },
  { name: "Transport", value: 600 },
  { name: "Entertainment", value: 300 },
  { name: "Health", value: 700 },
  { name: "Shopping", value: 500 },
  { name: "Others", value: 240 },
];

const SpendingChart = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Income vs. Expenses</CardTitle>
        <CardDescription>
          Track your financial flow over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="monthly" className="space-y-4">
          <TabsList>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>
          <TabsContent value="weekly" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={weeklyData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1a73e8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#1a73e8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34a853" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#34a853" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="income"
                  stroke="#1a73e8"
                  fillOpacity={1}
                  fill="url(#colorIncome)"
                  activeDot={{ r: 8 }}
                />
                <Area
                  type="monotone"
                  dataKey="expenses"
                  stroke="#34a853"
                  fillOpacity={1}
                  fill="url(#colorExpenses)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="monthly" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={monthlyData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1a73e8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#1a73e8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34a853" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#34a853" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="income"
                  stroke="#1a73e8"
                  fillOpacity={1}
                  fill="url(#colorIncome)"
                  activeDot={{ r: 8 }}
                />
                <Area
                  type="monotone"
                  dataKey="expenses"
                  stroke="#34a853"
                  fillOpacity={1}
                  fill="url(#colorExpenses)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="categories" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={categoryData}
                margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#1a73e8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SpendingChart;
