import { Inter } from 'next/font/google'

import '../../../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div className={inter.className}>{children}</div>;
  }