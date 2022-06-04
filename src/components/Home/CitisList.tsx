import { FormControl } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Select } from "./styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const CitiesList = ({
  handleSelectChange,
}: {
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => any;
}) => {
  const CityInfo = useSelector((state: RootState) => state.CityInfo);

  return (
    <>
      {CityInfo.cities && (
        <FormControl sx={{ marginBottom: "15px" }} fullWidth>
          <Select
            value={CityInfo.selectedCity}
            inputProps={{
              style: {
                fill: "white",
                borderColor: "#FFFFFF",
              },
            }}
            onChange={handleSelectChange}>
            {CityInfo?.cities?.map((city: string) => {
              return (
                <option
                  key={city}
                  style={{
                    fontSize: "16px",
                    color: "black",
                  }}
                  value={city}>
                  {city}
                </option>
              );
            })}
          </Select>
        </FormControl>
      )}
    </>
  );
};
// const Arrow = () => {
//   return <ArrowDropDownIcon sx={{ color: "white" }} />;
// };
export default CitiesList;
