import React from 'react';
import Link from 'next/link';
import { all } from '../middleware';

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center py-56 space-y-6">
      <h1 className="text-6xl font-semibold">Success!</h1>
      <p>Your Logged In</p>
      <Link href="/api/auth/logout"><p className="font-medium text-blue-600">Logout</p></Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  await all.run(context.req, context.res);
  if (!context.req.isAuthenticated()) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
  // eslint-disable-next-line prefer-const
  return { props: {} };
}
