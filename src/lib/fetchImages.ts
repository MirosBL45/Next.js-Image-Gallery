import type { ImagesResults } from '@/models/Images';
import { ImagesSchemaWithPhotos } from '@/models/Images';
import env from './env';

export default async function fetchImages(
  url: string
): Promise<ImagesResults | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.NEXT_PUBLIC_PEXELS_API_KEY,
      },
    });

    if (!res.ok) throw new Error('Fetch Images error in trycatch!\n');

    const imagesResult: ImagesResults = await res.json();

    // console.log(imagesResult);

    // Parse data with Zod schema
    const parsedData = ImagesSchemaWithPhotos.parse(imagesResult);

    if (parsedData.total_results === 0) return undefined;

    return parsedData;
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
}
