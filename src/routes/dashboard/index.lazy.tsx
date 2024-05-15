import { Aside } from '@/components/AsideMenu';
import { Outlet, createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/dashboard/')({
  component: Dashboard,
});

function Dashboard() {
  return (
    <section className="antialiased">
      {/* <Aside /> */}
      <main className="flex min-h-screen flex-col p-4  dark:text-gray-200 md:ml-64">
        dasdas
        <Outlet />
      </main>
    </section>
  );
}
