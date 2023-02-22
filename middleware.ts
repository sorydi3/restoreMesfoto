import { NextRequest, NextResponse, userAgent } from 'next/server'
import app from "./pages/api/firebase";
import {useIdToken } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
const auth = getAuth(app);



export async function middleware(request: NextRequest) {
       //check if the user is authenticated and if not redirect to login page
       /*
       
       if(!auth.currentUser){
                     const url = request.nextUrl.clone()
                     url.pathname = '/login'
                     return NextResponse.rewrite(url)
       }
       */
       return NextResponse.next()
}

export const config = {
       matcher: ["/"]
}

