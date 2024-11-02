import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePhotos } from 'shared/stores';
import { Preloader } from 'shared/ui';

/**
 * @function PhotoPage
 * @returns {JSX.Element}
 */

export const PhotoPage = () => {
  const params = useParams();
  const photosStore = usePhotos();

  if (!params.photoId) return <p>Invalid photo id</p>;

  useEffect(() => {
    if (!params.photoId) return;
    photosStore.getPhotoById(params.photoId);
  }, []);

  if (!photosStore.photo) return <p>Photo not found</p>;

  return (
    <>
      <div>
        <h2>{photosStore.photo.title}</h2>
        <img src={photosStore.photo.url}
          alt={photosStore.photo.title}/>
      </div>
      <Preloader isActive={photosStore.isPhotoLoading} />
    </>
  );
};
