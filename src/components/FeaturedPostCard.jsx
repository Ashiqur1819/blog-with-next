import Link from "next/link";

const FeaturedPostCard = ({ title, id }) => {
  return (
    <div className="bg-gray-100 p-3 rounded-sm shadow-sm">
      <Link href={`/blog/${id}`}>
        <h2 className="text-xl font-semibold text-blue-950">{title}</h2>
      </Link>
    </div>
  );
};

export default FeaturedPostCard;
