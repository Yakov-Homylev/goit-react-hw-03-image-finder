import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled";

function ImageGalleryItem({ smallImage, largeImage }) {
  return (
    <GalleryItem>
      <GalleryImage src={smallImage} alt={largeImage} />
    </GalleryItem>
  );
}

export default ImageGalleryItem;
