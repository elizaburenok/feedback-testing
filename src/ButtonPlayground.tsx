import React, { useState } from 'react';
import { Button } from './components/Button';
import '../tokens/css-variables.css';

export const ButtonPlayground: React.FC = () => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  const toggleLoading = (key: string) => {
    setLoadingStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    // Auto-disable after 2 seconds
    if (!loadingStates[key]) {
      setTimeout(() => {
        setLoadingStates((prev) => ({
          ...prev,
          [key]: false,
        }));
      }, 2000);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 24 }}>
      <h2 style={{ marginBottom: 8 }}>Button Component Playground</h2>

      {/* Primary Buttons */}
      <section>
        <h3 style={{ marginBottom: 16 }}>Primary Type</h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button type="Primary" state="Default">Действие</Button>
          <Button type="Primary" state="Hovered">Действие</Button>
          <Button type="Primary" state="Disabled">Действие</Button>
          <Button 
            type="Primary" 
            loading={loadingStates['primary-loading']}
            onClick={() => toggleLoading('primary-loading')}
          >
            Действие
          </Button>
        </div>
      </section>

      {/* Secondary Buttons */}
      <section>
        <h3 style={{ marginBottom: 16 }}>Secondary Type</h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button type="Secondary" state="Default">Действие</Button>
          <Button type="Secondary" state="Hovered">Действие</Button>
          <Button type="Secondary" state="Disabled">Действие</Button>
          <Button 
            type="Secondary" 
            loading={loadingStates['secondary-loading']}
            onClick={() => toggleLoading('secondary-loading')}
          >
            Действие
          </Button>
        </div>
      </section>

      {/* Transparent Buttons */}
      <section>
        <h3 style={{ marginBottom: 16 }}>Transparent Type</h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button type="Transparent" state="Default">Действие</Button>
          <Button type="Transparent" state="Hovered">Действие</Button>
          <Button type="Transparent" state="Disabled">Действие</Button>
          <Button 
            type="Transparent" 
            loading={loadingStates['transparent-loading']}
            onClick={() => toggleLoading('transparent-loading')}
          >
            Действие
          </Button>
        </div>
      </section>

      {/* White Buttons */}
      <section>
        <h3 style={{ marginBottom: 16 }}>White Type</h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button type="White" state="Default">Действие</Button>
          <Button type="White" state="Hovered">Действие</Button>
          <Button type="White" state="Disabled">Действие</Button>
          <Button 
            type="White" 
            loading={loadingStates['white-loading']}
            onClick={() => toggleLoading('white-loading')}
          >
            Действие
          </Button>
        </div>
      </section>

      {/* Interactive Examples */}
      <section>
        <h3 style={{ marginBottom: 16 }}>Interactive Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <Button 
              type="Primary" 
              onClick={() => alert('Primary button clicked!')}
            >
              Click Me
            </Button>
            <Button 
              type="Secondary" 
              onClick={() => alert('Secondary button clicked!')}
            >
              Click Me
            </Button>
            <Button 
              type="Transparent" 
              onClick={() => alert('Transparent button clicked!')}
            >
              Click Me
            </Button>
            <Button 
              type="White" 
              onClick={() => alert('White button clicked!')}
            >
              Click Me
            </Button>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <Button type="Primary" disabled>Disabled Button</Button>
            <Button type="Secondary" disabled>Disabled Button</Button>
            <Button type="Transparent" disabled>Disabled Button</Button>
            <Button type="White" disabled>Disabled Button</Button>
          </div>
        </div>
      </section>

      {/* All Variants Grid (matching Figma design) */}
      <section>
        <h3 style={{ marginBottom: 16 }}>All Variants Grid</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: 16,
          maxWidth: '1200px'
        }}>
          {/* Row 1: Primary */}
          <div>
            <div style={{ marginBottom: 8, fontSize: '12px', color: '#666' }}>Primary Default</div>
            <Button type="Primary" state="Default">Действие</Button>
          </div>
          <div>
            <div style={{ marginBottom: 8, fontSize: '12px', color: '#666' }}>Primary Hovered</div>
            <Button type="Primary" state="Hovered">Действие</Button>
          </div>
          <div>
            <div style={{ marginBottom: 8, fontSize: '12px', color: '#666' }}>Primary Disabled</div>
            <Button type="Primary" state="Disabled">Действие</Button>
          </div>
          <div>
            <div style={{ marginBottom: 8, fontSize: '12px', color: '#666' }}>Primary Loading</div>
            <Button type="Primary" state="Loading">Действие</Button>
          </div>

          {/* Row 2: Secondary */}
          <div>
            <div style={{ marginBottom: 8, fontSize: '12px', color: '#666' }}>Secondary Default</div>
            <Button type="Secondary" state="Default">Действие</Button>
          </div>
          <div>
            <div style={{ marginBottom: 8, fontSize: '12px', color: '#666' }}>Secondary Hovered</div>
            <Button type="Secondary" state="Hovered">Действие</Button>
          </div>
          <div>
            <div style={{ marginBottom: 8, fontSize: '12px', color: '#666' }}>Secondary Disabled</div>
            <Button type="Secondary" state="Disabled">Действие</Button>
          </div>
          <div>
            <div style={{ marginBottom: 8, fontSize: '12px', color: '#666' }}>Secondary Loading</div>
            <Button type="Secondary" state="Loading">Действие</Button>
          </div>

          {/* Row 3: Transparent */}
          <div>
            <div style={{ marginBottom: 8, fontSize: '12px', color: '#666' }}>Transparent Default</div>
            <Button type="Transparent" state="Default">Действие</Button>
          </div>
          <div>
            <div style={{ marginBottom: 8, fontSize: '12px', color: '#666' }}>Transparent Hovered</div>
            <Button type="Transparent" state="Hovered">Действие</Button>
          </div>
          <div>
            <div style={{ marginBottom: 8, fontSize: '12px', color: '#666' }}>Transparent Disabled</div>
            <Button type="Transparent" state="Disabled">Действие</Button>
          </div>
          <div>
            <div style={{ marginBottom: 8, fontSize: '12px', color: '#666' }}>Transparent Loading</div>
            <Button type="Transparent" state="Loading">Действие</Button>
          </div>

          {/* Row 4: White */}
          <div>
            <div style={{ marginBottom: 8, fontSize: '12px', color: '#666' }}>White Default</div>
            <Button type="White" state="Default">Действие</Button>
          </div>
          <div>
            <div style={{ marginBottom: 8, fontSize: '12px', color: '#666' }}>White Hovered</div>
            <Button type="White" state="Hovered">Действие</Button>
          </div>
          <div>
            <div style={{ marginBottom: 8, fontSize: '12px', color: '#666' }}>White Disabled</div>
            <Button type="White" state="Disabled">Действие</Button>
          </div>
          <div>
            <div style={{ marginBottom: 8, fontSize: '12px', color: '#666' }}>White Loading</div>
            <Button type="White" state="Loading">Действие</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ButtonPlayground;

