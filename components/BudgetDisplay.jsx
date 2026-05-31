import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Budget from './Budget';
import TransactionList from './TransactionList';

export default function BudgetDisplay() {
  return (
    <Card>
      <CardHeader className='flex items-center justify-center'>
        <CardTitle><h1>Miquels Budget</h1></CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col items-center justify-center'>
        <h3>Verfügbarer Betrag</h3>
        <Budget />
      </CardContent>
      <CardFooter>
        <div className="flex flex-col items-center gap-2">
          <TransactionList />
          <Button variant="outline" className="w-full">Einzahlung / Auszahlung</Button>
        </div>
      </CardFooter>
    </Card>
  )
}
