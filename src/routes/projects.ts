import mvCasino from '$lib/images/mv-casino.png?w=1500&webp'
import grapeCasino from '$lib/images/grape-casino.png?w=1500&webp'
import alphag3n from '$lib/images/alphag3n.png?w=1500&webp'
import maven from '$lib/images/maven.png?w=1500&webp'

export default [
  {
    name: 'Miniverse Casino',
    link: 'https://mvcasino.mvfinance.club',
    desc: `Miniverse Casino is a centralized casino that runs on the Fantom Opera network.`,
    img: mvCasino,
    color: 'linear-gradient(45deg, rgba(106, 135, 186, 0.5) 0%, rgb(183, 169, 238) 100%)'
  },
  {
    name: 'Grape Casino',
    link: 'https://casino.grapefinance.app',
    desc: `Grape Casino is a decentralized casino that runs on the Fantom Opera network.`,
    img: grapeCasino,
    color: 'linear-gradient(289deg, rgba(85, 32, 148, 0.5) 0%, rgb(126, 145, 232) 100%)'
  },
  {
    name: 'Alphag3n',
    link: 'https://alphag3n.com',
    desc: `Alphag3n is a place where highschoolers can learn about blockchain and cryptocurrency. Currently sponsored by Coinbase.`,
    img: alphag3n,
    color: 'rgba(183,131,248, 0.5)'
  },
  {
    name: 'Maven',
    link: '',
    desc: `Maven is a platform for AI powered social media management. Coming soon...`,
    img: maven,
    color: 'linear-gradient(110deg, rgba(232, 246, 248, 0.5) 0,#eae7ff 100%)'
  }
] as const
