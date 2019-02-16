module.exports = [
  [
    10,
    // Unspecified
    {
      quantMin: 16,
      quantMax: 192,
      grayscale: 'yes',
      showBaseChance: 50,
      overlayOpacityMin: 30,
      overlayOpacityMax: 99
    }
  ],
  [
    100,
    // Animals
    {
      query: 'animals',
      quantMin: 16,
      quantMax: 160,
      showBaseChance: 50,
      overlayOpacityMin: 30,
      overlayOpacityMax: 99,

      grayscale: 'yes'
    }
  ],
  [
    150,
    // Nature
    {
      query: 'nature',
      quantMin: 16,
      quantMax: 128,
      showBaseChance: 30,
      overlayOpacityMin: 30,
      overlayOpacityMax: 99,
      grayscale: 'yes',
      minimumValueDifference: 0.4
    }
  ],
  [
    200,
    // Sculpture
    {
      query: 'sculpture',
      quantMin: 16,
      quantMax: 192,
      showBaseChance: 30,
      overlayOpacityMin: 30,
      overlayOpacityMax: 99,
      grayscale: 'yes'
    }
  ],
  [
    100,
    // Landscape
    {
      query: 'landscape',
      quantMin: 16,
      quantMax: 192,
      showBaseChance: 50,
      overlayOpacityMin: 30,
      overlayOpacityMax: 99,
      grayscale: 'yes',
      minimumValueDifference: 0.4
    }
  ],
  [
    150,
    // Portrait
    {
      query: 'portrait',
      quantMin: 16,
      quantMax: 192,
      showBaseChance: 80,
      overlayOpacityMin: 30,
      overlayOpacityMax: 99,
      grayscale: 'yes'
    }
  ],
  [
    100,
    // Metropolitan Museum of Art
    {
      collection: 'metropolitanmuseumofart-gallery',
      quantMin: 32,
      quantMax: 192,
      showBaseChance: 50,
      overlayOpacityMin: 30,
      overlayOpacityMax: 99,
      grayscale: 'yes'
    }
  ],
  [
    200,
    // Unsplash
    {
      collection: 'unsplash',
      quantMin: 32,
      quantMax: 192,
      showBaseChance: 40,
      overlayOpacityMin: 30,
      overlayOpacityMax: 99,
      grayscale: 'yes'
    }
  ],
  [
    70,
    // Name
    {
      collection: 'nasanaturalhazards',
      quantMin: 32,
      quantMax: 128,
      showBaseChance: 30,
      overlayOpacityMin: 30,
      overlayOpacityMax: 99,
      grayscale: 'yes'
    }
  ],
  [
    200,
    // Name
    {
      collection: 'visibleearthcollection',
      quantMin: 32,
      quantMax: 128,
      showBaseChance: 66,
      overlayOpacityMin: 20,
      overlayOpacityMax: 99,
      grayscale: 'yes',
      minimumValueDifference: 0.4
    }
  ],
  [
    50,
    // Name
    {
      collection: 'nasaimageofthedaygallery',
      quantMin: 32,
      quantMax: 144,
      showBaseChance: 30,
      overlayOpacityMin: 40,
      overlayOpacityMax: 99,
      grayscale: 'yes',
      minimumValueDifference: 0.4,
      numberOfRetriesToAvoidSingleColor: 8
    }
  ],
  [
    100,
    // Name
    {
      collection: 'flickrcommons',
      quantMin: 32,
      quantMax: 192,
      showBaseChance: 50,
      overlayOpacityMin: 30,
      overlayOpacityMax: 99,
      grayscale: 'yes'
    }
  ],
  [
    200,
    // Name
    {
      collection: 'afghanmediaresourcecenter',
      quantMin: 16,
      quantMax: 160,
      showBaseChance: 50,
      overlayOpacityMin: 30,
      overlayOpacityMax: 99,
      grayscale: 'yes',
      minimumValueDifference: 0.4
    }
  ],
  [
    100,
    // Drawings
    {
      query: 'drawing',
      quantMin: 8,
      quantMax: 192,
      showBaseChance: 25,
      overlayOpacityMin: 30,
      overlayOpacityMax: 99,
      grayscale: 'no'
    }
  ],
  [
    200,
    // Etchings
    {
      query: 'etching',
      quantMin: 8,
      quantMax: 192,
      showBaseChance: 25,
      overlayOpacityMin: 30,
      overlayOpacityMax: 99,
      grayscale: 'no',
      numberOfRetriesToAvoidSingleColor: 8
    }
  ],
  [
    100,
    // Cat
    {
      query: 'cat',
      quantMin: 8,
      quantMax: 192,
      showBaseChance: 50,
      overlayOpacityMin: 30,
      overlayOpacityMax: 99,
      grayscale: 'yes'
    }
  ]
];

