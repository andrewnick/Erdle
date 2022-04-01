import links from "../data/links";
export default function Web() {
  const list = {
    padding: "0",
  };

  const listItem = {
    padding: "10px",
    // paddingBottom: "10px",
  };

  return (
    <div>
      <h1>Erdle</h1>
      <p>Bringing all your &quot;erdle&quot; games into one place</p>
      <ul style={list}>
        {links.map(({ title, link }) => (
          <li style={listItem}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
        {/*         
        <li>
          <a
            href="https://www.nytimes.com/games/wordle/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wordle
          </a>
        </li>
        <li>
          <a
            href="https://www.quordle.com/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quordle
          </a>
        </li>
        <li>
          <a
            href="https://worldle.teuteuf.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Worldle
          </a>
        </li>
        <li>
          <a
            href="https://globle-game.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Globle
          </a>
        </li>
        <li>
          <a
            href="https://www.heardle.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Heardle
          </a>
        </li> */}
      </ul>
    </div>
  );
}
