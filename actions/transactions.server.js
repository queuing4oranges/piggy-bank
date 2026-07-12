"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function addMoney(formData) {
  const supabase = await createServerSupabaseClient();
  
  if (!formData || formData.length < 1) return;
  const rawAmount = formData.get("amount") || null;
  const note = formData.get("note") || "";
  
  const amount = parseFloat(rawAmount?.replace(',', '.'));

  const { data, error } = await supabase
    .from("transactions")
    .insert({
      amount: Number(amount),
      note,
    })
    .select()
    .single();

  if (error) {
    return {
      success: false,
      message: error.message
    }
  }

  revalidatePath("/");
  redirect("/");

}

// export async function createAlbum(formData) {
//   const supabase = await createServerSupabaseClient();

//   const place = formData.get("place") || null;
//   const camera = formData.get("camera") || null;
//   const film_type = formData.get("film") || null;
//   const slug = formData.get("slug")?.trim() || null;

//   // create album in table
//   const { error } = await supabase
//     .from('albums')
//     .insert({
//       place,
//       camera,
//       film_type,
//       slug,
//     })
//     .select()

//   if (error) {
//     console.error(error.message);
//     return
//   }

//   // update UI
//   revalidatePath("/albums/create");
// }