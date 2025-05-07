export const revalidate = 60;

export async function GET() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  return Response.json(posts);
}

import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}