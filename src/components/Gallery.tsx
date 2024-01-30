import React, { useState } from "react";
import Lightbox, { Slide } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Portal } from "react-portal";

import Video from "yet-another-react-lightbox/plugins/video";

export interface GalleryProps {
  items: any;
}

export function Gallery({ items }: GalleryProps) {
  const [toggler, setToggler] = useState<boolean>(false);
  const [slideIndex, setSlideIndex] = useState<number>(0);

  function openItem(index: number) {
    setSlideIndex(index);
    setToggler(true);
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 m-5 mb-0">
      {items.map((item: any, index: number) => (
        <div
          key={index}
          className="flex cursor-pointer"
          onClick={() => openItem(index)}
        >
          <img src={item.thumbnail} alt={item.caption || ""} />
        </div>
      ))}
      {toggler && (
        <Portal>
          <Lightbox
            plugins={[Video]}
            index={slideIndex}
            open={toggler}
            close={() => setToggler(false)}
            slides={items as unknown as Slide[]}
          />
        </Portal>
      )}
    </div>
  );
}
