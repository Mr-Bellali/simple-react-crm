
const Addarticle = () => {
  return (
    <div className="bg-[#F3EBE5] p-8 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Ajouter Article</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="idArticle" className="block text-gray-700 mb-2">
            id Article
          </label>
          <input
            type="text"
            id="idArticle"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nameArticle" className="block text-gray-700 mb-2">
            Name Article
          </label>
          <input
            type="text"
            id="nameArticle"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="priceArticle" className="block text-gray-700 mb-2">
            Price Article
          </label>
          <input
            type="number"
            id="priceArticle"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Add Article
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addarticle;
