

const EmptyState = () => {
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="bg-white p-8 rounded-xl text-center w-[350px]">
        <p className="text-gray-500 mb-3">Your shelves are empty</p>
        <p className="text-xs text-gray-400 mb-4">
          Add your first product and start selling. It only takes a minute.
        </p>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm">
          Add Your First Product
        </button>
      </div>
    </div>
  );
}

export default EmptyState;