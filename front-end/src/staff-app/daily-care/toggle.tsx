import React, { useState } from "react"
import { Colors } from "shared/styles/colors"
import { BorderRadius, FontSize } from "shared/styles/styles"
import styled from "styled-components"

const Toggle: React.FC<any> = ({ onItemClick }) => {
  const [nameSort, setNameSort] = useState<string>("")
  const [direction, setDirection] = useState<string>("asc")

  const handleNameSort = (sortType: string) => {
    setNameSort(sortType)

    if (sortType === "asc") {
      setDirection("desc")
      onItemClick("desc")
    } else {
      setDirection("asc")
      onItemClick("asc")
    }
  }

  const handleNameSortToggle = () => {
    if (nameSort === "asc") {
      setNameSort("desc")
      setDirection("desc")
      onItemClick("desc")
    } else {
      setNameSort("asc")
      setDirection("asc")
      onItemClick("asc")
    }
  }
  return (
    <S.Toggle>
      <S.ToggleText onClick={() => handleNameSort("asc")}>asc</S.ToggleText>
      <S.ToggleHandle direction={direction} onClick={handleNameSortToggle}></S.ToggleHandle>
      <S.ToggleText onClick={() => handleNameSort("desc")}>desc</S.ToggleText>
    </S.Toggle>
  )
}

export default Toggle

const S = {
  Toggle: styled.div`
    position: relative;
    width: 90px;
    height: 30px;
    font-size: ${FontSize.u5};
    line-height: 26px;
    background: ${Colors.blue.light};
    text-transform: uppercase;
    border-radius: ${BorderRadius.default};
    display: flex;
    justify-content: space-between;
    border: 1px solid ${Colors.neutral.base};
  `,

  ToggleText: styled.div`
    position: relative;
    padding: 2px 5px;
    cursor: pointer;
  `,

  ToggleHandle: styled.div<{ direction: string }>`
    position: absolute;
    top: 2px;
    right: ${({ direction }) => (direction === "asc" ? "4px" : "auto")};
    left: ${({ direction }) => (direction === "desc" ? "4px" : "auto")};
    bottom: 2px;
    width: 45%;
    z-index: 10;
    background: ${Colors.blue.darker};
    border-radius: ${BorderRadius.default};
    border: 1px solid ${Colors.neutral.lighter};
    cursor: pointer;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 7px;
      bottom: 7px;
      width: 2px;
      background: ${Colors.neutral.lighter};
      left: 16px;
    }

    &:after {
      left: 22px;
    }
  `,
}
