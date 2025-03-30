
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCardIcon, ShoppingBagIcon, HomeIcon, FolderIcon, CoffeeIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample transaction data
const transactions = [
  {
    id: 1,
    title: "Amazon",
    category: "Shopping",
    amount: -89.99,
    date: "Today",
    icon: ShoppingBagIcon,
  },
  {
    id: 2,
    title: "Salary Deposit",
    category: "Income",
    amount: 4200.00,
    date: "Yesterday",
    icon: FolderIcon,
  },
  {
    id: 3,
    title: "Starbucks",
    category: "Food & Drink",
    amount: -5.75,
    date: "Yesterday",
    icon: CoffeeIcon,
  },
  {
    id: 4,
    title: "Rent Payment",
    category: "Housing",
    amount: -1800.00,
    date: "May 1, 2023",
    icon: HomeIcon,
  },
  {
    id: 5,
    title: "Energy Bill",
    category: "Utilities",
    amount: -148.32,
    date: "Apr 29, 2023",
    icon: HomeIcon,
  },
  {
    id: 6,
    title: "Netflix",
    category: "Subscription",
    amount: -15.99,
    date: "Apr 28, 2023",
    icon: CreditCardIcon,
  },
];

const RecentTransactions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>
          Your latest financial activities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {transactions.map((transaction) => {
            const IconComponent = transaction.icon;
            const isIncome = transaction.amount > 0;
            
            return (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.title}</p>
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`font-semibold ${isIncome ? "text-finance-secondary" : ""}`}>
                    {isIncome ? "+" : ""}{transaction.amount.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}
                  </span>
                  <Badge variant={isIncome ? "outline" : "secondary"} className="mt-1">
                    {transaction.category}
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
