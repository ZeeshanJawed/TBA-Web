import { NextRequest, NextResponse } from "next/server"
import { getAllPostsForHome } from "../../../lib/api"
import { NextApiRequest, NextApiResponse } from "next"

export async function GET(req: any, res: any) {

    const page: any = req?.query?.page || 1
    // return all post for home page
    const data = await getAllPostsForHome(page)

    // seperate post and meta data (pagination etc)
    const meta = data.meta
    delete data.meta

    return NextResponse.json({ status: 200, posts: data, meta: meta });


}