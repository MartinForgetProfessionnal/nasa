import React, { useState, useEffect } from "react"
import './PictureOfDay.scss'

const API_KEY = "iMGgQ8VohqSVq492fY2R2WLW5zTR8ouYWfgPwKFE";
// const API_KEY = "DEMO_KEY"

export default function PictureOfDay() {

  const [photoData, setPhotoData] = useState(null);

  // Appel à l'API pour la photo du jour de la NASA
  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
      );
      // Établissement du state de photoData qui retourne la photo
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  // condition qui retourne une division vide si l'API n'a rien retourné
  if (!photoData) return <div />;

  return (
    <div className="dayPicWrapper">
      <div className="nasa-photo">
        {/* Condition qui établie si c'est une image ou une vidéo qui est retournée */}
        {photoData.media_type === "image" ? (
          // Affichage de l'image
          <img
            src={photoData.hdurl}
            alt={photoData.title}
            className="photo"
          />
        ) : (
          // iframe au cas ou l'API retournerait une vidéo
          <iframe
            title="space-video"
            src={photoData.url}
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
        {/* Informations complémentaires */}
        <div className="picDayText">
          <h1>{photoData.title}</h1>
          <p className="date">{photoData.date}</p>
          <p className="explanation">{photoData.explanation}</p>
        </div>
      </div>
    </div>
  );
}
