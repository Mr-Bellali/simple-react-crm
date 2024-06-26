import BallotRoundedIcon from '@mui/icons-material/BallotRounded';
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded';

const Sidebar = ({ activeButton, setActiveButton }) => {
  return (
    <nav className='w-[125px] h-screen bg-[#F3EBE5] rounded-lg flex flex-col '>
      <div className='h-1/3'>
        <img src="logo.png" alt="Logo" />
      </div>
      <div className='h-1/3 flex flex-col justify-center items-center space-y-4'>
        <button
          className={`w-[80px] h-[80px] rounded-full ${activeButton === 1 ? 'bg-black' : 'bg-white'}`}
          onClick={() => setActiveButton(1)}
        >
          <BallotRoundedIcon style={{ fontSize: 50, color: activeButton === 1 ? 'white' : 'black' }} />
        </button>
        <button
          className={`w-[80px] h-[80px] rounded-full ${activeButton === 2 ? 'bg-black' : 'bg-white'}`}
          onClick={() => setActiveButton(2)}
        >
          <LibraryAddRoundedIcon style={{ fontSize: 50, color: activeButton === 2 ? 'white' : 'black' }} />
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
