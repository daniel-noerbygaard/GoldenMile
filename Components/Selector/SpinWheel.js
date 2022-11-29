import React from "react";
import Svg, { Path, G, ClipPath, Image, Defs, Circle, Pattern } from "react-native-svg";
import { polarToCartesian, translateImage } from "../../Utility/utils";

export default function SpinWheel(props) {
  const svgSize = 100;
  const imgWidth = 35 * (1 + Math.exp(2 - 0.45 * props.participantList.length));
  const offset = svgSize / 2 - imgWidth / 2;
  const radius = 0.49 * svgSize;
  const holeWidth = 0.7 * radius;
  const imgRadius = radius - holeWidth / 2;

  const segmentPath = (currentSegment, segmentNumber) => {
    const center = svgSize / 2;
    const degrees = 360 / segmentNumber;
    const start = degrees * currentSegment;
    const end = degrees * (currentSegment + 1);
    const arc = Math.abs(start - end) > 180 ? 1 : 0;

    const point = (radius, degree) =>
      polarToCartesian(center, center, radius, degree)
        .map((currentSegment) => currentSegment.toPrecision(5))
        .join(",");

    const path = [
      `M${point(radius, start)}`, // M: Move to
      `A${radius},${radius},0,${arc},1,${point(radius, end)}`, // A: Elliptical arc
      `L${point(radius - holeWidth, end)}`, // L: Line to
      `A${radius - holeWidth},${radius - holeWidth},0,${arc},0,${point(
        radius - holeWidth,
        start
      )}`, // A: Elliptical arc
      "Z", // Close path
    ].join("");
    return path;
  };

  const createNSegments = (n) => {
    const segments = [];
    for (let i = 0; i < n; i++) {
      let translation = translateImage(offset, imgRadius, imgWidth, i, n);
      segments.push(
        <G key={i}>
          <Defs>
            <ClipPath id={"shape" + String(i)} height="40" width="40">
              <Path d={segmentPath(i, n)} fill="none" />
            </ClipPath>
          </Defs>
          <G clipPath={"url(#shape" + String(i) + ")"}>
            <Image
              transform={"rotate(" + translation.slice(0, 3) + ")"}
              x={translation[3]}
              y={translation[4]}
              width={imgWidth}
              height={imgWidth}
              href={props.participantList[i].ImgPath}
            />
            <Path
              d={segmentPath(i, n)}
              fill={"none"}
              stroke={"#E2E6FE"}
              strokeWidth={"0.6px"}
            />
          </G>
        </G>
      );
    }
    return segments;
  };

  const createDonut = img => {
    const center = svgSize/2
    const holeRadius = holeWidth/2

    return (
    <G>
      <Defs>
        <Pattern id="pattern" patternUnits="userSpaceOnUse" width="100" height="100">
          <Image href={img} x={0} y={0} width={svgSize} height={svgSize}/>
        </Pattern>
      </Defs>
      <Circle cx={center} cy={center} r={radius} stroke={"#E2E6FE"} strokeWidth={"0.6px"} fill={"url(#pattern)"} />
      <Circle cx={center} cy={center} r={holeRadius} stroke={"#E2E6FE"} strokeWidth={"0.6px"} fill={"#04031b"} />
    </G>
    )}

  return (
    <Svg width="100%" height="100%" viewBox={`0 0 100 100`}>
      {props.participantList.length > 1 ? createNSegments(props.participantList.length) : 
      createDonut(props.participantList[0].ImgPath)}
    </Svg>
  );
}
