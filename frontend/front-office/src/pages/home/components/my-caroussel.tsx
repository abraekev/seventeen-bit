import { useState } from "react";
import aberrus from "/images/aotc-aberrus.png";
import voti from "/images/aotc-voti.png";
import bbqOne from "/images/bbq1.png";
import bbqTwo from "/images/bbq2.jpg";
import { IconButton, styled } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const imageUrls = [aberrus, voti, bbqOne, bbqTwo];

const StyledDiv = styled("div")`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
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

const StyledLeftButton = styled(IconButton)`
  position: absolute;
  left: 0;
  margin: 1rem;
`;

const StyledRightButton = styled(IconButton)`
  position: absolute;
  right: 0;
  margin: 1rem;
`;

export const MyCaroussel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImg = () => {
    setImageIndex((prev) => {
      if (prev === 0) {
        return imageUrls.length - 1;
      }

      return prev - 1;
    });
  };

  const showNextImg = () => {
    setImageIndex((prev) => {
      if (prev === imageUrls.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  return (
    <StyledDiv>
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        {imageUrls.map((url) => (
          <StyledImg imageIndex={imageIndex} key={url} src={url} />
        ))}
      </div>

      <StyledLeftButton color="primary" onClick={showPrevImg}>
        <ChevronLeft />
      </StyledLeftButton>

      <StyledRightButton color="primary" onClick={showNextImg}>
        <ChevronRight />
      </StyledRightButton>
    </StyledDiv>
  );
};
