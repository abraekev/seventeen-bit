import { FC, useState } from "react";
import { IconButton, styled } from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  Circle,
  RadioButtonUnchecked,
} from "@mui/icons-material";

//#region Styled Components
const CarousselContainer = styled("div")<{
  width: string;
  aspectRatio: string;
}>`
  width: ${(props) => props.width};
  aspect-ratio: ${(props) => props.aspectRatio};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  border-radius: 1rem;
`;

const ImagesContainer = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledImg = styled("img")<{ imageIndex: number }>`
  width: 100%;
  height: auto;
  flex-shrink: 0;
  flex-grow: 0;
  object-fit: cover; // cover will crop. 'contain' will not crop.

  // smooth transition in carroussel:
  transform: translateX(${(props) => -100 * props.imageIndex}%);
  transition: transform 300ms ease-in-out;
`;

const LeftButton = styled(IconButton)`
  left: 0;
  position: absolute;
  height: 100%;
  border-radius: 0;
  margin: 0;
  width: 10%;
  & svg {
    font-size: 3rem;
  }
  padding: 2rem;
`;

const RightButton = styled(IconButton)`
  right: 0;
  position: absolute;
  height: 100%;
  border-radius: 0;
  margin: 0;
  width: 10%;
  & svg {
    font-size: 3rem;
  }
  padding: 2rem;
`;

const DotButtonContainer = styled("div")`
  position: absolute;
  bottom: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;

const DotButton = styled(IconButton)`
  border-radius: 10rem;
  min-width: 2rem;
  min-height: 2rem;
  transition: transform 100ms;
  & :hover {
    transform: scale(1.1);
  }
`;
//#endregion

type CarousselProps = {
  images: {
    url: string;
    alt: string;
  }[];
  width?: string;
  aspectRatio?: string;
};

export const Caroussel: FC<CarousselProps> = ({
  images,
  width = "100%",
  aspectRatio = "16 / 9",
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImg = () => {
    setImageIndex((prev) => {
      if (prev === 0) {
        return images.length - 1;
      }

      return prev - 1;
    });
  };

  const showNextImg = () => {
    setImageIndex((prev) => {
      if (prev === images.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  return (
    <CarousselContainer width={width} aspectRatio={aspectRatio}>
      <ImagesContainer>
        {images.map(({ url, alt }) => (
          <StyledImg imageIndex={imageIndex} key={url} src={url} alt={alt} />
        ))}
      </ImagesContainer>

      <LeftButton color="primary" onClick={showPrevImg}>
        <ChevronLeft />
      </LeftButton>

      <RightButton color="primary" onClick={showNextImg}>
        <ChevronRight />
      </RightButton>

      <DotButtonContainer>
        {images.map((_, index) => (
          <DotButton
            size="small"
            color="primary"
            onClick={() => setImageIndex(index)}
            key={index}
          >
            {index === imageIndex ? <Circle /> : <RadioButtonUnchecked />}
          </DotButton>
        ))}
      </DotButtonContainer>
    </CarousselContainer>
  );
};
