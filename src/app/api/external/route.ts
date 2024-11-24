import { NextResponse } from 'next/server';

//external api URL
const EXTERNAL_API_URL = "https://jsonplaceholder.typicode.com/posts"

export async function GET() {
    try {
        const response = await fetch(EXTERNAL_API_URL)
        if (!response.ok) {
            return NextResponse.json(
                { success: false, message: "Failed Fetch the data from the API" },
                { status: response.status }
            )
        }
        const data = await response.json()

        return NextResponse.json({ seccess: true, data })
    } catch (error: any) {
        return NextResponse.json({ success: false, message: "Get the eror!", error: error.message })
    }
}
