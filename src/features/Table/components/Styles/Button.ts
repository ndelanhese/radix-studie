import { styled } from "@stitches/react";

export const button = styled("button", {
  background: "black",
  color: "white",
  border: "1px solid green",
  borderRadius: "5px",
  transition: '0.3s ease-out', 
  "&:hover": {
    backgroundColor: "lightgray",
    color: "black"
  },
});
