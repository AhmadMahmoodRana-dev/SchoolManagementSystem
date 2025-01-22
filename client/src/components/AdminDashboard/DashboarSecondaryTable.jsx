import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const DashboarSecondaryTable = () => {
  return (
    <Card x-chunk="dashboard-01-chunk-5" className="dark:bg-[#19202f] dark:border-none" >
      <CardHeader>
        <CardTitle className="text-blue-500" >Recent Sales</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        <div className="flex items-center gap-4">
       
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none dark:text-blue-400">Olivia Martin</p>
            <p className="text-sm text-muted-foreground dark:text-blue-400">
              olivia.martin@email.com
            </p>
          </div>
          <div className="ml-auto font-medium dark:text-blue-400">+$1,999.00</div>
        </div>
        <div className="flex items-center gap-4">
        
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none dark:text-blue-400">Jackson Lee</p>
            <p className="text-sm text-muted-foreground dark:text-blue-400">
              jackson.lee@email.com
            </p>
          </div>
          <div className="ml-auto font-medium dark:text-blue-400">+$39.00</div>
        </div>
        <div className="flex items-center gap-4">
        
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none dark:text-blue-400">Isabella Nguyen</p>
            <p className="text-sm text-muted-foreground dark:text-blue-400">
              isabella.nguyen@email.com
            </p>
          </div>
          <div className="ml-auto font-medium dark:text-blue-400">+$299.00</div>
        </div>
        <div className="flex items-center gap-4">
          
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none dark:text-blue-400">William Kim</p>
            <p className="text-sm text-muted-foreground dark:text-blue-400">will@email.com</p>
          </div>
          <div className="ml-auto font-medium dark:text-blue-400">+$99.00</div>
        </div>
        <div className="flex items-center gap-4">
         
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none dark:text-blue-400">Sofia Davis</p>
            <p className="text-sm text-muted-foreground dark:text-blue-400">
              sofia.davis@email.com
            </p>
          </div>
          <div className="ml-auto font-medium dark:text-blue-400">+$39.00</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboarSecondaryTable;
