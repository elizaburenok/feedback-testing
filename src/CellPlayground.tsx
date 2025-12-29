import React from 'react';
import { Cell } from './components/Cell';
import {
  CellText,
  CellNumber,
  CellDate,
  CellStatus,
  CellBadge,
} from './components/Cell/CellHelpers';
import '../tokens/css-variables.css';

export const CellPlayground: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 24, maxWidth: 1200 }}>
      <h1 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '24px', fontWeight: 600 }}>
        Cell Component Playground
      </h1>

      {/* Basic Variants */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Basic Variants
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <Cell variant="default">Default cell content</Cell>
          <Cell variant="primary">Primary cell content</Cell>
          <Cell variant="secondary">Secondary cell content</Cell>
          <Cell variant="neutral">Neutral cell content</Cell>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Sizes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <Cell size="S">Small cell (S)</Cell>
          <Cell size="M">Medium cell (M)</Cell>
          <Cell size="L">Large cell (L)</Cell>
        </div>
      </section>

      {/* Alignments */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Alignments
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <Cell align="left">Left aligned content</Cell>
          <Cell align="center">Center aligned content</Cell>
          <Cell align="right">Right aligned content</Cell>
        </div>
      </section>

      {/* With Icons */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          With Icons
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <Cell icon="📊">Cell with left icon</Cell>
          <Cell iconRight="→">Cell with right icon</Cell>
          <Cell icon="📊" iconRight="→">Cell with both icons</Cell>
        </div>
      </section>

      {/* With Subtitle */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          With Subtitle
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <Cell subtitle="От кого обратная связь">Иванов Александр Иванович</Cell>
          <Cell subtitle="Сильные стороны">Отличные навыки коммуникации, внимательность к деталям</Cell>
          <Cell subtitle="Зоны роста">Рекомендуется развивать навыки публичных выступлений</Cell>
          <Cell subtitle="Дата создания">19 дек. 2024, 10:30</Cell>
          <Cell subtitle="Статус" variant="primary">Активен</Cell>
          <Cell subtitle="Приоритет" variant="secondary">Высокий</Cell>
        </div>
      </section>

      {/* With Subtitle and Label */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          With Subtitle and Label (Description)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <Cell subtitle="От кого обратная связь" label="Дополнительная информация">Иванов Александр Иванович</Cell>
          <Cell subtitle="Сильные стороны" label="Оценка">Отличные навыки коммуникации, внимательность к деталям</Cell>
          <Cell subtitle="Зоны роста" label="Рекомендации">Рекомендуется развивать навыки публичных выступлений</Cell>
        </div>
      </section>

      {/* With Label and Suffix */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          With Label (Description)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <Cell label="Label:" suffix="suffix">Main content</Cell>
          <Cell label="Amount:" suffix="RUB">1,234.56</Cell>
          <Cell label="От кого обратная связь:">Иванов Александр Иванович</Cell>
          <Cell label="Сильные стороны:">Отличные навыки коммуникации, внимательность к деталям</Cell>
          <Cell label="Зоны роста:">Рекомендуется развивать навыки публичных выступлений</Cell>
          <Cell label="Дата создания:">19 дек. 2024, 10:30</Cell>
          <Cell label="Статус:" variant="primary">Активен</Cell>
          <Cell label="Приоритет:" variant="secondary">Высокий</Cell>
        </div>
      </section>

      {/* Clickable */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Clickable Cells
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <Cell onClick={() => alert('Clicked!')}>Clickable cell</Cell>
          <Cell onClick={() => alert('Clicked!')} icon="🔗">Clickable with icon</Cell>
          <Cell onClick={() => alert('Clicked!')} disabled>Disabled clickable</Cell>
        </div>
      </section>

      {/* Truncate */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Truncated Text
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px', maxWidth: 200 }}>
          <Cell truncate>This is a very long text that will be truncated with ellipsis when it exceeds the container width</Cell>
        </div>
      </section>

      {/* Helper Components - Text */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          CellText Helper
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <CellText text="Simple text cell" />
          <CellText text="Text with label" label="Name:" />
        </div>
      </section>

      {/* Helper Components - Number */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          CellNumber Helper
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <CellNumber value={1234.56} format="decimal" />
          <CellNumber value={1234.56} format="integer" />
          <CellNumber value={1234.56} format="currency" currency="RUB" />
          <CellNumber value={75.5} format="percentage" />
          <CellNumber value={1234.56} format="currency" currency="USD" label="Amount:" />
        </div>
      </section>

      {/* Helper Components - Date */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          CellDate Helper
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <CellDate date={new Date()} format="short" />
          <CellDate date={new Date()} format="medium" />
          <CellDate date={new Date()} format="long" />
          <CellDate date={new Date()} format="time" />
          <CellDate date={new Date()} format="datetime" />
          <CellDate date={new Date(Date.now() - 86400000)} format="relative" />
        </div>
      </section>

      {/* Helper Components - Status */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          CellStatus Helper
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <CellStatus status="Активен" type="success" />
          <CellStatus status="Предупреждение" type="warning" />
          <CellStatus status="Ошибка" type="error" />
          <CellStatus status="Информация" type="info" />
          <CellStatus status="Нейтральный" type="neutral" />
        </div>
      </section>

      {/* Helper Components - Badge */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          CellBadge Helper
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <CellBadge text="Default" variant="default" />
          <CellBadge text="Primary" variant="primary" />
          <CellBadge text="Success" variant="success" />
          <CellBadge text="Warning" variant="warning" />
          <CellBadge text="Error" variant="error" />
        </div>
      </section>

      {/* Complex Examples */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Complex Examples
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--color-bg-neutral-1)', padding: 16, borderRadius: '8px' }}>
          <Cell 
            icon="👤" 
            label="Имя:" 
            suffix="лет" 
            onClick={() => alert('Clicked')}
          >
            Иван Иванов, 30
          </Cell>
          <Cell 
            variant="primary" 
            align="right"
            iconRight="→"
            onClick={() => alert('Navigate')}
          >
            Перейти к деталям
          </Cell>
          <CellNumber 
            value={123456.78} 
            format="currency" 
            currency="RUB"
            label="Баланс:" 
            align="right"
          />
        </div>
      </section>
    </div>
  );
};

export default CellPlayground;

