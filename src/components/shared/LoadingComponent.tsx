import { CircularProgress, Stack, Typography } from "@mui/material";

const LoadingComponent = ({
  errorMessage,
  loading,
}: {
  errorMessage: string;
  loading: boolean;
}) => {
  return (
    <>
      {errorMessage ? (
        <Typography variant='h5'>{errorMessage} </Typography>
      ) : (
        <Stack justifyContent={"center"} alignItems={'center'} direction={'column'}>
          <Typography variant='h5'>Detecting Your Location... </Typography>
          <CircularProgress color='inherit' />
        </Stack>
      )}
    </>
  );
};
export default LoadingComponent;
