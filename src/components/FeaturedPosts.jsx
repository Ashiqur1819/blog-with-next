import FeaturedPostCard from "./FeaturedPostCard";

const FeaturedPosts = async() => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()


    return (
      <div className="mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900">
          Featured Posts
        </h2>
        <p className="max-w-3xl text-center mx-auto mt-3 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          ratione nihil nostrum saepe, cupiditate aspernatur, aut autem
          dignissimos optio dolorem qui error officia porro soluta.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">{posts.map(post => <FeaturedPostCard title={post.title} id={post.id} key={post.id}></FeaturedPostCard>)}</div>
      </div>
    );
};

export default FeaturedPosts;