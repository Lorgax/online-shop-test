export const getRating = (rating) => {
  const star = "★";
  const emptyStar = "☆";
  let finalStars = "";

  star.repeat(rating);
  if (rating < 5) {
    finalStars += star.repeat(rating) + emptyStar.repeat(5 - rating);
  } else {
    finalStars += star.repeat(rating);
  }

  return finalStars;

};
