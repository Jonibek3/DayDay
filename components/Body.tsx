import { Box } from "@mui/material";
import { log } from "console";
import Image from "next/image";
import { useState } from "react";
import img from "../public/img/image_1548680951700_2500.jpeg";

function Body() {
  const [active, setActive] = useState(false);
  let interval = setInterval(() => {
    setActive(!active);
  }, 5000);

  return (
    <Box width="100%" height="100vh">
      <Box
        width="100%"
        className={active ? "boxbody" : "boxbody2"}
        height="100vh"
      ></Box>
      {/* <Box width="100%" className="boxbody2" height="100vh"></Box> */}
    </Box>
  );
}

export default Body;
