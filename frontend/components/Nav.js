import Link from "next/link";
import { useRouter } from "next/router";
import { unsetToken } from "../lib/auth";

const Nav = ({ categories }) => {
  const router = useRouter();

  const logout = () => {
    unsetToken();
    router.push("/");
  };

  return (
    <nav className="flex flex-wrap items-center justify-between w-full p-2 md:py-0 text-lg text-gray-700 bg-white shadow-[0_4px_8px_0px_rgba(0,0,0,0.25)] fixed">
      <div>
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="m-3"
            src="/parabolic-logo-nav.png"
            width={200}
            height={50}
            alt="Parabolic Logo"
          />
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/200/svg"
        id="menu-button"
        className="h6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <div
        className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul className="pt-4 text-sm uppercase text-gray-700 md:flex md:justify-between md:pt-0 space-x-2 mb-0">
          {categories &&
            categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link
                    href={`/category/${category.attributes.slug}`}
                    className="p-3 block hover:bg-[#ffb80b]"
                  >
                    {category.attributes.name}
                  </Link>
                </li>
              );
            })}
          <li>
            <Link href="/portfolios" className="p-3 block hover:bg-[#ffb80b]">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/master-class" className="p-3 block hover:bg-[#ffb80b]">
              Master Class
            </Link>
          </li>
          <li>
            <Link href="/about" className="p-3 block hover:bg-[#ffb80b]">
              About
            </Link>
          </li>
          <li>
            <Link href="/faq" className="p-3 block hover:bg-[#ffb80b]">
              Faq
            </Link>
          </li>
        </ul>
        <a
          className="ml-2.5 py-1.5 px-5 block text-white font-semibold hover:text-[#212b38] bg-[#00ae42] rounded-full hover:bg-[#50ce50] cursor-pointer"
          onClick={logout}
        >
          LOGOUT
        </a>
      </div>
    </nav>
  );
};

export default Nav;
