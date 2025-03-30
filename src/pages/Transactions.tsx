
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCardIcon, ShoppingBagIcon, HomeIcon, FolderIcon, CoffeeIcon, CalendarIcon, FilterIcon, SearchIcon } from "lucide-react";

// Expanded transaction data from the dashboard sample
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
  {
    id: 7,
    title: "Uber",
    category: "Transportation",
    amount: -24.50,
    date: "Apr 26, 2023",
    icon: CreditCardIcon,
  },
  {
    id: 8,
    title: "Walmart",
    category: "Groceries",
    amount: -132.67,
    date: "Apr 25, 2023",
    icon: ShoppingBagIcon,
  },
  {
    id: 9,
    title: "Freelance Payment",
    category: "Income",
    amount: 750.00,
    date: "Apr 24, 2023",
    icon: FolderIcon,
  },
  {
    id: 10,
    title: "Phone Bill",
    category: "Utilities",
    amount: -85.99,
    date: "Apr 22, 2023",
    icon: CreditCardIcon,
  },
];

// All available categories for filtering
const categories = [
  "All Categories",
  "Shopping", 
  "Income", 
  "Food & Drink", 
  "Housing", 
  "Utilities", 
  "Subscription", 
  "Transportation", 
  "Groceries"
];

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  // Filter transactions based on search term and category
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All Categories" || transaction.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Calculate summary statistics
  const totalIncome = filteredTransactions
    .filter(t => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpenses = filteredTransactions
    .filter(t => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Transactions</h2>
          <p className="text-muted-foreground mt-2">
            View and manage your financial transactions
          </p>
        </div>

        {/* Transaction Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{filteredTransactions.length}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Showing filtered results
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Income
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-finance-secondary">
                {totalIncome.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Total incoming funds
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Expenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {totalExpenses.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Total outgoing funds
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Transaction Filters</CardTitle>
            <CardDescription>
              Filter your transactions by name, category, or date
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="Search transactions..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-[200px]">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-auto">
                <Button variant="outline" className="w-full md:w-auto">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Date Range
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transaction List */}
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>
              Your recent financial activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction) => {
                  const IconComponent = transaction.icon;
                  const isIncome = transaction.amount > 0;
                  
                  return (
                    <div key={transaction.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
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
                })
              ) : (
                <div className="text-center py-8">
                  <CreditCardIcon className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                  <h3 className="mt-4 text-lg font-medium">No transactions found</h3>
                  <p className="mt-2 text-muted-foreground">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchTerm("");
                      setCategoryFilter("All Categories");
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Transactions;
