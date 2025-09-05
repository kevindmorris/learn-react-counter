import { Add, Remove, RestartAlt } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

export default function Component() {
  const [value, setValue] = React.useState<number>(0);

  const increment = () => {
    setValue((prev) => prev + 1);
  };

  const decrement = () => {
    setValue((prev) => prev - 1);
  };

  const reset = () => {
    setValue(0);
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ minWidth: 400 }}>
        <CardContent sx={{ height: "100%" }}>
          <Typography
            variant="h1"
            component="div"
            textAlign="center"
            fontWeight={500}
          >
            {value.toLocaleString()}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton color="error" onClick={decrement}>
              <Remove />
            </IconButton>
            <IconButton color="primary" onClick={reset}>
              <RestartAlt />
            </IconButton>
            <IconButton color="success" onClick={increment}>
              <Add />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
