export interface Link {
  link: string;
  title: string;
  emoji: string;
}

export type ErdelLinks = Link[];

const links: ErdelLinks = [
  {
    title: "Wordle",
    link: "https://www.nytimes.com/games/wordle/index.html",
    emoji: "📖",
  },
  {
    title: "Quordle",
    link: "https://www.quordle.com/#/",
    emoji: "📖",
  },
  {
    title: "Absurdle",
    link: "https://qntm.org/files/absurdle/absurdle.html",
    emoji: "📖",
  },
  {
    title: "Worldle",
    link: "https://worldle.teuteuf.fr/",
    emoji: "🌏",
  },
  {
    title: "Globle",
    link: "https://globle-game.com/",
    emoji: "🌏",
  },
  {
    title: "Heardle",
    link: "https://www.heardle.app/",
    emoji: "🎵",
  },
  {
    title: "Tradle",
    link: "https://oec.world/en/tradle/",
    emoji: "📈",
  }
  {
    title: "Numberle",
    link: "https://dduarte.github.io/numberle/",
    emoji: "🔢",
  },
  {
    title: "Nerdle",
    link: "https://nerdlegame.com/",
    emoji: "🔢",
  },
  {
    title: "Octordle",
    link: "https://octordle.com/",
    emoji: "📖",
  },
  {
    title: "Sedecordle",
    link: "https://www.sedecordle.com/",
    emoji: "📖",
  },
];

export default links;
