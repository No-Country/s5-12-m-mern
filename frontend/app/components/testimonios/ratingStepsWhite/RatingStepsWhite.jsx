import React from "react";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import PetsIcon from "@mui/icons-material/Pets";



const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: 'black',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

export default function RatingStepsWhite() {


  return (
    <StyledRating
      name="customized-color"
      defaultValue={0}
      precision={1}
      max={5}
      icon={<PetsIcon fontSize="inherit" />}
      emptyIcon={<PetsIcon fontSize="inherit" />}
    />
  );
}
