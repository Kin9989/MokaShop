import { Link } from "react-router-dom";
// import logo from "../Navbar/logo3.png";
import NotFound from './404NotFound.svg'

// import NotFound from './404NotFound.svg'

export default function NotAuthorised() {
  return (
    <>
      <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <a href="/" className="inline-flex">
              {/* <img className="h-12 w-auto" src={logo} alt="i-novotek logo" /> */}
            </a>
          </div>
          <div className="py-16">
            <div className="text-center">
              {/* <img src={NotFound}/> */}
              <p className="text-base font-semibold text-indigo-600">404</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Sorry, operation not allowed kkk
              </h1>
              <img src={NotFound} className="h-[400px] mx-auto"/>
              <p className="mt-2 text-base text-gray-500">
                Login or create account to continue
              </p>
              <div className="mt-6">
                <Link
                  to="/login"
                  className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                  Login
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <footer className="mx-auto w-full max-w-7xl flex-shrink-0 px-6 lg:px-8">
          <nav className="flex justify-center space-x-4">
            <Link
              to="/"
              className="text-sm font-medium text-gray-500 hover:text-gray-600">
              Go Home
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}