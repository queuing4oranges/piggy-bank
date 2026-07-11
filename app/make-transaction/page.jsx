import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { HugeiconsIcon } from "@hugeicons/react";
import { InboxUploadIcon, Download02Icon } from "@hugeicons/core-free-icons";
import Deposit from './Deposit';
import Payout from './Payout';
import Link from 'next/link';

export default function CreateTransaction() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <Card className="sm:w-[30vw] w-[80vw] h-[50vh] p-5">
        <CardHeader className='flex items-center justify-center'>
          <CardTitle><h1>Einzahlung und Auszahlung</h1></CardTitle>
        </CardHeader>

        <CardContent className='bg-grey flex flex-col items-start justify-center'>
          <Tabs defaultValue="einzahlung">
            <TabsList>
              <TabsTrigger value="einzahlung">
                <HugeiconsIcon icon={Download02Icon} size={18} className='me-2' />
                Einzahlung
              </TabsTrigger>
              <TabsTrigger value="auszahlung">
                <HugeiconsIcon icon={InboxUploadIcon} size={18} className='me-2' />
                Auszahlung
              </TabsTrigger>
            </TabsList>
            <TabsContent value="einzahlung">
              <Deposit />
            </TabsContent>
            <TabsContent value="auszahlung">
              <Payout />
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="h-48 border-t-2 border-gray-300 flex flex-col items-center justify-center mt-5">
          <Link href="/" className="w-full btn rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10 flex justify-center">
            Zurück zum Start
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
