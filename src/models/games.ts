class Game {
  category: string
  discription: string
  image: string
  system: string
  title: string
  infos: string[]
  id: number

  constructor(
    id: number,
    infos: string[],
    title: string,
    system: string,
    image: string,
    discription: string,
    category: string
  ) {
    this.category = category
    this.discription = discription
    this.id = id
    this.image = image
    this.infos = infos
    this.system = system
    this.title = title
  }
}
export default Game
