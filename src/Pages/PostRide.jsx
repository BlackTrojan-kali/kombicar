// src/pages/PostRidePage.js
import React, { useState } from 'react';

const PostRidePage = () => {
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    date: '',
    time: '',
    price: '',
    seats: '',
    description: ''
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Réinitialise le message
    setIsSuccess(false);

    // Valider les données (exemple simple)
    if (!formData.departure || !formData.destination || !formData.date || !formData.time || !formData.price || !formData.seats) {
      setMessage('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    try {
      // Dans une application réelle, vous enverriez ces données à votre API
      console.log('Données du trajet à envoyer:', formData);
      // Simule un appel API
      await new Promise(resolve => setTimeout(resolve, 1500));

      setMessage('Votre trajet a été publié avec succès ! 🎉');
      setIsSuccess(true);
      // Réinitialiser le formulaire après succès
      setFormData({
        departure: '',
        destination: '',
        date: '',
        time: '',
        price: '',
        seats: '',
        description: ''
      });
    } catch (error) {
      setMessage('Erreur lors de la publication du trajet. Veuillez réessayer. 😟');
      setIsSuccess(false);
      console.error('Erreur:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Proposer un trajet</h1>
      {message && (
        <div className={`p-4 mb-6 rounded-lg font-semibold text-center ${isSuccess ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="departure" className="block text-gray-700 text-sm font-bold mb-2">
              Départ:
            </label>
            <input
              type="text"
              id="departure"
              name="departure"
              value={formData.departure}
              onChange={handleChange}
              placeholder="Ex: Yaoundé"
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="destination" className="block text-gray-700 text-sm font-bold mb-2">
              Destination:
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Ex: Douala"
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">
              Heure de départ:
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
              Prix par place (FCFA):
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              step="500"
              placeholder="Ex: 5000"
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="seats" className="block text-gray-700 text-sm font-bold mb-2">
              Nombre de places disponibles:
            </label>
            <input
              type="number"
              id="seats"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              min="1"
              max="8"
              placeholder="Ex: 3"
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description (optionnel):
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Informations supplémentaires sur le trajet, les pauses, etc."
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
        >
          Publier le trajet
        </button>
      </form>
    </div>
  );
};

export default PostRidePage;