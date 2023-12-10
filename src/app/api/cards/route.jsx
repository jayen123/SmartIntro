import { cards } from "@/library/db";
import { NextResponse } from "next/server";

export function GET () {
    const data = cards;
    return NextResponse.json(data,{status: 200})
}