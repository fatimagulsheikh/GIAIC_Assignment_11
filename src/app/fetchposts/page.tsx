// // "use client"

// // import { useState, useEffect } from "react"
// // export default function FetchPostsPage() {
// //     const [posts, setPosts] = useState([])
// //     const [ error, setError] = useState("")
// //     const [loading, setLoading] = useState(true)
// //     useEffect( () => {
// //         fetch("/api/external")
// //         .then((res) => res.json())
// //         .then((data) => {
// //             if(data.success){
// //                 setPosts(data.data)
// //             }else {
// //                 setError(data.message)
// //             }
// //         })
// //         .catch((err) => setError("An expected error"))
// //         .finally(() => setLoading(false))
// //     }, [])
// //      // if(loading) return <p>loading</p>
// //      return (
// //         <div className="max-w-6xl mx-auto p-4 bg-gradient-to-r from-purple-500 to-pink-500">
         
// //             <h1 className="text-center text-5xl font-bold mb-4 text-white">Posts</h1>
// //             <div className="flex flex-col gap-4">
// //                 {posts.map((post: {id: number; title: string ; body:string}) => (
// //                     <div key={post.id} className="bg-gray-100 border border-gray-300 p-4 rounded-lg hover:bg-gray-200 bg-gradient-to-r from-purple-200 to-pink-200">
                   
// //                        Title: <span className="text-lg font-sans block mb-2 text-purple-700">{post.title}</span>
// //                        Description: <span className="text-lg font-sans block text-pink-700">{post.body}</span>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     )
// // }















// "use client";

// import { useState, useEffect } from "react";

// export default function FetchPostsPage() {
//   const [posts, setPosts] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("/api/external")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setPosts(data.data);
//         } else {
//           setError(data.message);
//         }
//       })
//       .catch(() => setError("An unexpected error occurred"))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white">
//         <p className="text-2xl font-semibold animate-pulse">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg shadow-lg">
//       <h1 className="text-center text-4xl font-bold mb-8">
//         Latest <span className="text-yellow-300">Posts</span>
//       </h1>

//       {error ? (
//         <p className="text-center bg-red-100 text-red-700 py-2 px-4 rounded-lg font-medium">
//           {error}
//         </p>
//       ) : (
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {posts.map((post: { id: number; title: string; body: string }) => (
//             <div
//               key={post.id}
//               className="bg-white text-gray-800 p-6 rounded-xl shadow-md transform transition-transform hover:scale-105 hover:shadow-lg"
//             >
//               <h2 className="text-2xl font-bold mb-2 text-purple-700">{post.title}</h2>
//               <p className="text-gray-600">{post.body}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
















"use client";

import { useState, useEffect } from "react";

export default function FetchPostsPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/external")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPosts(data.data);
        } else {
          setError(data.message);
        }
      })
      .catch(() => setError("An unexpected error occurred"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-800 to-purple-600 text-white">
        <p className="text-3xl font-extrabold animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-tr from-indigo-800 via-purple-700 to-pink-600 text-white rounded-lg shadow-2xl">
      <h1 className="text-center text-5xl font-extrabold mb-12">
        Latest <span className="text-yellow-300">Posts</span>
      </h1>

      {error ? (
        <div className="flex justify-center">
          <p className="text-center bg-red-100 text-red-700 py-4 px-6 rounded-lg font-semibold shadow-lg">
            {error}
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: { id: number; title: string; body: string }) => (
            <div
              key={post.id}
              className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transform transition-transform hover:scale-105 group"
            >
              <h2 className="text-2xl font-bold mb-3 text-purple-800 group-hover:text-pink-600">
                {post.title}
              </h2>
              <p className="text-gray-700 text-lg">{post.body}</p>
              <div className="mt-4">
                <button className="px-4 py-2 bg-purple-700 text-white font-medium rounded-full shadow-md transition-all hover:bg-pink-600 hover:shadow-lg">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
