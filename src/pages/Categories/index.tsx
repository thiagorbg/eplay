import ProductsList from '../../components/ProductsList'

import {
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetAcitionGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: actionGames } = useGetAcitionGamesQuery()

  if (sportGames && simulationGames && fightGames && rpgGames && actionGames) {
    return (
      <>
        <ProductsList games={actionGames} title="Ação" background="black" />
        <ProductsList games={sportGames} title="Esportes" background="gray" />
        <ProductsList games={fightGames} title="Luta" background="black" />
        <ProductsList games={rpgGames} title="RPG" background="gray" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default Categories
