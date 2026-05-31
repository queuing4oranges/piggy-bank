"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Login() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async () => {
    if (password === process.env.NEXT_PUBLIC_APP_PASSWORD) {
      await fetch("/login/set-cookie", {
        method: "POST",
      });

      router.push("/make-transaction");
    } else {
      toast.error(
        <p className="text-xl font-bold">🤡🤡🤡 Das gibt ne Anzeige! 🤡🤡🤡</p>,
        {
          icon: false
        }
      );
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <Card className="min-w-82 p-5">
        <CardHeader><CardTitle>Los, Passwort her!</CardTitle></CardHeader>
        <CardContent>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/" className="btn rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10 flex">
            Zurück
          </Link>
          <button
            onClick={login}
            className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10 flex"
          >
            Login
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}