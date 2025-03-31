import React from "react";
import styled from "styled-components";

type QuerySelectorProps = {
  queries: { id: number; label: string; query: string }[];
  onSelect: (query: string) => void;
};

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #d1d5db;
  color: #000;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const Label = styled.label`
  font-weight: 600;
  color: #374151;
`;

const Select = styled.select`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background-color: #f9fafb;
  font-size: 14px;
  color: #000;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const QuerySelector: React.FC<QuerySelectorProps> = ({ queries, onSelect }) => {
  return (
    <SelectorContainer>
      <Label>Select Query:</Label>
      <Select onChange={(e) => onSelect(e.target.value)}>
        {queries.map((item) => (
          <option key={item.id} value={item.query}>
            {item.label}
          </option>
        ))}
      </Select>
    </SelectorContainer>
  );
};

export default QuerySelector;
