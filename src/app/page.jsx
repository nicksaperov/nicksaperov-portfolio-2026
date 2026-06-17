"use client";

import dynamic from 'next/dynamic';

// This disables SSR for the legacy React code, preventing hydration mismatches.
const PortfolioApp = dynamic(() => import('./AppClient'), { ssr: false });

export default function Home() {
  return <PortfolioApp />;
}