import Link from "next/link";

const routes = [
  {
    value: "ABOUT",
    path: "#about",
  },
  {
    value: "EXPERIENCE",
    path: "#experience",
  },
  {
    value: "PROJECTS",
    path: "#projects",
  },
  {
    value: "CONTACT",
    path: "#contact",
  },
];

export default function Navbar() {
  return (
    <nav className="absolute inset-x-0 top-0 z-50 h-[100px]">
      {/* Logo */}
      <Link
        id="nav-logo"
        href="/"
        className="absolute top-[50px] -translate-x-1/2 -translate-y-1/2 text-xl font-bold tracking-[-0.05em] text-[#f8f5ff]"
        style={{
          left: "var(--page-padding)",
        }}
      >
        AB
      </Link>

      {/* Navigation */}
      <div className="absolute right-[var(--page-padding)] top-[50px] flex -translate-y-1/2 items-center gap-12 text-md font-medium text-white">
        {routes.map((route) => {
          return (
            <a
              key={route.path}
              href={route.path}
              className="transition-colors duration-200 hover:text-white"
            >
              {route.value}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
