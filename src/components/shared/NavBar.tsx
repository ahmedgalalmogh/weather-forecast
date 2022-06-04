import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { StyledNavBar, Logo } from "./styles";
import { useNavigate } from "react-router-dom";

const pages = [
  { title: "Home", url: "/" },
  { title: "City Dashboard", url: "city-dashboard" },
];
type PageType = { title: string; url: string };

const AppNavBar = () => {
  const navigate = useNavigate();
  return (
    <StyledNavBar>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AcUnitIcon sx={{ display: "flex", mr: 1 }} />
          <Logo
            variant='h6'
            noWrap
            onClick={() => {
              navigate("/", { replace: true });
            }}
            sx={{
              display: { xs: "none", md: "flex" },
            }}>
            My-Weather
          </Logo>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map((page: PageType) => (
              <Button
                href={page.url}
                onClick={() => {
                  navigate(page?.url, { replace: true });
                }}
                key={page.title}
                sx={{ my: 2, color: "white", display: "block" }}>
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </StyledNavBar>
  );
};
export default AppNavBar;
