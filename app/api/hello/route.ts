import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

// export function handler(req: NextApiRequest, res: NextApiResponse) {
//     res.status(200).json({ message: 'Hello from API' });
// } 3


export async function GET(req: NextRequest, res: any) {

    return NextResponse.json({ status: 200, message: "hello" });
}