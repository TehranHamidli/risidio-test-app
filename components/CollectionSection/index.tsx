import CollectionCard from "../CollectionCard"

import Text from "../Text"

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

const CollectionSection = () => {
  return (
    <div className="w-full mb-24">
        <Text  className="mt-[119px] !font-extrabold">
        Collections
      </Text>

      <div className="flex md:flex-row max-w-md: flex-col items-center justify-center mt-[41px] gap-10 mx-auto w-full">
        {collectionData.map((item, index) => (
        <CollectionCard key={index} {...item} />
        )) }
        </div>

    
      
  </div>
  )
}

export default CollectionSection