import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryList } from "./ImageGallery.styled";

function ImageGallery({ images }) {
  return (
    <ImageGalleryList>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          smallImage={image.webformatURL}
          largeImage={image.largeImageURL}
        />
      ))}
    </ImageGalleryList>
  );
}

export default ImageGallery;
