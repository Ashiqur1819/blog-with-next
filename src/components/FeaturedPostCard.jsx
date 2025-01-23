

const FeaturedPostCard = ({title}) => {
    return (
        <div className="bg-gray-100 p-3 rounded-sm shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
        </div>
    );
};

export default FeaturedPostCard;