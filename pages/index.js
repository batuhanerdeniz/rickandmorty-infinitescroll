import Link from "next/link";

export default function Home(props) {
  return (
    <div id="navbar">
    <Link href='/'>
      <h1>Rick and Morty Dead & Alive Characters & Infinite Scroll</h1>
    </Link>{" "}
    <Link href='/Dead'>
      <a>Dead Characters</a>
    </Link>{" "}
    <Link href='/Alive'>
      <a>Alive Characters</a>
    </Link>{" "}
    <Link href='https://github.com/batuhanerdeniz/rickandmorty-nextjs'>
      <a>Github Repo</a>
    </Link>{" "}
    </div>
  );
}
