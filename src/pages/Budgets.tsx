
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PieChartIcon, ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample budget data
const budgets = [
  {
    id: 1,
    category: "Housing",
    allocated: 2000,
    spent: 1800,
    icon: "🏠",
    color: "bg-blue-500"
  },
  {
    id: 2,
    category: "Food & Dining",
    allocated: 800,
    spent: 650,
    icon: "🍔",
    color: "bg-green-500"
  },
  {
    id: 3,
    category: "Transportation",
    allocated: 400,
    spent: 320,
    icon: "🚗",
    color: "bg-yellow-500"
  },
  {
    id: 4,
    category: "Entertainment",
    allocated: 300,
    spent: 285,
    icon: "🎬",
    color: "bg-purple-500"
  },
  {
    id: 5,
    category: "Shopping",
    allocated: 500,
    spent: 620,
    icon: "🛍️",
    color: "bg-pink-500"
  },
  {
    id: 6,
    category: "Utilities",
    allocated: 350,
    spent: 310,
    icon: "💡",
    color: "bg-indigo-500"
  },
  {
    id: 7,
    category: "Healthcare",
    allocated: 250,
    spent: 120,
    icon: "🏥",
    color: "bg-red-500"
  },
  {
    id: 8,
    category: "Education",
    allocated: 400,
    spent: 400,
    icon: "📚",
    color: "bg-cyan-500"
  }
];

const Budgets = () => {
  const [month, setMonth] = useState("May 2023");
  
  // Calculate summary statistics
  const totalAllocated = budgets.reduce((sum, budget) => sum + budget.allocated, 0);
  const totalSpent = budgets.reduce((sum, budget) => sum + budget.spent, 0);
  const totalRemaining = totalAllocated - totalSpent;
  const spendingPercentage = Math.round((totalSpent / totalAllocated) * 100);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Budgets</h2>
          <p className="text-muted-foreground mt-2">
            Create and manage your budget plans
          </p>
        </div>

        {/* Budget summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Budget
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {totalAllocated.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                For {month}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Spent So Far
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {totalSpent.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}
              </div>
              <div className="flex items-center mt-1">
                <span className="text-xs font-medium mr-2 text-muted-foreground">
                  {spendingPercentage}% of budget
                </span>
                <Progress value={spendingPercentage} className="h-2 flex-1" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Remaining
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-finance-secondary">
                {totalRemaining.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {Math.round((totalRemaining / totalAllocated) * 100)}% of budget left
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Budget categories */}
        <Card>
          <CardHeader>
            <CardTitle>Budget Categories</CardTitle>
            <CardDescription>
              Track spending across different categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {budgets.map((budget) => {
                const percentage = Math.round((budget.spent / budget.allocated) * 100);
                const isOverBudget = budget.spent > budget.allocated;
                
                return (
                  <div key={budget.id} className="flex flex-col p-4 border rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">{budget.icon}</span>
                        <h3 className="font-medium">{budget.category}</h3>
                      </div>
                      <Badge variant={isOverBudget ? "destructive" : "outline"}>
                        {isOverBudget ? (
                          <span className="flex items-center">
                            <ArrowUpIcon className="h-3 w-3 mr-1" />
                            Over Budget
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <ArrowDownIcon className="h-3 w-3 mr-1" />
                            Under Budget
                          </span>
                        )}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between text-sm mb-1">
                      <span>
                        Spent: {budget.spent.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD'
                        })}
                      </span>
                      <span>
                        Budget: {budget.allocated.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD'
                        })}
                      </span>
                    </div>
                    
                    <Progress 
                      value={percentage > 100 ? 100 : percentage} 
                      className="h-2 mt-2" 
                      indicatorClassName={isOverBudget ? "bg-destructive" : budget.color}
                    />
                    
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>{percentage}% used</span>
                      <span>
                        {Math.abs(budget.allocated - budget.spent).toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD'
                        })}
                        {' '}
                        {isOverBudget ? "over" : "remaining"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Monthly budget performance */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Budget Trends</CardTitle>
            <CardDescription>
              Compare your spending across different months
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center">
            <div className="text-center">
              <PieChartIcon className="h-16 w-16 mx-auto text-muted-foreground opacity-50" />
              <h3 className="mt-4 text-lg font-medium">Budget Trend Charts Coming Soon</h3>
              <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                Historical budget performance tracking will be available in the next update.
                You'll be able to see how your spending habits change over time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Budgets;
