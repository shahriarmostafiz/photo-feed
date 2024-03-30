// import Image from "next/image";

import { getDictionary } from "./dictionaries"


export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang)

  return (
    <h1>{dictionary.followers}: 5</h1>
  )
}
