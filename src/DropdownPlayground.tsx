import React, { useState } from 'react';
import { Dropdown, DropdownItem } from './components/Dropdown';
import '../tokens/css-variables.css';

export const DropdownPlayground: React.FC = () => {
  const [openDesktop, setOpenDesktop] = useState(false);
  const [openAdaptive, setOpenAdaptive] = useState(false);
  const [openGroups, setOpenGroups] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);
  const [openEmpty, setOpenEmpty] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');

  const sampleItems: DropdownItem[] = [
    { id: '1', label: 'Option 1', subtitle: 'Subtitle 1' },
    { id: '2', label: 'Option 2', subtitle: 'Subtitle 2' },
    { id: '3', label: 'Option 3', disabled: true },
    { id: '4', label: 'Option 4' },
    { id: '5', label: 'Option 5', subtitle: 'Subtitle 5' },
  ];

  const groupedItems: DropdownItem[] = [
    { id: '1', label: 'Group 1 - Item 1', groupId: 'group1', groupLabel: 'Group 1' },
    { id: '2', label: 'Group 1 - Item 2', groupId: 'group1' },
    { id: '3', label: 'Group 2 - Item 1', groupId: 'group2', groupLabel: 'Group 2' },
    { id: '4', label: 'Group 2 - Item 2', groupId: 'group2' },
    { id: '5', label: 'Group 3 - Item 1', groupId: 'group3', groupLabel: 'Group 3' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 16 }}>
      <div>
        <h2 style={{ marginBottom: 16 }}>Desktop Mode</h2>
        <button onClick={() => setOpenDesktop(!openDesktop)} style={{ marginBottom: 8 }}>
          Toggle Dropdown
        </button>
        {selectedItem && <p>Selected: {selectedItem}</p>}
        <div style={{ position: 'relative', width: '300px' }}>
          <Dropdown
            type="list"
            mode="desktop"
            items={sampleItems}
            open={openDesktop}
            onSelect={(item) => {
              setSelectedItem(item.label);
              setOpenDesktop(false);
            }}
            onClose={() => setOpenDesktop(false)}
          />
        </div>
      </div>

      <div>
        <h2 style={{ marginBottom: 16 }}>Adaptive Mode</h2>
        <button onClick={() => setOpenAdaptive(!openAdaptive)} style={{ marginBottom: 8 }}>
          Toggle Adaptive Dropdown
        </button>
        <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
          <Dropdown
            type="list"
            mode="adaptive"
            items={sampleItems}
            title="Select Option"
            open={openAdaptive}
            onSelect={(item) => {
              setSelectedItem(item.label);
              setOpenAdaptive(false);
            }}
            onClose={() => setOpenAdaptive(false)}
          />
        </div>
      </div>

      <div>
        <h2 style={{ marginBottom: 16 }}>Grouped List</h2>
        <button onClick={() => setOpenGroups(!openGroups)} style={{ marginBottom: 8 }}>
          Toggle Grouped Dropdown
        </button>
        <div style={{ position: 'relative', width: '300px' }}>
          <Dropdown
            type="list-groups"
            mode="desktop"
            items={groupedItems}
            open={openGroups}
            onSelect={(item) => {
              setSelectedItem(item.label);
              setOpenGroups(false);
            }}
            onClose={() => setOpenGroups(false)}
          />
        </div>
      </div>

      <div>
        <h2 style={{ marginBottom: 16 }}>Loading State</h2>
        <button onClick={() => setOpenLoading(!openLoading)} style={{ marginBottom: 8 }}>
          Toggle Loading Dropdown
        </button>
        <div style={{ position: 'relative', width: '300px' }}>
          <Dropdown
            type="loading"
            mode="desktop"
            open={openLoading}
            onClose={() => setOpenLoading(false)}
          />
        </div>
      </div>

      <div>
        <h2 style={{ marginBottom: 16 }}>Empty State</h2>
        <button onClick={() => setOpenEmpty(!openEmpty)} style={{ marginBottom: 8 }}>
          Toggle Empty Dropdown
        </button>
        <div style={{ position: 'relative', width: '300px' }}>
          <Dropdown
            type="empty"
            mode="desktop"
            emptyMessage="No items available"
            open={openEmpty}
            onClose={() => setOpenEmpty(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default DropdownPlayground;

