import styled, { css } from "styled-components";

interface CellProps {
  isActive?: boolean;
}

const CellWrapper = styled.div<CellProps>`
  height: 3.2em;
  width: 3.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.7);
  transition: color 150ms, background-color 150ms, border-color 150ms,
    text-decoration-color 150ms, fill 150ms, stroke 150ms;
  cursor: pointer;
  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? "" : "rgb(243, 244, 246)"};
  }
  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: 700;
      color: white;
      background-color: #618AFF;
    `}
`;

interface Props extends React.PropsWithChildren {
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Cell: React.FC<Props> = ({
  onClick,
  children,
  isActive = false,
}) => {
  return (
    <CellWrapper onClick={!isActive ? onClick : undefined} isActive={isActive}>
      {children}
    </CellWrapper>
  );
};

export default Cell;
