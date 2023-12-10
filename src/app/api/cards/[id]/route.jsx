import { cards } from "@/library/db";
import { NextResponse } from "next/server";

export function GET (request,content) {
    const data = cards.filter((item) => item.id == content.params.id);
    return NextResponse.json(data.length == 0 ? {result : "No Data Found",success: false} : {result : data[0],status: 200})
}