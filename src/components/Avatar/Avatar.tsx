// import { Image } from "@mantine/core";
// import classes from "./Avatar.module.css";

// export function Avatar() {
//   return (
//     <>
//       <div className={classes.wrapper}>
//         <svg viewBox="0 0 100 100" className={classes.svg}>
//           <defs>
//             <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="var(--mantine-color-gradient1-0)" />
//               <stop
//                 offset="100%"
//                 stopColor="var(--mantine-color-gradient2-0)"
//               />
//             </linearGradient>

//             <mask id="hex-mask">
//               {/* This defines the hexagon shape */}
//               <polygon
//                 points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
//                 fill="white"
//               />
//             </mask>
//           </defs>

//           {/* Background gradient */}
//           <rect
//             width="100"
//             height="100"
//             fill="url(#gradient)"
//             mask="url(#hex-mask)" // Apply the hexagon mask to the gradient background
//           />

//           {/* Image inside the hexagon mask */}
//           <image
//             href="src/assets/react.svg" // Your image path
//             x="0"
//             y="0"
//             width="100"
//             height="100"
//             mask="url(#hex-mask)" // Apply the hexagon mask to the image
//           />
//         </svg>
//       </div>
//     </>
//   );
// }

import { Image, Box } from "@mantine/core";
import classes from "./Avatar.module.css";

type AvatarProps = {
  src: string;
  alt?: string;
};

export function Avatar({ src, alt = "Avatar" }: AvatarProps) {
  const size = 200; // Fixed size

  // Hexagon path for the outer frame
  const framePath =
    "M 25.3985 7.4101 C 27.1797 6.4023 28.7735 6.3554 30.6016 7.4101 L 46.3516 16.4336 C 47.5237 17.1133 47.9922 17.7930 47.9922 18.9648 L 47.9922 36.9179 C 47.9922 38.1836 47.5468 38.9101 46.2110 39.6601 L 30.6016 48.5430 C 28.7266 49.5976 27.2032 49.5742 25.3985 48.5430 L 9.7891 39.6601 C 8.4532 38.9101 8.0079 38.1836 8.0079 36.9179 L 8.0079 18.9648 C 8.0079 17.7930 8.4766 17.1133 9.6485 16.4336 L 25.3985 7.4101 Z";

  // Create a smaller version of the hexagon path for the image (scaled down)
  const imagePath =
    "M 25.6985 10.4101 C 27.1797 9.6023 28.3735 9.5554 29.8016 10.4101 L 43.3516 18.4336 C 44.3237 19.0133 44.6922 19.5930 44.6922 20.5648 L 44.6922 35.1179 C 44.6922 36.1836 44.3468 36.7101 43.2110 37.3601 L 29.8016 45.3430 C 28.3266 46.1976 27.0032 46.1742 25.6985 45.3430 L 12.7891 37.3601 C 11.6532 36.7101 11.3079 36.1836 11.3079 35.1179 L 11.3079 20.5648 C 11.3079 19.5930 11.6766 19.0133 12.6485 18.4336 L 25.6985 10.4101 Z";

  return (
    <Box className={classes.wrapper}>
      {/* SVG for the hexagon frame with curved edges and gradient */}
      <svg viewBox="0 0 100 100" className={classes.svg}>
        {/* Define gradient */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--mantine-color-gradient1-0)" />
            <stop offset="100%" stopColor="var(--mantine-color-gradient2-0)" />
          </linearGradient>
        </defs>

        {/* Curved Hexagon with gradient stroke */}
        <path
          d={framePath}
          fill="none"
          stroke={`url(#gradient)`}
          strokeWidth={5}
        />
      </svg>

      {/* Mantine Image with smaller hexagon clip-path */}
      <Box
        style={{
          //   width: size,
          //   height: size,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width={size} height={size} viewBox="0 0 100 100">
          <defs>
            <clipPath id="imageClip">
              <path d={imagePath} />
            </clipPath>
          </defs>

          <foreignObject width="100" height="100" clipPath="url(#imageClip)">
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <Image
                src={src}
                alt={alt}
                fit="contain"
                style={{
                  maxWidth: "50%",
                  maxHeight: "50%",
                  objectFit: "contain",
                }}
              />
            </div>
          </foreignObject>
        </svg>
      </Box>
    </Box>
  );
}
