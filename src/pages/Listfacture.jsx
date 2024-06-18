import Tablefacture from "../components/Tablefacture";

const Listfacture = () => {
  return (
    <section className="p-4 bg-[#FBF8F6] h-screen w-full flex flex-row">
      <div className="w-full h-full ml-4 flex flex-row">
        <div className="w-2/3 bg-[#F3EBE5] h-full mr-2 rounded-lg">
          <Tablefacture />
        </div>
        <div className="w-1/3 bg-blue-400 h-full ml-2"></div>
      </div>
    </section>
  );
};

export default Listfacture;
