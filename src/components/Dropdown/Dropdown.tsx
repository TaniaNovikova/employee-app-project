import { useState } from "react";
import { CaretDown, CaretRight } from "@phosphor-icons/react";

import {
  StyledBlock,
  StyledButton,
  StyledLi,
  StyledLiWrapper,
  StyledUl,
  UlWrapper,
} from "./styles";
import UpTriangle2 from "components/UpTriangle2/UpTriangle2";
import { v4 } from "uuid";
import { DropdownProps } from "types";

function Dropdown({ options, dropdownName, onOptionClick }: DropdownProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const optionsMap = options.map((option) => (
    <StyledLiWrapper key={v4()}>
      <StyledLi
        onClick={() => {
          setIsExpanded(false);
          onOptionClick(option);
        }}
      >
        {option}
      </StyledLi>
    </StyledLiWrapper>
  ));

  return (
    <StyledBlock>
      <StyledButton
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {dropdownName}
        {isExpanded && <CaretDown size={28} />}
        {!isExpanded && <CaretRight size={28} />}
      </StyledButton>
      {isExpanded && (
        <UlWrapper>
          <StyledUl>
            <UpTriangle2 />
            {optionsMap}
          </StyledUl>
        </UlWrapper>
      )}
    </StyledBlock>
  );
}

export default Dropdown;
