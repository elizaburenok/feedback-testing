import React, { useState } from 'react';
import { NavigationBar, NavigationItem } from './components/NavigationBar';
import '../tokens/css-variables.css';

export const NavigationBarPlayground: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('item-2');

  const navigationItems: NavigationItem[] = [
    {
      id: 'item-1',
      label: 'Главная',
      onClick: () => {
        setActiveItem('item-1');
        console.log('Navigate to Главная');
      },
      active: activeItem === 'item-1',
    },
    {
      id: 'item-2',
      label: 'Обратная связь',
      onClick: () => {
        setActiveItem('item-2');
        console.log('Navigate to Обратная связь');
      },
      active: activeItem === 'item-2',
    },
    {
      id: 'item-3',
      label: 'Профиль',
      onClick: () => {
        setActiveItem('item-3');
        console.log('Navigate to Профиль');
      },
      active: activeItem === 'item-3',
    },
    {
      id: 'item-4',
      label: 'Настройки',
      onClick: () => {
        setActiveItem('item-4');
        console.log('Navigate to Настройки');
      },
      active: activeItem === 'item-4',
    },
    {
      id: 'item-5',
      label: 'Помощь',
      onClick: () => {
        setActiveItem('item-5');
        console.log('Navigate to Помощь');
      },
      active: activeItem === 'item-5',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 24, maxWidth: 1200 }}>
      <h1 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '24px', fontWeight: 600 }}>
        Navigation Bar Component Playground
      </h1>

      {/* Full Component */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Full Component (All Sections)
        </h2>
        <div style={{ display: 'flex', gap: 24 }}>
          <div style={{ width: '300px', border: '1px solid var(--color-primitive-neutral-2)', borderRadius: '8px', overflow: 'hidden' }}>
            <NavigationBar
              hasBackButton
              hasTextBlock
              hasItems
              hasRootLink
              rootLinkText="Главная"
              title="Обратная связь"
              items={navigationItems}
              onBackClick={() => alert('Back clicked!')}
              onRootLinkClick={() => alert('Root link clicked!')}
            />
          </div>
        </div>
      </section>

      {/* Back Button Only */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Back Button Only
        </h2>
        <div style={{ display: 'flex', gap: 24 }}>
          <div style={{ width: '300px', border: '1px solid var(--color-primitive-neutral-2)', borderRadius: '8px', overflow: 'hidden' }}>
            <NavigationBar
              hasBackButton
              onBackClick={() => alert('Back clicked!')}
            />
          </div>
        </div>
      </section>

      {/* Text Block Only */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Text Block Only
        </h2>
        <div style={{ display: 'flex', gap: 24 }}>
          <div style={{ width: '300px', border: '1px solid var(--color-primitive-neutral-2)', borderRadius: '8px', overflow: 'hidden' }}>
            <NavigationBar
              hasTextBlock
              title="Page Title"
            />
          </div>
        </div>
      </section>

      {/* Text Block with Root Link */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Text Block with Root Link
        </h2>
        <div style={{ display: 'flex', gap: 24 }}>
          <div style={{ width: '300px', border: '1px solid var(--color-primitive-neutral-2)', borderRadius: '8px', overflow: 'hidden' }}>
            <NavigationBar
              hasTextBlock
              hasRootLink
              rootLinkText="Главная"
              title="Обратная связь"
              onRootLinkClick={() => alert('Root link clicked!')}
            />
          </div>
        </div>
      </section>

      {/* Navigation Items Only */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Navigation Items Only
        </h2>
        <div style={{ display: 'flex', gap: 24 }}>
          <div style={{ width: '300px', border: '1px solid var(--color-primitive-neutral-2)', borderRadius: '8px', overflow: 'hidden' }}>
            <NavigationBar
              hasItems
              items={navigationItems}
            />
          </div>
        </div>
      </section>

      {/* Different Combinations */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Different Combinations
        </h2>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ width: '300px', border: '1px solid var(--color-primitive-neutral-2)', borderRadius: '8px', overflow: 'hidden' }}>
            <NavigationBar
              hasBackButton
              hasTextBlock
              title="Title Only"
              onBackClick={() => alert('Back clicked!')}
            />
          </div>
          <div style={{ width: '300px', border: '1px solid var(--color-primitive-neutral-2)', borderRadius: '8px', overflow: 'hidden' }}>
            <NavigationBar
              hasTextBlock
              hasItems
              title="Navigation"
              items={navigationItems.slice(0, 3)}
            />
          </div>
          <div style={{ width: '300px', border: '1px solid var(--color-primitive-neutral-2)', borderRadius: '8px', overflow: 'hidden' }}>
            <NavigationBar
              hasBackButton
              hasItems
              items={navigationItems}
              onBackClick={() => alert('Back clicked!')}
            />
          </div>
        </div>
      </section>

      {/* With Disabled Items */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          With Disabled Items
        </h2>
        <div style={{ display: 'flex', gap: 24 }}>
          <div style={{ width: '300px', border: '1px solid var(--color-primitive-neutral-2)', borderRadius: '8px', overflow: 'hidden' }}>
            <NavigationBar
              hasItems
              items={[
                ...navigationItems.slice(0, 2),
                {
                  id: 'item-disabled',
                  label: 'Отключенный пункт',
                  disabled: true,
                },
                ...navigationItems.slice(2),
              ]}
            />
          </div>
        </div>
      </section>

      {/* Long Text Examples */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Long Text Examples
        </h2>
        <div style={{ display: 'flex', gap: 24 }}>
          <div style={{ width: '300px', border: '1px solid var(--color-primitive-neutral-2)', borderRadius: '8px', overflow: 'hidden' }}>
            <NavigationBar
              hasTextBlock
              hasRootLink
              rootLinkText="Очень длинная ссылка на главную страницу"
              title="Очень длинное название страницы которое может не поместиться в одну строку"
              items={[
                {
                  id: 'long-1',
                  label: 'Очень длинный пункт меню который может не поместиться',
                  onClick: () => {},
                },
                {
                  id: 'long-2',
                  label: 'Еще один длинный пункт',
                  onClick: () => {},
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavigationBarPlayground;

