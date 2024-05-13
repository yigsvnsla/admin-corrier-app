export const Aside = () => {
  return (
    <aside
      id="drawer-navigation"
      aria-label="Sidenav"
      className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-primary-foreground p-4 transition-transform dark:border-neutral-800 md:translate-x-0">
      {/* dasdassSidebar component, swap this element with another sidebar if you like */}
      <header className="flex h-16 shrink-0 items-center gap-4">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=white"
          alt="Your Company"
        />
        <span className="text-xl font-semibold">Delivery Admin</span>
      </header>
      <section>content</section>
    </aside>
  );
};

const AsideHeader = ()=> {
  
}
