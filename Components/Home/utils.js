export const findSmallestDifference = (cursorPosition, array) => {
  let coordinate = array[0];
  let minDiff = array[1] - array[0];
  if (cursorPosition > array.slice(-1)) {
    return array.slice(-1)[0];
  } else {
    for (let i = 0; i < array.length; i++) {
      const diff = Math.abs(array[i] - cursorPosition);
      if (diff < minDiff) {
        minDiff = diff;
        coordinate = array[i];
      }
    }
    return coordinate;
  }
};

export const polarToCartesian = (x, y, r, degrees) => {
  const radians = ((degrees - 90) * Math.PI) / 180.0;
  return [x + r * Math.cos(radians), y + r * Math.sin(radians)];
};

export const translateImage = (offset, imgRadius, imgWidth, segment, segments) => {
  const degrees = 360 / segments;
  const centerDegree = degrees / 2;
  const current = degrees * segment + centerDegree;
  const cartesianCoordinates = polarToCartesian(
    offset,
    offset,
    imgRadius,
    current
  );
  return [current,...cartesianCoordinates.map(i=>i+(imgWidth/2)),...cartesianCoordinates];
};

export const calcRotationDegrees = () => {
  return String(2160 + Math.floor(Math.random() * 360)) + "deg"
}