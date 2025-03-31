import React from "react";
import styled from "styled-components";

type TableDisplayProps = {
  data: Record<string, any>[];
};

const TableContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
  overflow-y: auto;
  max-height: 400px;
  background-color: #ffffff;
  width: 45vw;
  transition: all 0.3s ease-in-out;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  color: #333;
`;

const TableHeader = styled.th`
  padding: 14px 18px;
  text-align: left;
  background-color: #e8eff5;
  font-weight: 700;
  color: #222;
  border-bottom: 2px solid #dfe3e8;
  text-transform: uppercase;
`;

const TableRow = styled.tr`
  background-color: #fff;
  transition: background-color 0.2s ease-in-out;

  &:nth-child(even) {
    background-color: #f9fafb;
  }
  
  &:hover {
    background-color: #eef1f5;
  }
`;

const TableCell = styled.td`
  padding: 14px 18px;
  text-align: left;
  border-bottom: 1px solid #e1e4e8;
  font-size: 14px;
`;

const NoDataMessage = styled.p`
  text-align: center;
  color: #6a737d;
  font-size: 16px;
  font-style: italic;
  margin: 20px 0;
`;

const TableDisplay: React.FC<TableDisplayProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <TableContainer>
        <NoDataMessage>No data available.</NoDataMessage>
      </TableContainer>
    );
  }

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <TableHeader key={key}>{key.replace(/_/g, ' ').toUpperCase()}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {Object.values(row).map((value, idx) => (
                <TableCell key={idx}>{String(value)}</TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default TableDisplay;
