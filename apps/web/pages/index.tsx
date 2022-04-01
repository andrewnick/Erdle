import links from "../data/links";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

export default function Web() {
  return (
    <div className="container">
      <header className="py-6">
        <div>
          <h1 className="text-5xl font-bold">Erdle</h1>
          <p>Bringing all your &quot;erdle&quot; games into one place</p>
        </div>
      </header>

      <ul>
        {links.map(({ emoji, title, link }, index) => (
          <li
            className="border-2 rounded-md  mb-2 bg-white hover:bg-slate-200"
            key={index}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center p-3"
            >
              <div>
                <span className="pr-2">{emoji}</span> <span>{title}</span>
              </div>

              <ArrowNarrowRightIcon className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
