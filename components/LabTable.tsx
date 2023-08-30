"use client";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const properties = [
  {
    id: 1,
    title: "Концентрация азота (IV) оксида (азота диоксида)",
  },
  {
    id: 2,
    title: "Концентрация азота (II) оксида (азота оксида)",
  },
  {
    id: 3,
    title:
      "Концентрация серы диоксида, (ангидрида сернистого, серы (IV) оксида, сернистого газа)",
  },
  {
    id: 4,
    title: "Концентрация углерода оксида (окиси углерода, угарного газа)",
  },
  {
    id: 5,
    title: "Концентрация кислорода",
  },
];

const LabTable = () => {
  return (
    <TableContainer whiteSpace="pre-wrap" className="text-sm xl:text-lg">
      <Table variant="striped" colorScheme="blue">
        <Thead>
          <Tr>
            <Th>Номер</Th>
            <Th>Вещество</Th>
          </Tr>
        </Thead>
        <Tbody>
          {properties.map((p) => (
            <Tr key={p.id}>
              <Td>{p.id}</Td>
              <Td>{p.title}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Номер</Th>
            <Th>Вещество</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default LabTable;
