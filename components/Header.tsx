import { Box, Button, Drawer } from "@mui/material";
import Image from "next/image";
import image from "../public/img/image_1548826267907.png";

import { useEffect, useState } from "react";
import Right from "./Right";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const Scrol = () => {
  //   if (window.scrollY > 0) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // };

  return (
    <header className={`${isScrolled && "red"}`}>
      <Box width="100%" height="30px" display="flex">
        <Box
          width={{ xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width={{ xs: "40%", sm: "30%", md: "25%", lg: "25%", xl: "30%" }}
            height="20px"
            display={{ xs: "flex" }}
            justifyContent={{ xs: "center" }}
          >
            <Image src={image} />
          </Box>
        </Box>
        <Box
          sx={{ listStyle: "none" }}
          width={{ xs: "10%", sm: "20%", md: "50%", lg: "50%", xl: "50%" }}
          display="flex"
          justifyContent="end"
          alignItems="center"
        >
          <ul>
            <li>
              <h1>
                <Right />
              </h1>
            </li>
          </ul>
        </Box>
      </Box>
    </header>
  );
}

export default Header;
