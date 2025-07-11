import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Updated icons
import ResultSidebar from '../Components/navigation/ResultSideBar';
import ResultCard from '../Components/ui/Cards/resultCard';

const FilteredResults = () => {
  // Mock data for demonstration - in a real app, this would come from an API call
  const trajets = [
    {
      id: 1,
      depart: "Yaoundé",
      arrivee: "Douala",
      heureDepart: "12h20",
      heureArrivee: "16h45",
      prix: 5000,
      chauffeur: {
        profile: "/assets/default/driver-1.jpg", // Example profile image
        username: "Alexandre D."
      },
      details: "Voyage confortable, petite pause à mi-parcours."
    },
    {
      id: 2,
      depart: "Yaoundé",
      arrivee: "Douala",
      heureDepart: "14h00",
      heureArrivee: "18h30",
      prix: 5500,
      chauffeur: {
        profile: "/assets/default/driver-2.jpg",
        username: "Béatrice K."
      },
      details: "Climatisé, musique au choix, idéal pour les professionnels."
    },
    {
      id: 3,
      depart: "Yaoundé",
      arrivee: "Douala",
      heureDepart: "08h00",
      heureArrivee: "12h15",
      prix: 4800,
      chauffeur: {
        profile: "/assets/default/driver-3.jpg",
        username: "Cédric L."
      },
      details: "Départ matinal, arrivée rapide, places limitées."
    },
    {
      id: 4,
      depart: "Yaoundé",
      arrivee: "Douala",
      heureDepart: "18h00",
      heureArrivee: "22h20",
      prix: 6000,
      chauffeur: {
        profile: "/assets/default/driver-4.jpg",
        username: "Dorothée P."
      },
      details: "Trajet de soirée, ambiance conviviale."
    }
  ];

  // Assuming current search parameters (these would typically come from context/state)
  const searchParams = {
    date: "Aujourd'hui",
    depart: "Yaoundé",
    arrivee: "Douala",
    country: "Cameroun"
  };

  return (
    <>
      <div className='pt-28 flex flex-col lg:flex-row bg-gray-50 min-h-screen'>
        {/* Sidebar for Filters */}
        <div className='w-full lg:w-1/4 p-4 lg:p-6 border-b lg:border-b-0 lg:border-r border-gray-200 bg-white shadow-sm'>
          <ResultSidebar />
        </div>

        {/* Main Content Area: Results List */}
        <div className='flex-1 p-4 lg:p-6'>
          {/* Results Summary Header */}
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-100'>
            <span className='flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 text-gray-700 mb-3 md:mb-0'>
              <b className='text-lg md:text-xl font-bold'>{searchParams.date}</b>
              <p className="text-gray-500 text-sm md:text-base flex items-center gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {searchParams.depart}, {searchParams.country}
                <FontAwesomeIcon icon={faArrowRight} className='mx-1' />
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {searchParams.arrivee}, {searchParams.country}
              </p>
            </span>
            <b className='text-xl md:text-2xl text-gray-800 font-extrabold'>
              {trajets ? trajets.length : 0} trajet(s) trouvé(s)
            </b>
          </div>

          {/* Sorting and Filter Options (could be more extensive) */}
          <div className='flex justify-end mb-6'>
            {/* Example: A simple sort dropdown */}
            <select
              className='p-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-green-500 focus:border-green-500'
              defaultValue="prix-croissant"
            >
              <option value="prix-croissant">Prix (le moins cher)</option>
              <option value="prix-decroissant">Prix (le plus cher)</option>
              <option value="heure-depart-croissant">Heure de départ (tôt)</option>
              <option value="heure-depart-decroissant">Heure de départ (tard)</option>
            </select>
          </div>

          {/* List of Result Cards */}
          <div className='flex flex-col gap-6'>
            {trajets.length > 0 ? (
              trajets.map((trajet) => (
                <ResultCard
                  key={trajet.id} // Important for lists in React
                  depart={trajet.depart}
                  arrivee={trajet.arrivee}
                  heureDepart={trajet.heureDepart}
                  heureArrivee={trajet.heureArrivee}
                  prix={trajet.prix}
                  chauffeur={trajet.chauffeur}
                  details={trajet.details} // Pass additional details if ResultCard supports it
                />
              ))
            ) : (
              <div className='text-center text-gray-600 p-10 bg-white rounded-lg shadow-md'>
                <p className='text-xl font-semibold'>Aucun trajet trouvé pour cette recherche.</p>
                <p className='mt-2'>Essayez de modifier vos critères de recherche.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilteredResults;