interface TagParams {
    name: string
}

function Tag({
    name
}: TagParams) {
    return (
        <p className="text-sm  p-1 bg-gray-300 text-gray-600 rounded-md shadow-sm mr-1">{name}</p>
    );
}

export default Tag;