import mvCasino from '$lib/images/mv-casino.png?w=1500&webp'
import grapeCasino from '$lib/images/grape-casino.png?w=1500&webp'
import maven from '$lib/images/maven.png?w=1500&webp'

export default [
  {
    name: 'Miniverse Casino',
    description: `Miniverse Casino is a centralized casino that runs on the Fantom Opera network.`,
    image: mvCasino,
    color: 'linear-gradient(45deg, rgb(106, 135, 186) 0%, rgb(183, 169, 238) 100%)'
  },
  {
    name: 'Grape Casino',
    description: `Grape Casino is a decentralized casino that runs on the Fantom Opera network.`,
    image: grapeCasino,
    color: 'linear-gradient(289deg, rgb(85, 32, 148) 0%, rgb(126, 145, 232) 100%)'
  },
  {
    name: 'Alphag3n',
    description: `Alphag3n is a place where highschoolers can learn about blockchain and cryptocurrency. Currently sponsored by Coinbase.`,
    image: mvCasino,
    color: 'rgb(183,131,248)'
  },
  {
    name: 'Maven',
    description: `Maven is a platform for AI powered social media management.`,
    image: maven,
    color: 'linear-gradient(110deg,#e8f6f8 0,#eae7ff 100%)'
  }
] as const
