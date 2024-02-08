import React from 'react';
import { SkillInterface } from "../../../models/resume/skillInterface";

interface SkillItemProps {
    skill: SkillInterface;
}

export const SkillRow: React.FC<SkillItemProps> = ({ skill }) => {
  const { category, skills } = skill;

  return (
    <tr>
      <td className="text-body fw-medium">{category}</td>
      <td className="text-body">{skills.join(', ')}</td>
    </tr>
  );
};