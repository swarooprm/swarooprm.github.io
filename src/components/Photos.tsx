import { useState, useEffect } from "react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import photoIlya from "@/assets/photo-ilya.jpeg";
import photoBengio from "@/assets/photo-bengio.png";
import photoYejin from "@/assets/photo-yejin.png";
import photoSaraDanqi from "@/assets/photo-sara-danqi.png";
import photoMit from "@/assets/photo-mit.png";
import photoHinton from "@/assets/photo-hinton.png";

const photos = [
  {
    id: 1,
    caption: "With Geoffrey Hinton",
    description: "AI Pioneer, Turing Award & Nobel Prize Winner",
    image: photoHinton,
  },
  {
    id: 2,
    caption: "With Yoshua Bengio",
    description: "Deep Learning Pioneer & Turing Award Winner",
    image: photoBengio,
  },
  {
    id: 3,
    caption: "With Ilya Sutskever",
    description: "Co-founder of OpenAI",
    image: photoIlya,
  },
  {
    id: 4,
    caption: "With Yejin Choi",
    description: "MacArthur Fellow & AI Researcher",
    image: photoYejin,
  },
  {
    id: 5,
    caption: "With Sara Hooker & Danqi Chen",
    description: "ACL 2023 Panel Discussion",
    image: photoSaraDanqi,
  },
  {
    id: 6,
    caption: "At MIT",
    description: "Invited Talk 2024",
    image: photoMit,
  },
];

const Photos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure currentIndex is within bounds
  const safeIndex = Math.min(currentIndex, photos.length - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <section id="photos" className="py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Memorable Moments
          </h2>
        </div>

        <div className="relative">
          {/* Main Photo Display */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary aspect-[16/9] md:aspect-[21/9]">
            <div 
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${safeIndex * 100}%)` }}
            >
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="min-w-full h-full flex items-center justify-center"
                >
                  {photo.image ? (
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <Camera className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                      <p className="text-muted-foreground text-lg">{photo.caption}</p>
                      <p className="text-muted-foreground/60 text-sm mt-2">Upload photo to display</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Caption */}
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-foreground">
              {photos[safeIndex].caption}
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              {photos[safeIndex].description}
            </p>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === safeIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photos;