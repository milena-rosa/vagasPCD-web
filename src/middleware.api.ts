import { NextResponse, type NextRequest } from 'next/server'
import { protectedRoutes } from './routes'

const ROLES = {
  candidate: 'candidate',
  company: 'company',
  government: 'government',
} as Record<string, string>

export function middleware(request: NextRequest) {
  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    const token = request.cookies.get('vagasPCD.token')?.value

    if (!token) {
      const role = request.nextUrl.pathname
        .split('/')
        .find((value) => ROLES[value])

      if (!role) {
        throw new Error('lide com isso')
      }
      return NextResponse.redirect(
        new URL(`/login?role=${ROLES[role]}`, request.url),
      )
    }
  }
}

// export const config = {
//   matcher: [...protectedRoutes],
// }
