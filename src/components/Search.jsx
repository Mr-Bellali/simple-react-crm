import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search = () => {
  return (
    <div className="relative">
    <SearchRoundedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2" />
      <input
        type="text"
        className="w-[300px] h-[40px] pl-10 pr-8 border border-black rounded-lg outline-none"
        placeholder="Rechercher..."
      />
    </div>
  );
};

export default Search;
