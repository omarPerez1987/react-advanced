import { useState } from "react";
import { Button } from "../ui/button";

export default function ReconcilitionPart4() {
  const [index, setIndex] = useState(0);
  const hasNext = index < images.length - 1;

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let image = images[index];
  return (
    <section>
      <p className="font-bold">
        4. Limpiar una imagen mientras se está cargando
      </p>
      <div className="mt-3 flex flex-col w-96 items-center gap-2">
        <p className="font-semibold">{image.place}</p>
        <h3>
          Image {index + 1} of {images.length}
        </h3>
        <img key={image.src} src={image.src} width={250} height={250} />
        <Button onClick={handleClick} className="flex w-96">
          Next
        </Button>
      </div>
    </section>
  );
}

let images = [
  {
    place: "Penang, Malaysia",
    src: "https://i.imgur.com/FJeJR8M.jpg",
  },
  {
    place: "Lisbon, Portugal",
    src: "https://i.imgur.com/dB2LRbj.jpg",
  },
  {
    place: "Bilbao, Spain",
    src: "https://i.imgur.com/z08o2TS.jpg",
  },
  {
    place: "Valparaíso, Chile",
    src: "https://i.imgur.com/Y3utgTi.jpg",
  },
  {
    place: "Schwyz, Switzerland",
    src: "https://i.imgur.com/JBbMpWY.jpg",
  },
  {
    place: "Prague, Czechia",
    src: "https://i.imgur.com/QwUKKmF.jpg",
  },
  {
    place: "Ljubljana, Slovenia",
    src: "https://i.imgur.com/3aIiwfm.jpg",
  },
];
