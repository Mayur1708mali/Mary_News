import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.API_KEY!;

export async function GET(request: NextRequest) {
  try {
    const { pathname } = new URL(request.url);
    const news = pathname.slice(5, pathname.length);

    const res = await fetch(`${process.env.URL}?q=${news}&apiKey=${API_KEY}`);
    const data = await res.json();
    // const articles = data.articles;
    return NextResponse.json({ data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
