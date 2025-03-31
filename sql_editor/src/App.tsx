import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import QuerySelector from "./components/QuerySelector";
import QueryEditor from "./components/QueryEditor";
import TableDisplay from "./components/TableDisplay";
import Footer from "./components/Footer";
import isValidSQL from "./utils/queryValidator";

type Query = {
  id: number;
  label: string;
  query: string;
};

type QueryResult = Record<string, any[]>;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Inter", sans-serif;
  min-height: 100vh;
  background-color: #f8fafc;
  color: #1e293b;
  padding-top: 70px;
`;

const MainContent = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 20px;
  margin: 20px;
  padding: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Sidebar = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex: 1;
    padding: 15px;
  }
`;

const EditorContainer = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex: 1;
    padding: 15px;
  }
`;

const ValidationMessage = styled.p`
  color: #ef4444;
  font-weight: 600;
  margin: 10px 0;
  font-size: 1rem;
  text-align: center;
`;

const queries: Query[] = [
  { id: 1, label: "Query 1", query: "SELECT * FROM users;" },
  { id: 2, label: "Query 2", query: "SELECT name, age FROM employees;" },
  { id: 3, label: "Query 3", query: "SELECT product_name, price FROM products;" },
  { id: 4, label: "Query 4", query: "SELECT city, population FROM cities;" },
  { id: 5, label: "Query 5", query: "SELECT id, name, city FROM companies;" },
];

const mockData: QueryResult = {
  "SELECT * FROM users;": [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 28 },
    { id: 3, name: "Samuel Lee", age: 35 },
  ],
  "SELECT name, age FROM employees;": [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 40 },
  ],
  "SELECT product_name, price FROM products;": [
    { product_name: "Laptop", price: 1000 },
    { product_name: "Phone", price: 800 },
    { product_name: "Tablet", price: 600 },
    { product_name: "Headphones", price: 150 },
  ],
  "SELECT city, population FROM cities;": [],
  "SELECT id, name, city FROM companies;": Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    name: `Company ${index + 1}`,
    city: `City ${index + 1}`,
  })),
};

const App: React.FC = () => {
  const [selectedQuery, setSelectedQuery] = useState<string>(queries[0].query);
  const [queryResult, setQueryResult] = useState<any[]>(mockData[selectedQuery] || []);

  const handleQueryChange = (query: string) => {
    setSelectedQuery(query);
    setQueryResult(mockData[query] || []);
  };

  return (
    <>
      <Header />
      <AppContainer>
        <MainContent>
          <Sidebar>
            <QuerySelector queries={queries} onSelect={handleQueryChange} />
            <QueryEditor query={selectedQuery} onChange={setSelectedQuery} />
            {!isValidSQL(selectedQuery) && <ValidationMessage>Invalid SQL Query</ValidationMessage>}
          </Sidebar>
          <EditorContainer>
            <TableDisplay data={queryResult} />
          </EditorContainer>
        </MainContent>
      </AppContainer>
      <Footer />
    </>
  );
};

export default App;
