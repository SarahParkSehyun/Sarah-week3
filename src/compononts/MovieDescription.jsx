import React from "react";
import {
  DescriptionContainer,
  DescriptionTitle,
  DescriptionText,
} from './MovieDescription.style';

function MovieDescription(props) {
  return (
    <DescriptionContainer>
      <DescriptionTitle>{props.movie.title}</DescriptionTitle>
      <DescriptionText>{props.movie.overview}</DescriptionText>
    </DescriptionContainer>
  );
}

export default MovieDescription;


