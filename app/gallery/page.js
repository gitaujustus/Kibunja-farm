// "use client";

// const images = [
//   // Chicks
//   {
//     src: "https://images.unsplash.com/photo-1589923188651-268a9765e432?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Closeup of a fluffy chick in a brooder",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1613684574327-dc32b58b2fca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Group of newborn chicks",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1694854038360-56b29a16fb0c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "many chicks in a well lit brooder",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1442689859438-97407280183f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "duck chicks",
//   },
//   // Hens & Cocks
  
//   {
//     src: "https://images.pexels.com/photos/375510/pexels-photo-375510.jpeg?auto=compress&w=600&q=80",
//     alt: "White hen with red comb",
//   },
//   {
//     src: "https://plus.unsplash.com/premium_photo-1664527009188-a8f5e05589fb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Female improved kienyeji hen",
//   },
//   {
//     src: "https://plus.unsplash.com/premium_photo-1661964158054-f8ec74178017?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "kienyeji chickens",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1578051696754-4652a8f67882?q=80&w=326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "White hen with red comb 2",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1678989912659-5a06072c5955?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "White hen with red comb 2",
//   },
//   // Ducks
//   {
//     src: "https://images.unsplash.com/photo-1465153690352-10c1b29577f8?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Luen duck",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1534627760265-69713192ade4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Luen duck 2",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1564149567196-0c1d8bb7148f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Goose",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1702238151745-f721a21a27ab?q=80&w=842&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Goose 2",
//   },
//   // Turkeys
//   {
//     src: "https://plus.unsplash.com/premium_photo-1668268397144-5bb0d5d2a8bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "male Turkey strutting in field",
//   },
//   {
//     src: "https://plus.unsplash.com/premium_photo-1669754166793-db090505baf1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "male Turkey potrait",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1461037506617-211749beac60?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Group of turkeys in a field",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1560011961-4ab41261de01?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Beautiful male turkey in a field",
//   },
//   // guinea fowl
//   {
//     src: "https://images.unsplash.com/photo-1583147474478-f8920da507ca?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Guinea fow lying on the ground",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1583147386746-3ba0c0799d79?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Group of guinea fowl feeding",
//   },

//   {
//     src: "https://images.unsplash.com/photo-1647641639865-b509748cad4f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "group of guinea fowl",
//   },
//   // Bonus variety
//   {
//     src: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=743&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Fresh eggs in a basket",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1725781188703-32f11fd53fe4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Guinea fowl eggs",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1639194335563-d56b83f0060c?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "kienyeji eggs",
//   },
// ];

// export default function GalleryPage() {
//   return (
//     <main className="max-w-7xl mx-auto py-12 px-4">
//       <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#00743F]">Poultry Gallery</h1>
//       <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
//         {images.map((img, i) => (
//           <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-md mb-4">
//             <img
//               src={img.src}
//               alt={img.alt}
//               className="w-full object-cover hover:scale-105 transition-transform duration-300"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

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
