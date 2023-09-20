import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET() {
  draftMode().disable();
  redirect(`/`);
  return NextResponse.json("Draft mode disabled.");
}
