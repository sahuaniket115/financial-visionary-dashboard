
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const budgetCategories = [
  { 
    category: "Housing",
    spent: 1850,
    budget: 2000,
    color: "bg-finance-primary" 
  },
  { 
    category: "Food & Dining",
    spent: 780,
    budget: 800,
    color: "bg-finance-secondary" 
  },
  { 
    category: "Transportation",
    spent: 350,
    budget: 500,
    color: "bg-finance-accent" 
  },
  { 
    category: "Entertainment",
    spent: 300,
    budget: 300,
    color: "bg-finance-warning" 
  },
  { 
    category: "Shopping",
    spent: 620,
    budget: 500,
    color: "bg-finance-danger" 
  },
];

const BudgetTracker = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Tracker</CardTitle>
        <CardDescription>
          Monitor your monthly budget allocation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {budgetCategories.map((item) => {
            const percentage = Math.min(Math.round((item.spent / item.budget) * 100), 100);
            const isOverBudget = item.spent > item.budget;
            
            return (
              <div key={item.category} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="font-medium">{item.category}</span>
                  </div>
                  <div className="text-sm">
                    <span className={isOverBudget ? "text-finance-danger" : ""}>
                      ${item.spent.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">{" "}/${item.budget.toLocaleString()}</span>
                  </div>
                </div>
                <Progress 
                  value={percentage} 
                  className={isOverBudget ? "bg-muted/50" : "bg-muted/30"} 
                  indicatorClassName={item.color}
                />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetTracker;
