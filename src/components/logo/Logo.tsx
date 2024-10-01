import Typography from "@mui/material/Typography";

export const Logo = () => {
  const handleClick = () => {};
  return (
    <Typography
      variant={"h4"}
      onClick={handleClick}
      sx={{
        fontWeight: "1000",
      }}
    >
      pawsies
    </Typography>
  );
};
