"use client";
import React from "react";
import Rating from "@mui/material/Rating";
import { useState } from "react";

import FavoriteIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/StarBorder";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "black",
  },
});

export default function RatingStart() {
  const [value, setValue] = useState(4);
  return (
    <StyledRating
      readOnly
      defaultValue={2}
      icon={<FavoriteIcon fontSize="inherit" />}
      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      max={5}
    />
  );
}
