import React from "react";
import { Gallary } from "components/styled/Home.styled";
import GalleryItem from "components/GalleryItem";

const dataset = [
  { name: "Jane Doe", position: "Creattive Director" },
  { name: "Jane Doe", position: "Creattive Director" },
  { name: "Jane Doe", position: "Creattive Director" },
  { name: "Jane Doe", position: "Creattive Director" },
  { name: "Jane Doe", position: "Creattive Director" },
];

function Index() {
  return (
    <Gallary>
      {dataset.map((e) => (
        <GalleryItem {...e} />
      ))}
    </Gallary>
  );
}

export default Index;
