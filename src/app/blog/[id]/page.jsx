const Details = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto shadow-md p-12 border">
        <h3 className="text-lg font-semibold text-blue-950">
          User ID: {post.userId}
        </h3>
        <h2 className="text-2xl font-bold text-purple-900">{post.title}</h2>
        <p className="text-gray-600 text-justify mt-3">{post.body}</p>
      </div>
    </div>
  );
};

export default Details;
