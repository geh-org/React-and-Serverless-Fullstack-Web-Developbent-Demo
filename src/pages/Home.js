import React from "react";
import { Accent } from "../styled/Random";
import { StyledTitle } from "../styled/Random";
import { CTA } from "../styled/CTA";

export default function Home() {
  return (
    <div>
      <StyledTitle>Ready to type?</StyledTitle>
      <CTA to="/game">
        Click or Type '<Accent>s</Accent>' to start playing
      </CTA>
    </div>
  );
}
