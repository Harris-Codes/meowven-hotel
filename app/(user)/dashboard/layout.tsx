import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-stone-100">
      {/* 1. The Sidebar stays fixed on the left */}
      <Sidebar />

      {/* 2. The dynamic content (Grooming, Daycare, etc.) goes on the right */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}