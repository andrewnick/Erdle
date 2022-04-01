import links from "../data/links";
export default function Web() {
  const list = {
    padding: "0",
  };

  const listItem = {
    padding: "10px",
  };

  return (
    <div>
      <header>
        <div>
          <h1 className="text-3xl font-bold">Erdle</h1>
          <p>Bringing all your &quot;erdle&quot; games into one place</p>
        </div>
      </header>

      <ul style={list}>
        {links.map(({ title, link }, index) => (
          <li style={listItem} key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
