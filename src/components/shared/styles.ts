import { Stack, styled, Typography, AppBar, Box } from "@mui/material";

//////    Not Found Styles ////////////////////
export const NotFoundStack = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const NotFountText = styled(Typography)(({ theme }) => ({
  marginTop: "5%",
  color: "#7D8084",
  fontWeight: "normal",
  textAlign: "center",
}));
/////////////////////////////////////////////

////////////// NAV Bar Styles ////////////////
export const StyledNavBar = styled(AppBar)(({ theme }) => ({
  background: `transparent linear-gradient(45deg,#54416d 05%, 	 #31255a 100%) 0% 0% padding-box`,
  position: "static",
}));
export const Logo = styled(Typography)(({ theme }) => ({
  mr: 2,
  fontFamily: "monospace",
  fontWeight: 800,
  letterSpacing: ".3rem",
  color: "inherit",
    textDecoration: "none",
  cursor:'pointer'
}));

/////////////////////////////////////////////

////////////// Layout Styles ////////////////
export const Overlay = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "94vh",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  position: "absolute",
  top: "0",
  left: "0",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));
export const LayoutWrapper = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${"/static/evining.webp"})`,
  position: "relative",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "94vh",
}));

/////////////////////////////////////////////
