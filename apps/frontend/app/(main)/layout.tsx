import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-800">
      <Header />
      <main className="flex-grow pt-8 pb-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
