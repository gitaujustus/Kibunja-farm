import Image from 'next/image';
import images from '@/lib/galleryData.json'; 

export default function GalleryPage() {
  return (
    <main className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#00743F]">Poultry Gallery</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-md mb-4">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 25vw"
              placeholder="empty" // or blur if you want to use base64 blur preview later
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
