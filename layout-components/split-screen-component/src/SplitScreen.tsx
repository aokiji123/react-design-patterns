import React from 'react';
import styled from 'styled-components';

interface PaneProps {
  weight: number;
}

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div<PaneProps>`
  flex: ${props => props.weight}
`;

interface SplitScreenProps {
  children?: React.ReactNode;
  leftWeight: number;
  rightWeight: number;
}

export const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }: SplitScreenProps) => {
  const [left, right] = children as React.ReactNode[];
  return (
    <Container>
      <Pane weight={leftWeight}>
        {left}
      </Pane>
      <Pane weight={rightWeight}>
        {right}
      </Pane>
    </Container>
  );
};
