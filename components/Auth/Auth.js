// import { UserProvider } from '@auth0/nextjs-auth0/client';
// import NextAuth from 'next-auth'
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client"

export default function Auth() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
     <p>Welcome {user.name}</p><a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}
