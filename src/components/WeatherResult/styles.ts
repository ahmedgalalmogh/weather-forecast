import { Button, styled } from "@mui/material";

export const DashboardButton = styled(Button)(({ theme }) => ({
  borderColor: "whiteSmoke ",
  color: "whiteSmoke",
    "&:hover": {
        background: "transparent",
        borderColor: "whiteSmoke ",
    }
}));

