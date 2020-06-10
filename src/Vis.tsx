import React from 'react';
import styled from '@superset-ui/style';

type VisProps = {
  className?: string;
  width: number;
  height: number;
};

const BasicText = styled.div`
  font-family: ${({ theme }) => theme.typography.families.sansSerif};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Vis({ className = '' }: VisProps) {
  return <BasicText className={className}>Hello world!</BasicText>;
}
