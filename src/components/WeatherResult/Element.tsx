import { Stack, Typography, Divider } from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import { ElementProps } from "./types";

const Element = ({
  header,
  result,
  C_extension,
  Icon,
  divider,
}: ElementProps) => {
  return (
    <>
      <Stack
        sx={{ marginBottom: "10px", marginTop: "10px" }}
        direction={"column"}>
        <Typography sx={{ textAlign: "center" }} variant='h4'>
          {header}{" "}
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={1}
          justifyContent={"center"}>
          <Typography sx={{ textAlign: "center" }} variant='h5'>
            {result}
            {C_extension && (
              <Typography variant='body2' display={"inline"}>
                C
              </Typography>
            )}
          </Typography>
          {Icon && <ThermostatIcon sx={{ color: "white" }} />}
        </Stack>
      </Stack>
      {divider && (
        <Divider
          orientation='horizontal'
          sx={{ borderColor: "whiteSmoke !important" }}
        />
      )}
    </>
  );
};
export default Element;
