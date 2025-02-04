import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


// ログイン不要のページを指定
const isPublicRoute = createRouteMatcher(["/"]);

export default clerkMiddleware((auth, request) => {
    if(!isPublicRoute(request)){
        auth().protect();
    }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};