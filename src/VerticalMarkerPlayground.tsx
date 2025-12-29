import React from 'react';
import { VerticalMarker } from './components/VerticalMarker';
import '../tokens/css-variables.css';

export const VerticalMarkerPlayground: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 24, maxWidth: 1200 }}>
      <h1 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '24px', fontWeight: 600 }}>
        Vertical Marker Component Playground
      </h1>

      {/* Size variants - Default state */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Size Variants (Default State, 1 Bar)
        </h2>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <VerticalMarker text="15px" size="15" />
          <VerticalMarker text="20px" size="20" />
          <VerticalMarker text="25px" size="25" />
          <VerticalMarker text="44px" size="44" />
        </div>
      </section>

      {/* State variants */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          State Variants (Size 44, 1 Bar)
        </h2>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <VerticalMarker text="Default" size="44" state="Default" />
          <VerticalMarker text="Selected" size="44" state="Selected" />
          <VerticalMarker text="Inactive" size="44" state="Inactive" />
        </div>
      </section>

      {/* Quantity variants */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Quantity Variants (Size 20, Default State)
        </h2>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <VerticalMarker text="1 Bar" size="20" quantity="1 Bar" />
          <VerticalMarker text="2 Bars" size="20" quantity="2 Bars" />
        </div>
      </section>

      {/* Segmented bars */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Segmented Bars (Size 44, Default State)
        </h2>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <VerticalMarker text="Segmented" size="44" isSegmented />
          <VerticalMarker text="Segmented Selected" size="44" isSegmented state="Selected" />
          <VerticalMarker text="Segmented Inactive" size="44" isSegmented state="Inactive" />
        </div>
      </section>

      {/* Saldo bars */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Saldo Bars (Size 44, Default State)
        </h2>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <VerticalMarker text="Saldo" size="44" isSaldo progressLevel="50%" />
          <VerticalMarker text="Saldo Selected" size="44" isSaldo state="Selected" progressLevel="70%" />
          <VerticalMarker text="Saldo Inactive" size="44" isSaldo state="Inactive" progressLevel="30%" />
        </div>
      </section>

      {/* Progress levels */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Progress Levels (Size 25, Default State)
        </h2>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <VerticalMarker text="0%" size="25" progressLevel="0%" />
          <VerticalMarker text="25%" size="25" progressLevel="25%" />
          <VerticalMarker text="50%" size="25" progressLevel="50%" />
          <VerticalMarker text="75%" size="25" progressLevel="75%" />
          <VerticalMarker text="100%" size="25" progressLevel="100%" />
        </div>
      </section>

      {/* Hover state */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Hover State (Size 44, Default State)
        </h2>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <VerticalMarker text="Normal" size="44" isHover={false} />
          <VerticalMarker text="Hover" size="44" isHover />
        </div>
      </section>

      {/* Complex combinations */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Complex Combinations
        </h2>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <VerticalMarker text="2 Bars Selected" size="20" quantity="2 Bars" state="Selected" />
          <VerticalMarker text="Segmented 2 Bars" size="20" quantity="2 Bars" isSegmented />
          <VerticalMarker text="Saldo 2 Bars" size="20" quantity="2 Bars" isSaldo progressLevel="60%" />
        </div>
      </section>
    </div>
  );
};

export default VerticalMarkerPlayground;

