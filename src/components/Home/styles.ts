import { Stack, styled } from "@mui/material";
import { NativeSelect } from "@mui/material";

export const Card = styled(Stack)(({ theme }) => ({
  background: "rgba(222, 217, 204,0.2);",
  color: "#FFFFFF",
  padding: "20px 50px",
  borderRadius: "20px",
  flexDirection: "column",
  alignItems: "space-between",
  [theme.breakpoints.down(900)]: {
    width: "95% !important",
  },
}));

export const Select = styled(NativeSelect)(({ theme }) => ({
  "&:before": {
    borderColor: "#FFFFFF",
  },
  "&:hover": {
    borderColor: "#FFFFFF",
  },
  "&:after": {
    borderColor: "#FFFFFF",
  },
  color: "#FFFFFF",
  fontSize: "20px",
  fill: "#white",
}));