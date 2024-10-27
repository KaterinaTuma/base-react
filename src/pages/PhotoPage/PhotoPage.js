import { useParams } from 'react-router-dom';
import { usePhotosStore } from 'shared/hooks';

/**
 * @function PhotoPage
 * @returns {JSX.Element}
 */

export const PhotoPage = () => {
  const params = useParams();
  const photosStore = usePhotosStore();

  if (!params.photoId) return <p>Invalid photo id</p>;

  const photo = photosStore.getPhotoById(photosStore.photos, params.photoId);

  if (!photo) return <p>Photo not found</p>;

  return (
    <div>
      <h2>{photo.title}</h2>
      <img src={photo.url}
        alt={photo.title}/>
    </div>
  );
};
