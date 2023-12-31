import { Typography, Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link, useNavigate } from "react-router-dom";

export default function PageHeader({ children, hasButton, linkPath, title }) {
  const navigate = useNavigate();
  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <Typography
          sx={{ fontWeight: 700, fontSize: "1.4rem", mb: 2, color: "#000000" }}
        >
          {children}
        </Typography>
      </Grid>
      {hasButton && (
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate(linkPath)}
          >
            <AddIcon />
            Add {title}
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
