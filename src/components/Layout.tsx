import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col">
      <div className="container mx-auto px-4 py-4 mt-24">
        <section className="max-w-prose grid gap-9 m-auto text-gray-600 leading-relaxed">
          {children}
        </section>
      </div>
    </main>
  );
};

export default Layout;

