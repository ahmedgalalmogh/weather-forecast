import { styled, Stack } from "@mui/material";
export const Card = styled(Stack)(({ theme }) => ({
  background: "rgba(222, 217, 204,0.2);",
  color: "#FFFFFF",
  padding: "20px 50px",
  borderRadius: "20px",
  flexDirection: "column",
  alignItems: "space-between",
  minWidth: "400px",
  width: "100%",
  [theme.breakpoints.down(900)]: {
    minWidth: "auto",
    width: "auto",
    textAlign: "center !important",
  },
}));
export const Wrapper = styled(Stack)(({ theme }) => ({
  overflow: "auto",
  margin: "20px",
  flexDirection: "column",
  [theme.breakpoints.down(900)]: {
    overflowX: "hidden",
    width: "95%",
  },
}));
export const RowElement = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "baseLine",
}));
