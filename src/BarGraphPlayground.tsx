import React, { useState } from 'react';
import { BarGraph, type BarGraphDataPoint } from './components/BarGraph';
import '../tokens/css-variables.css';

export const BarGraphPlayground: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Sample data for basic bar graph
  const basicData: BarGraphDataPoint[] = [
    { label: 'Jan', progressLevel: '100%' },
    { label: 'Feb', progressLevel: '75%' },
    { label: 'Mar', progressLevel: '50%' },
    { label: 'Apr', progressLevel: '25%' },
    { label: 'May', progressLevel: '0%' },
  ];

  // Sample data with different states
  const stateData: BarGraphDataPoint[] = [
    { label: 'Q1', progressLevel: '80%', state: 'Default' },
    { label: 'Q2', progressLevel: '60%', state: 'Selected' },
    { label: 'Q3', progressLevel: '40%', state: 'Default' },
    { label: 'Q4', progressLevel: '20%', state: 'Inactive' },
  ];

  // Sample data with segmented bars
  const segmentedData: BarGraphDataPoint[] = [
    { label: 'Skill 1', progressLevel: '100%', isSegmented: true },
    { label: 'Skill 2', progressLevel: '80%', isSegmented: true },
    { label: 'Skill 3', progressLevel: '60%', isSegmented: true },
    { label: 'Skill 4', progressLevel: '40%', isSegmented: true },
  ];

  // Sample data with saldo bars
  const saldoData: BarGraphDataPoint[] = [
    { label: 'Week 1', progressLevel: '70%', isSaldo: true },
    { label: 'Week 2', progressLevel: '50%', isSaldo: true },
    { label: 'Week 3', progressLevel: '30%', isSaldo: true },
    { label: 'Week 4', progressLevel: '90%', isSaldo: true },
  ];

  // Interactive data
  const interactiveData: BarGraphDataPoint[] = basicData.map((point, index) => ({
    ...point,
    state: selectedIndex === index ? 'Selected' : 'Default',
    isHover: hoveredIndex === index,
    onClick: () => setSelectedIndex(index),
    onMouseEnter: () => setHoveredIndex(index),
    onMouseLeave: () => setHoveredIndex(null),
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, padding: 24, maxWidth: 1400 }}>
      <h1 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '24px', fontWeight: 600 }}>
        Bar Graph Component Playground
      </h1>

      {/* Basic bar graph */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Basic Bar Graph
        </h2>
        <div style={{ 
          width: '100%', 
          height: '194px', 
          background: 'var(--color-bg-default)', 
          padding: 16, 
          borderRadius: '8px',
          border: '1px solid var(--color-primitive-neutral-2)'
        }}>
          <BarGraph 
            data={basicData}
            yAxisLabels={['100%', '75%', '50%', '25%', '0%']}
          />
        </div>
      </section>

      {/* Bar graph with different states */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Bar Graph with Different States
        </h2>
        <div style={{ 
          width: '100%', 
          height: '194px', 
          background: 'var(--color-bg-default)', 
          padding: 16, 
          borderRadius: '8px',
          border: '1px solid var(--color-primitive-neutral-2)'
        }}>
          <BarGraph 
            data={stateData}
            yAxisLabels={['100%', '75%', '50%', '25%', '0%']}
          />
        </div>
      </section>

      {/* Bar graph with segmented bars */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Bar Graph with Segmented Bars
        </h2>
        <div style={{ 
          width: '100%', 
          height: '194px', 
          background: 'var(--color-bg-default)', 
          padding: 16, 
          borderRadius: '8px',
          border: '1px solid var(--color-primitive-neutral-2)'
        }}>
          <BarGraph 
            data={segmentedData}
            yAxisLabels={['100%', '75%', '50%', '25%', '0%']}
          />
        </div>
      </section>

      {/* Bar graph with saldo bars */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Bar Graph with Saldo Bars
        </h2>
        <div style={{ 
          width: '100%', 
          height: '194px', 
          background: 'var(--color-bg-default)', 
          padding: 16, 
          borderRadius: '8px',
          border: '1px solid var(--color-primitive-neutral-2)'
        }}>
          <BarGraph 
            data={saldoData}
            yAxisLabels={['100%', '75%', '50%', '25%', '0%']}
          />
        </div>
      </section>

      {/* Interactive bar graph */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Interactive Bar Graph (Click and Hover)
        </h2>
        <div style={{ 
          width: '100%', 
          height: '194px', 
          background: 'var(--color-bg-default)', 
          padding: 16, 
          borderRadius: '8px',
          border: '1px solid var(--color-primitive-neutral-2)'
        }}>
          <BarGraph 
            data={interactiveData}
            yAxisLabels={['100%', '75%', '50%', '25%', '0%']}
          />
        </div>
        {selectedIndex !== null && (
          <p style={{ marginTop: 8, color: 'var(--color-primitive-secondary)' }}>
            Selected: {basicData[selectedIndex].label}
          </p>
        )}
      </section>

      {/* Bar graph without grid */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Bar Graph without Grid Lines
        </h2>
        <div style={{ 
          width: '100%', 
          height: '194px', 
          background: 'var(--color-bg-default)', 
          padding: 16, 
          borderRadius: '8px',
          border: '1px solid var(--color-primitive-neutral-2)'
        }}>
          <BarGraph 
            data={basicData}
            yAxisLabels={['100%', '75%', '50%', '25%', '0%']}
            showGrid={false}
          />
        </div>
      </section>

      {/* Bar graph with custom Y-axis labels */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Bar Graph with Custom Y-axis Labels
        </h2>
        <div style={{ 
          width: '100%', 
          height: '194px', 
          background: 'var(--color-bg-default)', 
          padding: 16, 
          borderRadius: '8px',
          border: '1px solid var(--color-primitive-neutral-2)'
        }}>
          <BarGraph 
            data={basicData}
            yAxisLabels={['100', '80', '60', '40', '20', '0']}
            gridLineCount={6}
          />
        </div>
      </section>
    </div>
  );
};

export default BarGraphPlayground;

