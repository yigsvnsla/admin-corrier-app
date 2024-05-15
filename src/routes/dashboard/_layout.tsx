import { Aside } from '@/components/AsideMenu';
import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/_layout')({
  component: Layout,
});

function Layout() {
  return (
    <section className="antialiased">
      <Aside />
      <main className="flex min-h-screen flex-col p-4  dark:text-gray-200 md:ml-64">
        {/* Main content dashboard */}
        <Outlet />
      </main>
    </section>
  );
}
