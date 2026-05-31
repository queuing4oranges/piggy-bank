import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();

  cookieStore.set("auth", "true", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 2, // 2 hours
  });

  return Response.json({ ok: true });
}