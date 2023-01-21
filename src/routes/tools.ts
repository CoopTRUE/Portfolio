import express from '$lib/svgs/express.svg'
import svelte from '$lib/svgs/svelte.svg'
import typescript from '$lib/svgs/typescript.svg'
import python from '$lib/svgs/python.svg'
import ethers from '$lib/svgs/ethers.svg'
import sass from '$lib/svgs/sass.svg'
import mysql from '$lib/svgs/mysql.svg'
import prisma from '$lib/svgs/prisma.svg'

interface Tool {
  name: string
  img: string
  color: string
  link: string
  desc: string
  use: string
}
const tools = [
  {
    name: 'Svelte',
    img: svelte,
    color: '#FF3E00',
    link: 'https://svelte.dev/',
    desc: `a compiler that converts your declarative components into efficient JavaScript that surgically updates the DOM.`,
    use: `I use Svelte in all my web projects because it's fast, easy to use, and has a great community. Better than React by far.`
  },
  {
    name: 'Expressjs',
    img: express,
    color: '#2361DAFB',
    link: 'https://expressjs.com/',
    desc: `a minimal and flexible Node.js web application framework.`,
    use: `I used Express to build the backend for grape and miniverse casinos. It allowed me to serve static svelte files and handle realtime connections with socket.io.`
  },
  {
    name: 'Typescript',
    img: typescript,
    color: '#007ACC',
    link: 'https://www.typescriptlang.org/',
    desc: `a typed superset of JavaScript that compiles to plain JavaScript.`,
    use: `I use Typescript in all my projects because it's a great way to catch bugs before they happen. It also makes it easier to work with other people.`
  },
  {
    name: 'Python',
    img: python,
    color: '#3776AB',
    link: 'https://www.python.org/',
    desc: `an interpreted, high-level, general-purpose programming language.`,
    use: `I use Python to help me with some of my projects. I use it to scrape data from websites and to automate some of my tasks.`
  },
  {
    name: 'Ethers.js',
    img: ethers,
    color: '#1C1C1C',
    link: 'https://docs.ethers.io/v5/',
    desc: `a complete Ethereum wallet implementation and utilities for the browser and Node.js.`,
    use: `I use ethers.js in all my dapp projects because it's the best way to interact with the Ethereum blockchain and other evm chains.`
  },
  {
    name: 'Sass',
    img: sass,
    color: '#CC6699',
    link: 'https://sass-lang.com/',
    desc: `a preprocessor scripting language that is interpreted or compiled into css.`,
    use: `I use Sass in all my projects because it's just css but with more features.`
  },
  {
    name: 'MySQL',
    img: mysql,
    color: '#00758F',
    link: 'https://www.mysql.com/',
    desc: `a relational database management system based on SQL.`,
    use: `I use MySQL in all my projects that require a database because of it's ease of use and popularity.`
  },
  {
    name: 'Prisma',
    img: prisma,
    color: '#0C344B',
    link: 'https://www.prisma.io/',
    desc: `an open-source database toolkit.`,
    use: `I use Prisma in all my projects that require a database because it makes interacting with my database completely type-safe.`
  }
] as const satisfies readonly Tool[]

export default tools
