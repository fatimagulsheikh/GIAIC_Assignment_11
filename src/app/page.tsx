// import Image from "next/image";
// import Hersection from "./components/Hersection";
// import FetchPostsPage from "./fetchposts/page";

// export default function Home() {
//   return (
//     <div>
//       <div className='m-6'>
//         <Hersection />
//         <FetchPostsPage />
//       </div>
//     </div>
//   );
// }













import Image from "next/image";
import Hersection from "./components/Hersection";
import FetchPostsPage from "./fetchposts/page";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen">
      {/* Header Section */}
      <header className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-md py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-white uppercase tracking-wider">
            Welcome to <span className="text-yellow-300">TechWorld</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-12">
          <Hersection />
        </section>

        {/* Posts Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
            Latest <span className="text-purple-600">Posts</span>
          </h2>
          <FetchPostsPage />
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-gray-300 py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} TechWorld. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
