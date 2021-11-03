import React from "react";
import styled from "@emotion/styled/macro";

export const GalleryItem = styled.div`
  flex: 1;
  padding: 2.5rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  z-index: 0;
  transition: flex 0.6s ease-in;

  &:hover {
    flex: 5;

    & .description-wrapper {
      .name,
      .position-title {
        transform: translateY(0);
      }
    }
  }

  &:not(:hover) {
    & .description-wrapper {
      .name,
      .position-title {
        transition-delay: 0s;
      }
    }
  }

  & .description-wrapper {
    overflow: hidden;

    .name,
    .position-title {
      transition: transform 0.3s 0.5s;
    }

    .name {
      background-color: white;
      padding: 1.5rem;
      font-size: 3rem;
      font-weight: bold;
      display: inline-block;
      transform: translateY(-100%);
    }
    .position-title {
      background-color: white;
      display: block;
      transform: translateY(100%);
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

interface GalleryItemProps {
  name: string;
  position: string;
}

function Index({ name, position }: GalleryItemProps) {
  return (
    <GalleryItem className="gallery-item">
      <div className="description-wrapper">
        <h2 className="name">{name}</h2>
        <span className="position-title">{position}</span>
      </div>
    </GalleryItem>
  );
}

export default Index;
