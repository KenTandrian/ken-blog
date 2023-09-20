import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  draftMode().enable();
  redirect(`/`);
  return NextResponse.json("Draft mode enabled.");
}
