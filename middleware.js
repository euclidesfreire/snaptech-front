import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = 'ae36c9a5d8e9cfc9026a34378e4a76ef1a892bc7d5ffb76e3c407ddc5db47a3a';

export async function middleware(req) {
  const token = req.cookies.get('authToken');
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    // Verificar o token JWT usando 'jose'
    const secret = new TextEncoder().encode(SECRET_KEY);
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/:path*'],
};

