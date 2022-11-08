import random from '../images/random-image.jpg';
import category from '../images/category.jpg';

const wallpaperType = [
  {
    id: 1,
    title: 'Random Image',
    description:
      'After every request, a random image will be displayed and can be picked from them as the wallpaper.',
    image: random,
  },
  {
    id: 2,
    title: 'Categorized Images',
    description:
      'There will be a list of categories and you can pick one of them to get a wallpaper from that category.',
    image: category,
  },
];

export default wallpaperType;
