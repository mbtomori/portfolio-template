import React from 'react';
import { Table } from 'react-bootstrap';
import { SkillInterface } from "../../../models/skillInterface";
import { SkillRow } from "./skillRow";

interface SkillsTableProps {
  skills: SkillInterface[];
  headerNames: string[];
}

export const SkillsTable: React.FC<SkillsTableProps> = ({ skills, headerNames }) => {
  return (
    <Table className="mt-3">
      <thead>
        <tr>
          {headerNames.map((header, index) => (
            <th key={index}><h1>{header}</h1></th>
          ))}
        </tr>
      </thead>
      <tbody>
        {skills.map((skill) => (
          <SkillRow key={skill.id} skill={skill} />
        ))}
      </tbody>
    </Table>
  );
};