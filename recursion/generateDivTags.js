function generateDivTags(
  numberOfTags,
  str = "",
  openingTags = numberOfTags,
  closingTags = numberOfTags,
  answer = []
) {
  if (closingTags === 0) answer.push(str);
  if (closingTags > openingTags)
    generateDivTags(
      numberOfTags,
      str + "</div>",
      openingTags,
      closingTags - 1,
      answer
    );
  if (openingTags > 0)
    generateDivTags(
      numberOfTags,
      str + "<div>",
      openingTags - 1,
      closingTags,
      answer
    );

  return answer;
}
