import * as React from "react";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import PetsIcon from '@mui/icons-material/Pets';





const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "black",
  },
  "& .MuiRating-iconHover": {
    color: "black",
  },
});

export default function RatingStart() {
  return (
    <StyledRating
      readOnly
      name="customized-color"
      defaultValue={2}
      precision={0.5}
      icon={<PetsIcon fontSize="inherit" />}
      emptyIcon={<PetsIcon fontSize="inherit" outlined/>}
    />
  );
}
