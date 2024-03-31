
import PhotoList from "@/components/Photolist"



export default async function Home({ params: { lang } }) {
  const response = await fetch(`https://photo-feed-zh.vercel.app/en/photos`)
  const photos = await response.json()

  return (
    <div>
      <PhotoList photos={photos} />
    </div>)
}
