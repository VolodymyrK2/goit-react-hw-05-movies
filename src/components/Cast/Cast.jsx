import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from 'api/Api';
function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    Api.getCast(movieId).then(result => {
      const castList = result.cast.map(({cast_id: castId, character, name, profile_path: profileUrl }) => {
        return { castId, character, name, profileUrl }
      })
      setCast(castList)
    })
  }, [movieId])
    return (
     <ul>
      {cast  && cast.map(({ castId, character, name, profileUrl }) => (
        <li key={castId}>
          {profileUrl&&<img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${profileUrl}`} alt='' />}
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>)
      )}
    </ul>
  )
}

export default Cast