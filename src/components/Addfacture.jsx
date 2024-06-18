import { useState } from 'react';
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Addarticle from './Addarticle'

const Addfacture = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const idFacture = event.target.elements.idFacture.value;
    const dateFacture = event.target.elements.dateFacture.value;
    const factureA = event.target.elements.factureA.value;

    let existingFactureData;
    try {
      existingFactureData = JSON.parse(localStorage.getItem("factureData"));
      if (!Array.isArray(existingFactureData)) {
        existingFactureData = [];
      }
    } catch (error) {
      existingFactureData = [];
    }

    const newFacture = {
      idFacture,
      dateFacture,
      factureA,
    };

    const idExists = existingFactureData.some(
      (EX) => EX.idFacture === newFacture.idFacture
    );

    if (idExists) {
      console.log(`id ${newFacture.idFacture} already exists, try another one`);
    } else {
      existingFactureData.push(newFacture);
      localStorage.setItem("factureData", JSON.stringify(existingFactureData));
      alert("Facture saved to localStorage!");

      event.target.elements.idFacture.value = '';
      event.target.elements.dateFacture.value = '';
      event.target.elements.factureA.value = '';
    }
  };

  return (
    <div className="bg-[#F3EBE5] p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Ajouter Facture</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="idFacture" className="block text-gray-700 mb-2">
            id Facture
          </label>
          <input
            type="text"
            id="idFacture"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dateFacture" className="block text-gray-700 mb-2">
            Date facture
          </label>
          <input
            type="date"
            id="dateFacture"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="factureA" className="block text-gray-700 mb-2">
            Facture a
          </label>
          <select
            id="factureA"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          >
            <option value="">Select</option>
            <option value="societe A">societe A</option>
            <option value="societe B">societe B</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Ajoute facture
          </button>
        </div>
      </form>

      <div className="flex justify-center mt-60 w-full">
        <Button variant="outlined" endIcon={<ArrowForwardIosRoundedIcon />} onClick={handleClickOpen}>
          Ajouter articles
        </Button>
      </div>

      <Dialog open={open} onClose={handleClose} className="full-screen-dialog">
        <DialogTitle>Ajouter Article</DialogTitle>
        <DialogContent>
          <Addarticle />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Addfacture;
