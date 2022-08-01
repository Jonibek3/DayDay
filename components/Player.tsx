import { Box } from "@mui/material";

function Player() {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgcolor="white"
    >
      <h2 className="h2player">News & Event</h2>
      <Box pt="100px" width="80%" height="600px">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Tp8A4GEVKGU?list=TLGGaWt-TEjdZVkyNjA3MjAyMg"
          title="당신의 열정을 멈추지 마세요_데이데이 실크 엣지: dance 30초"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
}

export default Player;
