export interface Link {
  link: string;
  title: string;
}

export type ErdelLinks = Link[];

const links: ErdelLinks = [
  {
    title: "Wordle",
    link: "https://www.nytimes.com/games/wordle/index.html",
  },
  {
    title: "Quordle",
    link: "https://www.quordle.com/#/",
  },
  {
    title: "Absurdle",
    link: "https://qntm.org/files/absurdle/absurdle.html",
  },
  {
    title: "Worldle",
    link: "https://worldle.teuteuf.fr/",
  },
  {
    title: "Globle",
    link: "https://globle-game.com/",
  },
  {
    title: "Heardle",
    link: "https://www.heardle.app/",
  },
];

export default links;
