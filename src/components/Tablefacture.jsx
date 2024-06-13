import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';
import Search from './Search';

const Tablefacture = () => {
    const data = [
        { id: 1, client: 'Client A', montantHT: 100, montantTVA: 20, montantTTC: 120, details: 'Detail A' },
        { id: 2, client: 'Client B', montantHT: 200, montantTVA: 40, montantTTC: 240, details: 'Detail B' },
        { id: 3, client: 'Client C', montantHT: 300, montantTVA: 60, montantTTC: 360, details: 'Detail C' },
        // Add more data as needed
      ];
  return (
    <div className="container mx-auto ">

  <div className='w-full h-fit flex flex-row items-center justify-center my-2'>
      <div className='w-1/3'>
        <SwapVertRoundedIcon className="ml-4" />
      
        </div>
      <div className='w-1/3'>
      <Search />
        </div>
      <div className='w-1/3'>

      </div>
     
    </div>

  <hr className="h-[2px] bg-black mx-2"/>
    <table className="min-w-full bg-[#F3EBE5] rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 text-[#6E6B6B]">#</th>
            <th className="py-2 px-4 text-[#6E6B6B]">Nom de client</th>
            <th className="py-2 px-4 text-[#6E6B6B]">Montant HT</th>
            <th className="py-2 px-4 text-[#6E6B6B]">Montant TVA</th>
            <th className="py-2 px-4 text-[#6E6B6B]">Montant TTC</th>
            <th className="py-2 px-4 text-[#6E6B6B]">Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="text-center">
              <td className="py-2 px-4 text-black">{index + 1}</td>
              <td className="py-2 px-4 text-black">{item.client}</td>
              <td className="py-2 px-4 text-black">{item.montantHT} €</td>
              <td className="py-2 px-4 text-black">{item.montantTVA} €</td>
              <td className="py-2 px-4 text-black">{item.montantTTC} €</td>
              <td className="py-2 px-4 text-black">{item.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
  


export default Tablefacture