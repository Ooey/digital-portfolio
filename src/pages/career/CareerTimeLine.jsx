import React from "react";
import { AppContext } from "../../components/context";

const screenWidth = window.innerWidth;
const isMobile = screenWidth < 480;

export function CareerTimeLine({ points, setInfo }) {
    const { colorMode } = React.useContext(AppContext);
    const isLight = colorMode === "light";
    const fitWidthPx = isMobile ? screenWidth + 250 : 700
    const containerStyle = {
        display: "flex",
        width: fitWidthPx + "px",
        maxWidth: fitWidthPx + "px",
        flexDirection: "column",
    };

    const ifOneAddOne = (number) => {
        return number === 1 ? 2 : number;
    };

    const ifOneReturnZero = (number) => {
        return number === 1 ? 0 : 1;
    };

    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div style={containerStyle} className="career-timeline">
            {points.map((pointLine, pointsIndex) => {
                return (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                        key={pointsIndex}
                    >
                        {" "}
                        {pointLine.map((point, pointLineIndex) => {
                            if (Array.isArray(point.date)) {
                                return (
                                    <div
                                        style={{ margin: `25px 0`, marginLeft: pointsIndex === points.length - 1 ? 150 : 0 }}
                                        key={point.date}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                position: "relative",
                                            }}
                                        >
                                            {pointLineIndex === 0 &&
                                                pointsIndex !==
                                                points.length - 1 &&
                                                pointsIndex % 2 === 1 && (
                                                    <HorseShoeLine orientation="left" color={isLight ? "black" : "white"} />
                                                )}
                                            {pointsIndex !== points.length - 1 &&
                                                <StraightLine
                                                    length={
                                                        fitWidthPx / 2 -
                                                        40 *
                                                        ifOneReturnZero(
                                                            pointLine.length
                                                        ) -
                                                        point.length / 2
                                                    }
                                                    color={isLight ? "black" : "white"}
                                                />}
                                            <DateRange point={point} setInfo={setInfo} length={point.length} direction={
                                                pointsIndex % 2 === 1 ? 1 : 0
                                            } />
                                            <StraightLine
                                                length={
                                                    fitWidthPx / 2 -
                                                    40 *
                                                    ifOneReturnZero(
                                                        pointLine.length
                                                    ) -
                                                    point.length / 2
                                                }
                                                color={isLight ? "black" : "white"}
                                            />
                                            {pointLineIndex ===
                                                pointLine.length - 1 &&
                                                pointsIndex !==
                                                points.length - 1 &&
                                                pointsIndex % 2 !== 1 && (
                                                    <HorseShoeLine orientation="right" color={isLight ? "black" : "white"} />
                                                )}
                                            {/* {pointLineIndex ===
                                                pointLine.length - 1 &&
                                                pointsIndex ===
                                                points.length - 1 && (
                                                    <>
                                                        <svg
                                                            height="2"
                                                            width="70"
                                                        >
                                                            <line
                                                                x1="0"
                                                                y1="0"
                                                                x2="70"
                                                                y2="0"
                                                                style={{
                                                                    stroke: isLight ? "black" : "white",
                                                                    strokeWidth:
                                                                        "5px",
                                                                }}
                                                            />
                                                        </svg>
                                                        <DatePoint color={isLight ? "black" : "white"} date="Today" info={"Currently, I remain vigilant in my studies to ensure my successful graduation, while simultaneously working on my own passion-projects to enhance my skills and keep myself up to date with the newest technology standards."} setInfo={setInfo} />
                                                    </>
                                                )} */}
                                        </div>
                                    </div>
                                );
                            } else
                                return (
                                    <div
                                        style={{ margin: `25px 0` }}
                                        key={point.date}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                position: "relative",
                                            }}
                                        >
                                            {pointLineIndex === 0 &&
                                                pointsIndex !==
                                                points.length - 1 &&
                                                pointsIndex % 2 === 1 && (
                                                    <HorseShoeLine orientation="left" color={isLight ? "black" : "white"} />
                                                )}
                                            <DatePoint
                                                color={isLight ? "black" : "white"}
                                                date={point.date}
                                                info={point.info}
                                                setInfo={setInfo}
                                            />

                                            {/* straight svg horizontal line */}
                                            {pointLineIndex !==
                                                ifOneAddOne(pointLine.length) -
                                                1 && (
                                                    <StraightLine
                                                        length={
                                                            fitWidthPx /
                                                            (ifOneAddOne(
                                                                pointLine.length
                                                            ) -
                                                                1) -
                                                            40 *
                                                            ifOneReturnZero(
                                                                pointLine.length
                                                            )
                                                        }

                                                        color={isLight ? "black" : "white"}
                                                    />
                                                )}
                                            {/* svg line that does a horseshoe shape */}
                                            {pointLineIndex ===
                                                pointLine.length - 1 &&
                                                pointsIndex !==
                                                points.length - 1 &&
                                                pointsIndex % 2 !== 1 && (
                                                    <HorseShoeLine orientation="right" color={isLight ? "black" : "white"} />
                                                )}

                                            {pointLineIndex ===
                                                pointLine.length - 1 &&
                                                pointsIndex ===
                                                points.length - 1 && (
                                                    <>
                                                        <svg
                                                            height="2"
                                                            width="70"
                                                        >
                                                            <line
                                                                x1="0"
                                                                y1="0"
                                                                x2="70"
                                                                y2="0"
                                                                style={{
                                                                    stroke: "white",
                                                                    strokeWidth:
                                                                        "5px",
                                                                }}
                                                            />
                                                        </svg>
                                                        <DatePoint color={isLight ? "black" : "white"} date="Today" info={"Currently, I remain vigilant in my studies to ensure my successful graduation, while simultaneously working on my own passion-projects to enhance my skills and keep myself up to date with the newest technology standards."} setInfo={setInfo} />
                                                    </>
                                                )}
                                        </div>
                                    </div>
                                );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

const StraightLine = ({ length, color = "white" }) => {
    return (
        <svg height="2" width={length}>
            <line
                x1="0"
                y1="0"
                x2={length}
                y2="0"
                style={{
                    stroke: color,
                    strokeWidth: "5px",
                }}
            />
        </svg>
    );
};

const HorseShoeLine = ({ orientation, color }) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="83"
                height="86"
                viewBox="0 0 83 86"
                fill="none"
                style={{
                    transform: `translateY(46.78%) ${orientation === "left"
                        ? "translateX(-100%)"
                        : "translateX(100%)"
                        } rotate(${orientation === "left" ? "180" : "0"}deg)`,
                    position: "absolute",
                    left: orientation === "left" ? "0" : "unset",
                    right: orientation === "right" ? "0" : "unset",
                    origin: "right",
                }}
            >
                <path
                    d="M0 3H40C62.0914 3 80 20.9086 80 43V43C80 65.0914 62.0914 83 40 83H0"
                    stroke={color}
                    strokeWidth="2.1"
                />
            </svg>
        </>
    );
};

const DateRange = ({ point, setInfo, length = 200, direction }) => {
    const [hovering, setHovering] = React.useState(false);




    return (
        <>
            <DatePoint
                date={point.date[0]}
                info={point.info}
                color={"#0BB9E5"}
                isPartOfRange={true}
                hoveringRange={hovering}
            />
            <StraightLine length={length} color="#0BB9E5" />
            <DatePoint
                date={point.date[1]}
                info={point.info}
                color={"#0BB9E5"}
                isPartOfRange={true}
                hoveringRange={hovering}
            />
            <div
                onMouseEnter={() => {
                    setHovering(true);
                    const heading = direction === 1
                        ? `${point.date[1]} - ${point.date[0]}`
                        : `${point.date[0]} - ${point.date[1]}`;
                    setInfo({ heading, info: point.info });
                }}
                onMouseLeave={() => {
                    setHovering(false);

                }}
                style={{
                    width: `${parseInt(length) + 160}px`,
                    height: "60px",
                    position: "absolute",
                    top: "-100%",
                    right: "50%",
                    transform: "translateX(50%)",
                }}
            />
        </>
    );
};

const DatePoint = ({ date, info, setInfo, color = "white", isPartOfRange = false, hoveringRange }) => {
    const [hovering, setHovering] = React.useState(false);
    const isLight = color === "white";

    const fontColor = isLight ? "black" : "white";

    const hoverFinal = isPartOfRange ? hoveringRange : hovering;
    return (
        <div style={{ position: "relative" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        backgroundColor: color,
                        borderRadius: "15px",
                        padding: "4px 7px",
                        margin: "5px",
                        position: "absolute",
                        bottom: "100%",
                        width: "max-content",
                    }}
                >
                    <h5 style={{ color: fontColor }}>{date}</h5>
                </div>
                <svg height="30" width="30">
                    <circle
                        style={{ transition: "fill 0.2s ease-in-out" }}
                        cx="15"
                        cy="15"
                        r="13"
                        stroke={color}
                        strokeWidth="3"
                        fill={hoverFinal ? color : "transparent"}
                    />
                </svg>
            </div>
            {!isPartOfRange && <div
                onMouseEnter={() => {
                    setHovering(true);
                    setInfo({ heading: date, info: info });
                }}
                onMouseLeave={() => {
                    setHovering(false);

                }}
                style={{
                    width: "100px",
                    height: "100px",
                    position: "absolute",
                    top: "-200%",
                    left: "-100%",
                }}
            />}
        </div>
    );
};
