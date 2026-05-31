"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supaBaseClient';
import { HugeiconsIcon } from "@hugeicons/react";
import { TransactionHistoryIcon } from "@hugeicons/core-free-icons";


export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [open, setOpen] = useState(false);

  
  useEffect(() =>{
    fetchTransactions();
  },[]);
  
  const fetchTransactions = async () => {
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .order('timestamp', { ascending: false })

    if (error) {
      console.error(error);
      return;
    }

    setTransactions(data || [])
  }
  
  const formatDate = (timestamp) => {
    if (!timestamp) return ''

    const d = new Date(timestamp)

    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = String(d.getFullYear()).slice(-2)

    return `${day}.${month}.${year}`
  }
  
  
  return (
    <>
    {/* Button to open modal */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10 flex"
      >
        <HugeiconsIcon icon={TransactionHistoryIcon} size={18} className='me-2' />
        Liste der Transaktionen
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* modal */}
          <div className="relative h-[70vh] w-[92vw] sm:w-[70vw] lg:w-[55vw] max-w-4xl bg-white rounded-lg shadow-xl flex flex-col">

            {/* header */}
            <div className="p-4 flex justify-between items-center bg-white">
              <h3 className="font-semibold">Geld rein - Geld raus</h3>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            {/* body */}
            <div className="px-4 pb-4 h-[70vh] overflow-y-auto  scrollbar-thumb-sky-700 scrollbar-track-sky-100 bg-white">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-blue-50 text-xs uppercase text-gray-600 z-10">
                  <tr>
                    <th className="text-left px-3 py-2">Datum</th>
                    <th className="text-right px-3 py-2">Betrag</th>
                    <th className="text-left px-3 py-2">Notiz</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {transactions.map((trans) => {
                    const isExpense = trans.amount < 0

                    return (
                      <tr key={trans.id} className="hover:bg-gray-50">
                        <td className="px-3 py-2 font-mono">
                          {formatDate(trans.timestamp)}
                        </td>

                        <td className={`px-3 py-2 text-right font-mono whitespace-nowrap w-32 ${isExpense ? "text-red-500" : "text-green-600"
                          }`}>
                          {isExpense ? "-" : "+"}
                          {Math.abs(trans.amount).toFixed(2)} €
                        </td>

                        <td className="px-3 py-2">
                          {trans.note}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
