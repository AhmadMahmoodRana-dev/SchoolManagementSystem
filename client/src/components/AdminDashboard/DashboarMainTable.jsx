import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight, Badge } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const DashboarMainTable = () => {
  return (
    <Card className="xl:col-span-2 dark:bg-[#19202f] dark:border-none" x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle className="dark:text-blue-500">Latest Invoices</CardTitle>
          <CardDescription className="dark:text-blue-500">Recent Invoices from your store.</CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="#">
            View All
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="dark:hover:bg-blue-800/20">
              <TableHead className="dark:text-blue-400" >Customer</TableHead>
              <TableHead className="hidden xl:table-column dark:text-blue-400">Type</TableHead>
              <TableHead className="hidden xl:table-column dark:text-blue-400">Status</TableHead>
              <TableHead className="hidden xl:table-column dark:text-blue-400">Date</TableHead>
              <TableHead className="text-right dark:text-blue-400">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="dark:hover:bg-blue-800/20" >
              <TableCell>
                <div className="font-medium">aaa</div>
                <div className="hidden text-sm text-muted-foreground md:inline"></div>
              </TableCell>
              <TableCell className="hidden xl:table-column"></TableCell>
              <TableCell className="hidden xl:table-column">
                <Badge className="text-xs" variant="outline"></Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell lg:hidden xl:table-column"></TableCell>
              <TableCell className="text-right">$</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DashboarMainTable;
