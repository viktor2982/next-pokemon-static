import { useEffect, useState } from 'react';

import { Layout } from '../../components/layouts'
import { PokemonFavorites } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {

  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokémons - Favoritos">

      {favorites.length === 0
        ? <NoFavorites />
        : <PokemonFavorites favorites={favorites} />
      }     

    </Layout>
  )
}

export default FavoritesPage;