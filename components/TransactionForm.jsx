"use client";

import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDataTransferDiagonalIcon } from "@hugeicons/core-free-icons";

export default function TransactionForm() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/login")}
      className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10 flex"
    >
      <HugeiconsIcon icon={ArrowDataTransferDiagonalIcon} size={18} className='me-2' />
      Einzahlung / Auszahlung
    </button>
  )
}
