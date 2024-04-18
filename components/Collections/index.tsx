import CollectionItem from "../CollectionItem"
import Heading from "../Heading"

const collectionData = [
  {
    collectionImage: '/images/sky.png',
    header: 'Night Sky',
    artistName: 'Léa Jacquot',
    artistIcon: '/images/artist-icon.png'
  },
  {
    collectionImage: '/images/future.png',
    header: 'Future',
    artistName: 'Julien',
    artistIcon: '/images/julien.png'
  },
  {
    collectionImage: '/images/mother-nature.png',
    header: 'Mother nature',
    artistName: 'Maria',
    artistIcon: '/images/maria.png'
  },

]

const Collections = () => {
  return (
    <div className="w-full mb-24">
        <Heading as="h3" className="mt-[119px] !font-extrabold">
        Collections
      </Heading>

      <div className="flex md:flex-row max-w-md: flex-col items-center justify-center mt-[41px] gap-10 mx-auto w-full">
        {collectionData.map((item, index) => (
        <CollectionItem key={index} {...item} />
        )) }
        </div>

    
      
  </div>
  )
}

export default Collections