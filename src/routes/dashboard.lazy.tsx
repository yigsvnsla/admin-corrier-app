import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <>
      <div className="h-screen w-screen antialiased">
        <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
          navbar
        </nav>
        {/* <AsideMenu /> */}
        <aside
          className="fixed top-0 left-0 z-40 w-64 h-screen mt-[2.8rem] p-4 transition-transform -translate-x-full border-r border-gray-200 md:translate-x-0 bg-primary-foreground dark:border-gray-700"
          aria-label="Sidenav"
          id="drawer-navigation"
        >
          dasdsa
          {/* <div className="flex h-full flex-col overflow-y-auto border-r border-slate-200  px-3 py-4 dark:border-slate-700 dark:bg-slate-900">
            dasdsa
          </div> */}
        </aside>
        <main className="p-4 md:ml-64 h-auto pt-20">asdasdas main</main>
      </div>
    </>
  );
}
