import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";

export default function LockedContent() {
  return (
    <Card className="flex flex-col items-center justify-center">
      <CardHeader className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">🚧</h1>
        <h1 className="text-3xl font-bold">404</h1>
      </CardHeader>
      <CardContent>
        <p className="mt-2 text-2xl text-gray-600">
          Hier gibt's nichts zu sehen.
        </p>
      </CardContent>
      <CardFooter>
        <Link
          href="/"
          className="btn rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10 flex"
        >
          Zurück
        </Link>
      </CardFooter>
    </Card>
  );
}
