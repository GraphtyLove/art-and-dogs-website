// GalleryDog images
import photo1 from "../../assets/img/Gallery/gallery-1.jpeg";
import photo2 from "../../assets/img/Gallery/gallery-2.jpeg";
import photo3 from "../../assets/img/Gallery/gallery-3.jpeg";
import photo4 from "../../assets/img/Gallery/gallery-4.jpeg";
import photo5 from "../../assets/img/Gallery/gallery-5.jpeg";
import photo6 from "../../assets/img/Gallery/gallery-6.jpeg";
import photo7 from "../../assets/img/Gallery/gallery-7.jpeg";
import photo8 from "../../assets/img/Gallery/gallery-8.jpeg";

export const tagColor = () => {
    return ({
        color: '#FEBE51'
    })
}

const photos = [
  {
    src: photo8,
    thumbnail: photo8,
    caption: 'ceci est un titre',
    tags: [{value: "Labrador", title: "Labrador"}, {value: "poils courts", title: "poils courts"}],
  },
  {
    src: photo2,
    thumbnail: photo2,
    caption: 'ceci est un titre',
    tags: [{value: "Labrador", title: "Labrador"}, {value: "poils courts", title: "poils courts"}],

  },
  {
    src: photo3,
    thumbnail: photo3,
    caption: 'ceci est un titre',
    tags: [{value: "Labrador", title: "Labrador"}, {value: "poils courts", title: "poils courts"}],
  },
  {
    src: photo4,
    thumbnail: photo4,
    caption: 'ceci est un titre',
    tags: [{value: "Labrador", title: "Labrador"}, {value: "poils courts", title: "poils courts"}],
  },
  {
    src: photo5,
    thumbnail: photo5,
    caption: 'ceci est un titre',
    tags: [{value: "Labrador", title: "Labrador"}, {value: "poils courts", title: "poils courts"}],
  },
  {
    src: photo6,
    thumbnail: photo6,
    caption: 'ceci est un titre',
    tags: [{value: "Berger Allemamd", title: "Berger Allemamd"}, {value: "poils courts", title: "poils courts"}],
  },
  {
    src: photo7,
    thumbnail: photo7,
    caption: 'ceci est un titre',
    tags: [{value: "Collie", title: "Collie"}, {value: "poils long", title: "poils long"}],
  },
  {
    src: photo1,
    thumbnail: photo1,
    caption: 'ceci est un titre',
    tags: [{value: "Labrador", title: "Labrador"}, {value: "poils courts", title: "poils courts"}],
  }
];

export default photos