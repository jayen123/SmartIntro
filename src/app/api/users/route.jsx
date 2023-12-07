import { users } from "@/library/db";
import { NextResponse } from "next/server";

export function GET (request,content) {
    const data = users;
    return NextResponse.json(data,{status : 200})
}