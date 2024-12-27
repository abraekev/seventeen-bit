import { useState } from "react";
import aberrus from "/images/aotc-aberrus.png";
import voti from "/images/aotc-voti.png";
import bbqOne from "/images/bbq1.png";
import bbqTwo from "/images/bbq2.jpg";
import { IconButton, styled } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const imageUrls = [aberrus, voti, bbqOne, bbqTwo];

const StyledDiv = styled("div")`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
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

  return (
    <StyledDiv>
      <img style={{ width: "100%" }} src={imageUrls[imageIndex]} />

      <StyledLeftButton color="primary">
        <ChevronLeft />
      </StyledLeftButton>

      <StyledRightButton color="primary">
        <ChevronRight />
      </StyledRightButton>
    </StyledDiv>
  );
};
