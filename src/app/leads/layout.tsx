'use client'

import GlobalNav from '@/app/components/global-nav'

export default function DashboardLayout({ children } : { children: React.ReactNode }) {
  return (
    <>
      <div>
        <GlobalNav />

        <div className="lg:pl-72">
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
                {children}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
