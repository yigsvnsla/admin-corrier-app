import { Link } from '@tanstack/react-router';
import { Home, User } from 'lucide-react';

export const Aside = () => {



  return (
    <aside
      id="drawer-navigation"
      aria-label="Sidenav"
      className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-primary-foreground  transition-transform dark:border-neutral-800 md:translate-x-0">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <header className="flex h-12 shrink-0 items-center gap-4 p-4 ">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=white"
          alt="Your Company"
        />
        <span className="text-xl font-semibold">Delivery Admin</span>
      </header>
      <section>
        <div className="grid items-start gap-1 p-2 ">
          <Link
            className="group flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            to="/dashboard">
            <Home className="ml-2 size-3" />
            Home
          </Link>

          <Link
            className="group flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            to="/dashboard">
            <Home className="ml-2 size-3" />
            Home
          </Link>

          <Link
            className="group flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium capitalize hover:bg-accent hover:text-accent-foreground"
            to="/dashboard">
            <User className="ml-2 size-3" />
            user management
          </Link>
        </div>
      </section>
    </aside>
  );
};
