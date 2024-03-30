import { getSinglePhoto } from "@/lib/image-data"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
    const { id } = params
    const photo = await getSinglePhoto(id)
    return NextResponse.json(photo)
}