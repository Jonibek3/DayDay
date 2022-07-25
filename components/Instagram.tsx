import React from "react";
import img1 from "../public/img/1.jpeg";
import img2 from "../public/img/2.jpeg";
import img3 from "../public/img/3.jpeg";
import img4 from "../public/img/4.jpeg";
import img5 from "../public/img/5.jpeg";
import img6 from "../public/img/6.jpeg";
import img7 from "../public/img/7.jpeg";
import img8 from "../public/img/8.jpeg";
import img9 from "../public/img/9.jpeg";
import img10 from "../public/img/10.jpeg";
import img11 from "../public/img/11.jpeg";
import img12 from "../public/img/12.jpeg";
import img13 from "../public/img/13.jpeg";
import { Box } from "@mui/system";
import Image from "next/image";

function Instagram() {
  const dataInstagram = [
    { Image: img1 },
    { Image: img2 },
    { Image: img3 },
    { Image: img4 },
    { Image: img5 },
    { Image: img6 },
    { Image: img7 },
    { Image: img8 },
    { Image: img9 },
    { Image: img10 },
    { Image: img11 },
    { Image: img12 },
    { Image: img13 },
  ];

  return (
    <Box>
      {dataInstagram.map((item, index) => (
        <Box width="100px" height="200px">
          <Image src={item.Image} />
        </Box>
      ))}
    </Box>
  );
}

export default Instagram;
