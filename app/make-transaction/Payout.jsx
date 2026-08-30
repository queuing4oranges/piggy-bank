"use client";

import React from 'react';
import { deductMoney } from '@/actions/transactions.server';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText
} from "@/components/ui/input-group";

export default function Payout() {
  
  const handleDeductMoney = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)

    const result = await deductMoney(formData);

    if (!result?.success) {
      console.warn(result?.message)
    }
  }
  //TODO make this reusable so DRY in payout and deposit
  return (
    <section>
      <form onSubmit={handleDeductMoney}>
        <div className="grid w-full max-w-sm gap-6">
          <InputGroup>
            <InputGroupAddon><InputGroupText>€</InputGroupText></InputGroupAddon>
            <InputGroupInput
              placeholder="0.00"
              type="text"
              id="amount"
              name="amount"
            />
            <InputGroupAddon align="inline-end"><InputGroupText>EUR</InputGroupText></InputGroupAddon>
          </InputGroup>
          
          <InputGroup>
            <InputGroupInput
              className="pl-0.5"
              type="text"
              id="note"
              name="note"
              />
            <InputGroupAddon align="inline-end"><InputGroupText>Notiz</InputGroupText></InputGroupAddon>
          </InputGroup>
        </div>
        <button
          type='submit'
          className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10 mt-5"
        >
          Auszahlen
        </button>
      </form>
    </section>
  )
}
