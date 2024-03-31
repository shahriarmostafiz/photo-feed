
import PhotoList from "@/components/Photolist"



export default async function Home({ params: { lang } }) {
  const response = await fetch(`${process.env.BaseURL}/photos`)
  // const photos = await response.json()
  const photos = await response.json();

  return (
    <div>
      <PhotoList photos={photos} />
    </div>)
}
