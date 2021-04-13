import React, { useMemo } from 'react';
import { styled } from '@superset-ui/core';

type VisProps = {
  className?: string;
  width: number;
  height: number;
  queriesData: any;
};

const Header = styled.h1`
  font-family: ${({ theme }) => theme.typography.families.sansSerif};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Vis({ className = '', queriesData }: VisProps) {
  const stringyQueriesData = useMemo(() => {
    return JSON.stringify(queriesData, null, 2);
  }, [queriesData]);

  return (
    <>
      <Header className={className}>Hello world!</Header>
      <pre>{stringyQueriesData}</pre>
    </>
  );
}
