import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GetApi from 'services/ThemoviedbApi/Api';
import { CastItem } from './CastItem/CastItem';
import { CastList } from './Cast.styled';
const BASE_IMAGE_URL = `https://image.tmdb.org/t/p/w500`;
const PlACEHOLDER_IMAGE_URL = `https://via.placeholder.com/100x150`;

// const Cast = () => {
//   const { movieId } = useParams();
//   const [cast, setCast] = useState([]);

//   useEffect(() => {
//     getCredits();

//     async function getCredits() {
//       try {
//         const getCast = await GetApi.getMovieCredits(movieId);
//         const actors = getCast.length > 16 ? getCast.slice(0, 16) : getCast;
//         console.log(actors);
//         setCast(actors);
//         console.log(actors);
//       } catch (error) {
//         console.log(`something wrong, error`);
//       }
//     }
//   }, [movieId]);

//   if (!cast) return null;

//   return (
//     <CastList>
//       {cast.map(({ id, profile_path, original_name, character }) => (
//         <CastItem
//           key={id}
//           imagePath={
//             profile_path ? BASE_IMAGE_URL + profile_path : PlACEHOLDER_IMAGE_URL
//           }
//           name={original_name}
//           character={character}
//         />
//       ))}
//     </CastList>
//   );
// };
// export default Cast;

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits();

    async function getMovieCredits() {
      try {
        const fetchCast = await GetApi.getMovieCredits(movieId);

        const actors =
          fetchCast.length > 16 ? fetchCast.slice(0, 16) : fetchCast;
        console.log(actors);
        setCast(actors);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId]);

  if (!cast) return null;

  return (
    <CastList>
      {cast.map(({ id, profile_path, original_name, character }) => (
        <CastItem
          key={id}
          imagePath={
            profile_path ? BASE_IMAGE_URL + profile_path : PlACEHOLDER_IMAGE_URL
          }
          name={original_name}
          character={character}
        />
      ))}
    </CastList>
  );
};

export default Cast;
