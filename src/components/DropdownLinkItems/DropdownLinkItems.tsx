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
import { DropdownLinkItemsProps } from "types";

function DropdownLinkItems({
  options,
  dropdownLinkItemsName,
}: DropdownLinkItemsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const optionsMap = options.map((option) => (
    <StyledLiWrapper key={v4()}>
      <StyledLi
        onClick={() => {
          setIsExpanded(false);
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
        {dropdownLinkItemsName}
        {isExpanded && <CaretDown size={32} fontWeight={800}/>}
        {!isExpanded && <CaretRight size={32} fontWeight={800}/>}
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

export default DropdownLinkItems;
