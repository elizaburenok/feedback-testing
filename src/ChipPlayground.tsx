import React from 'react';
import { Chip } from './components/Chip';
import '../tokens/css-variables.css';

export const ChipPlayground: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 16 }}>
      <div style={{ display: 'flex', gap: 16 }}>
        <Chip label="Text S" />
        <Chip label="Text S" selected />
        <Chip label="Text S" disabled />
      </div>

      <div style={{ display: 'flex', gap: 16 }}>
        <Chip label="Text S" variant="dropdown" />
        <Chip label="Text S" variant="dropdown" dropdownOpen />
        <Chip label="Text S" variant="dropdown" selected showResetIcon />
      </div>

      <div style={{ display: 'flex', gap: 16 }}>
        <Chip label="Text S" variant="tab" />
        <Chip label="Text S" variant="tab" selected />
        <Chip label="Text S" variant="tab" selected count={3} />
      </div>

      <div style={{ display: 'flex', gap: 16 }}>
        <Chip label="Text S" variant="action" />
        <Chip label="Text S" variant="action" selected />
        <Chip label="Text S" variant="action" selected showResetIcon />
      </div>
    </div>
  );
};

export default ChipPlayground;


