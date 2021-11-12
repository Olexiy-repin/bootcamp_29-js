'use strict';

const galleryEl = document.querySelector('.gallery');
const bannerEl = document.querySelector('.banner__img');

const onGalleryClick = event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const bannerUrl = event.target.dataset.bannerUrl;
  bannerEl.src = bannerUrl;
  bannerEl.alt = 'banner';
};

galleryEl.addEventListener('click', onGalleryClick);

const lazyImages = document.querySelectorAll('img[data-src]');

lazyImages.forEach(img => {
  img.addEventListener(
    'load',
    event => {
      event.target.classList.add('appear');
    },
    { once: true }
  );
});

const addSrcAttribute = () => {
  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
};

const createLazySizesScript = () => {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  script.setAttribute(
    'integrity',
    'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=='
  );
  script.setAttribute('crossorigin', 'anonymous');
  script.setAttribute('referrerpolicy', 'no-referrer');

  return script;
};

if ('loading' in HTMLImageElement.prototype) {
  console.log('Аттрибут loading поддерживаются');
  addSrcAttribute();
} else {
  console.log('Аттрибут loading не поддерживаются');
  document.body.append(createLazySizesScript());
}
