import { FC } from "react";
import { Grid } from "@nextui-org/react"

import { PokemonFavoriteCard } from "./PokemonFavoriteCard";

interface Props {
    favorites: number[];
}

export const PokemonFavorites: FC<Props> = ({ favorites }) => {
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">
            {
                favorites.map(id => (
                    <PokemonFavoriteCard id={id} key={id} />
                ))
            }
        </Grid.Container>
    )
}
