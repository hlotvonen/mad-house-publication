import { writable, derived } from 'svelte/store';

export const innerWidth = writable(600);
export const innerHeight = writable(600);

export const circles = writable([
  { id: 0, position: { x: 190, y: 30 }, radius: 30, color: 'blue'},
  { id: 1, position: { x: 210, y: 30 }, radius: 30, color: 'blue'},
  { id: 2, position: { x: 240, y: 30 }, radius: 30, color: 'blue'},
  { id: 3, position: { x: 270, y: 30 }, radius: 30, color: 'blue'},
  { id: 4, position: { x: 410, y: 30 }, radius: 30, color: 'blue'},
  { id: 5, position: { x: 390, y: 30 }, radius: 30, color: 'blue'},
  { id: 6, position: { x: 360, y: 30 }, radius: 30, color: 'blue'},
  { id: 7, position: { x: 330, y: 30 }, radius: 30, color: 'blue'},
]);

// Create a derived store for maxDistance
export const maxDistance = derived(
  [innerWidth, innerHeight],
  ([$innerWidth, $innerHeight]) => {
    return Math.sqrt($innerWidth * $innerHeight + $innerWidth * $innerHeight);
  }
);

// Derived store to calculate and normalize distances
export const circleDistances = derived([circles, maxDistance], ([$circles, $maxDistance]) => {

  // Calculate distances
  $circles.forEach((circle, i) => {
    circle.distances = [];
    circle.totalDistance = 0; // Initialize total distance for each circle
    $circles.forEach((otherCircle, j) => {
      if (i !== j) {
        const distance = getDistance(circle.position, otherCircle.position);
        const normalizedDistance = distance / $maxDistance;
        circle.distances.push({ id: otherCircle.id, distance });
        circle.totalDistance += normalizedDistance; // Add normalized distance
      }
    });
  });

  // Normalize distances based on the 600x600 viewport
  $circles.forEach(object => {
    object.distances.forEach(d => {
      d.distance = d.distance / $maxDistance;
    });
  });

  // Normalize total distance for each circle based on the number of other circles
  const numberOfOtherCircles = $circles.length - 1;
  
  $circles.forEach(circle => {
    circle.totalNormalizedDistance = circle.totalDistance / numberOfOtherCircles;
  });

  return $circles
});

function getDistance(position1, position2) {
  const xDistance = position1.x - position2.x;
  const yDistance = position1.y - position2.y;
  return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
}