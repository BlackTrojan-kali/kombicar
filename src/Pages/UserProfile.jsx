// src/pages/ProfileDetailsPage.js
import React, { useState, useEffect } from 'react';

const ProfileDetailsPage = ({ userId }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Dans une application réelle, vous feriez un appel API ici
    // pour récupérer les données du profil de l'utilisateur avec l'ID 'userId'.
    const fetchProfile = async () => {
      try {
        setLoading(true);
        // Simule un appel API
        const response = await new Promise(resolve => setTimeout(() => {
          resolve({
            id: userId,
            name: 'Jean Dupont',
            email: 'jean.dupont@example.com',
            bio: 'Passionné de voyages et conducteur expérimenté. J\'aime les discussions animées et la bonne musique en voiture.',
            avatar: '/assets/default/personne.jpg', // Exemple d'avatar
            rating: 4.8,
            reviewsCount: 120,
            verified: true,
          });
        }, 1000));
        setProfile(response);
      } catch (err) {
        setError('Erreur lors du chargement du profil.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-blue-600">Chargement du profil...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Profil introuvable.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mt-32 mx-auto my-10 p-8 bg-white rounded-lg shadow-xl">
      <div className="flex flex-col items-center border-b pb-6 mb-6 border-gray-200">
        <img
          src={profile.avatar}
          alt={`${profile.name}'s avatar`}
          className="w-36 h-36 rounded-full object-cover border-4 border-blue-500 shadow-md mb-4"
        />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{profile.name}</h1>
        <p className="text-lg text-gray-600 flex items-center">
          ⭐ {profile.rating} ({profile.reviewsCount} avis)
          {profile.verified && (
            <span className="ml-3 text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
              Vérifié
            </span>
          )}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2 border-gray-200">
          À propos de moi
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">{profile.bio}</p>
      </div>

      {/* Exemple de section additionnelle */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2 border-gray-200">
          Coordonnées
        </h2>
        <p className="text-gray-700 text-lg">Email: <span className="font-semibold">{profile.email}</span></p>
      </div>

      {/* Ajoutez d'autres sections ici, comme les trajets passés, les préférences, etc. */}
      {/*
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2 border-gray-200">
          Mes trajets récents
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>Paris à Lyon - 10/07/2025</li>
          <li>Marseille à Nice - 01/07/2025</li>
        </ul>
      </div>
      */}

      {/* Bouton pour modifier le profil, visible si c'est le profil de l'utilisateur connecté */}
      {/* <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
        Modifier le profil
      </button> */}
    </div>
  );
};

export default ProfileDetailsPage;