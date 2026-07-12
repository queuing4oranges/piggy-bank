import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { supabase } from '@/lib/supaBaseClient';
import Budget from './Budget';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

export default async function BudgetDisplay() {
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .order('timestamp', { ascending: false })

  if (error) {
    console.error(error);
  }

  const transactions = data || [];

  return (
    <Card>
      <CardHeader className='flex items-center justify-center'>
        <CardTitle><h1>Miquels Budget</h1></CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col items-center justify-center'>
        <h3>Verfügbarer Betrag</h3>
        <Budget transactions={transactions} />
      </CardContent>
      <CardFooter>
        <div className="flex flex-col items-center gap-2">
          <TransactionList transactions={transactions} />
          <TransactionForm />
        </div>
      </CardFooter>
    </Card>
  )
}
