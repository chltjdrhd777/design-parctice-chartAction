import styled from "@emotion/styled/macro";
import { B } from "components/styled";

//! Home Main
export const Gallary = styled.main`
  height: 100vh;
  display: flex;

  & .gallery-item:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.indigo};
  }

  & .gallery-item:nth-child(3) {
    background-color: ${({ theme }) => theme.colors.pointColorCarrot};
  }

  & .gallery-item:nth-child(4) {
    background-color: ${({ theme }) => theme.colors.pointColorBlue};
  }

  & .gallery-item:nth-child(5) {
    background-color: ${({ theme }) => theme.colors.pointColorMint};
  }
`;

//@ media
export const Media = styled.div``;
