export const authConfig = {
    pages: {
      signIn: "/login",
    },
    providers: [],
    callbacks: {

        async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
          token.isAdmin = user.isAdmin;
        }
        return token;
      },
      async session({ session, token }) {
        if (token) {
          session.user.id = token.id;
          session.user.isAdmin = token.isAdmin;
        }
        return session;
      },
      authorized({ auth, request }) {
        const user = auth?.user;
        const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
        const isOnBookingPage = request.nextUrl?.pathname.startsWith("/booking");
        const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
        const isOnBookPage = request.nextUrl?.pathname.startsWith("/book");
  
    
  
        if (isOnAdminPanel && !user?.isAdmin) {
          return false;
        }
  
    
  
        if (isOnBookingPage && !user) {
          return false;
        }


        if (isOnBookPage && !user) {
          return false;
        }
  
       
  
        if (isOnLoginPage && user) {
          return Response.redirect(new URL("/", request.nextUrl));
        }
  
        return true
      },
    },
  };