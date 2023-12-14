export function normalize(value, min, max) {
  if (min === max) {
    // Handle the case where min and max are the same to avoid division by zero
    return 0; // or return 1, depending on your context
  }
  return (value - min) / (max - min);
}

export function clamp(value, min, max) {
  return value < min ? min : value > max ? max : value;
}

export function convertPixelToSvgCoord(event, svgElement) {
  const svg = svgElement.ownerSVGElement || svgElement;
  let point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(svg.getScreenCTM().inverse());
}