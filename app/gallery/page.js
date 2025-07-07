"use client";

const images = [
  // Chicks
  {
    src: "/gallery/closeup-of-a-fluffy-chick-in-a-brooder.webp",
    alt: "Closeup of a fluffy chick in a brooder",
  },
  {
    src: "/gallery/group-of-newborn-chicks.webp",
    alt: "Group of newborn chicks",
  },
  {
    src: "/gallery/many-chicks-in-a-well-lit-brooder.webp",
    alt: "many chicks in a well lit brooder",
  },
  {
    src: "/gallery/duck-chicks.webp",
    alt: "duck chicks",
  },
  // Hens & Cocks
  {
    src: "/gallery/white-hen-with-red-comb.webp",
    alt: "White hen with red comb",
  },
  {
    src: "/gallery/female-improved-kienyeji-hen.webp",
    alt: "Female improved kienyeji hen",
  },
  {
    src: "/gallery/kienyeji-chickens.webp",
    alt: "kienyeji chickens",
  },
  {
    src: "/gallery/white-hen-with-red-comb-2.webp",
    alt: "White hen with red comb 2",
  },
  {
    src: "/gallery/white-hen-with-red-comb-2-copy.webp",
    alt: "White hen with red comb 2",
  },
  // Ducks
  {
    src: "/gallery/luen-duck.webp",
    alt: "Luen duck",
  },
  {
    src: "/gallery/luen-duck-2.webp",
    alt: "Luen duck 2",
  },
  {
    src: "/gallery/goose.webp",
    alt: "Goose",
  },
  {
    src: "/gallery/goose-2.webp",
    alt: "Goose 2",
  },
  // Turkeys
  {
    src: "/gallery/male-turkey-strutting-in-field.webp",
    alt: "male Turkey strutting in field",
  },
  {
    src: "/gallery/male-turkey-potrait.webp",
    alt: "male Turkey potrait",
  },
  {
    src: "/gallery/group-of-turkeys-in-a-field.webp",
    alt: "Group of turkeys in a field",
  },
  {
    src: "/gallery/beautiful-male-turkey-in-a-field.webp",
    alt: "Beautiful male turkey in a field",
  },
  // Guinea fowl
  {
    src: "/gallery/guinea-fow-lying-on-the-ground.webp",
    alt: "Guinea fow lying on the ground",
  },
  {
    src: "/gallery/group-of-guinea-fowl-feeding.webp",
    alt: "Group of guinea fowl feeding",
  },
  {
    src: "/gallery/group-of-guinea-fowl.webp",
    alt: "group of guinea fowl",
  },
  // Bonus variety
  {
    src: "/gallery/fresh-eggs-in-a-basket.webp",
    alt: "Fresh eggs in a basket",
  },
  {
    src: "/gallery/guinea-fowl-eggs.webp",
    alt: "Guinea fowl eggs",
  },
  {
    src: "/gallery/kienyeji-eggs.webp",
    alt: "kienyeji eggs",
  },
];

export default function GalleryPage() {
  return (
    <main className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#00743F]">Poultry Gallery</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-md mb-4">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
