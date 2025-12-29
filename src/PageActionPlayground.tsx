import React, { useState } from 'react';
import { PageAction } from './components/PageAction';
import '../tokens/css-variables.css';

export const PageActionPlayground: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setSidebarOpen(true);
    alert('Sidebar would open here! (Sidebar implementation coming soon)');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 24, maxWidth: 800 }}>
      <h1 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '24px', fontWeight: 600 }}>
        PageAction Component Playground
      </h1>

      {/* Basic Examples */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Basic Examples
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <PageAction title="Title" onClick={handleOpenSidebar} />
          <PageAction title="Title with Description" description="Text S" onClick={handleOpenSidebar} />
        </div>
      </section>

      {/* With Left Icon */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          With Left Icon
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <PageAction
            title="Title"
            iconLeft={
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 7.5V22.5M7.5 15H22.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            }
            onClick={handleOpenSidebar}
          />
          <PageAction
            title="Title with Description"
            description="Text S"
            iconLeft={
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 7.5V22.5M7.5 15H22.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            }
            onClick={handleOpenSidebar}
          />
        </div>
      </section>

      {/* States */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          States
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <PageAction title="Default" onClick={handleOpenSidebar} />
          <PageAction title="Disabled" disabled />
          <PageAction title="Disabled with Description" description="Text S" disabled />
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Real-world Examples
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <PageAction
            title="От кого обратная связь"
            description="Иванов Александр Иванович"
            onClick={handleOpenSidebar}
          />
          <PageAction
            title="Сильные стороны"
            description="Отличные навыки коммуникации"
            onClick={handleOpenSidebar}
          />
          <PageAction
            title="Зоны роста"
            description="Рекомендуется развивать навыки"
            onClick={handleOpenSidebar}
          />
          <PageAction
            title="Фильтры"
            iconLeft={
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 7.5H25M10 15H20M12.5 22.5H17.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            }
            onClick={handleOpenSidebar}
          />
        </div>
      </section>

      {/* Interactive Examples */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Interactive Examples
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <PageAction
            title="Open Sidebar"
            onClick={() => {
              handleOpenSidebar();
              console.log('Sidebar opened!');
            }}
          />
          <PageAction
            title="Click Me"
            description="This will open a sidebar"
            onClick={() => alert('Sidebar would open here!')}
          />
        </div>
      </section>
    </div>
  );
};

export default PageActionPlayground;
