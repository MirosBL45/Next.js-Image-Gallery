import fetchImages from '@/lib/fetchImages';
import type { ImagesResults } from '@/models/Images';
import ImgContainer from './ImgContainer';

export default async function Gallery() {
  const url = 'https://api.pexels.com/v1/curated';

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images)
    return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;

  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {images.photos.map((photo) => (
        <ImgContainer photo={photo} />
      ))}
    </section>
  );
}
// 'use client';

// import { useEffect, useState } from 'react';
// import fetchImages from '@/lib/fetchImages';
// import type { ImagesResults } from '@/models/Images';

// export default function Gallery() {
//   const [images, setImages] = useState<ImagesResults | undefined>(undefined);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = 'https://api.pexels.com/v1/curated';
//       const result = await fetchImages(url);
//       setImages(result);
//       setLoading(false);
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <h2 className="m-4 text-2xl font-bold">Loading...</h2>;
//   }

//   if (!images) {
//     return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;
//   }

//   return (
//     <section>
//       <ul>
//         {images.photos.map((photo) => (
//           <li key={photo.id}>{photo.src.large}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }
