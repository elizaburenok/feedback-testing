import React, { useState } from 'react';
import { SearchInput } from './components/SearchInput';
import '../tokens/css-variables.css';

export const SearchInputPlayground: React.FC = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 24, maxWidth: 800 }}>
      <h1 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '24px', fontWeight: 600 }}>
        SearchInput Component Playground
      </h1>

      {/* Basic Usage */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Basic Usage
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SearchInput placeholder="Поиск..." />
          <SearchInput placeholder="Поиск..." defaultValue="Пример текста" />
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Sizes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SearchInput size="s" placeholder="Small search input" />
          <SearchInput size="m" placeholder="Medium search input" />
          <SearchInput size="l" placeholder="Large search input" />
        </div>
      </section>

      {/* Variants */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Variants
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SearchInput variant="default" placeholder="Default variant" />
          <SearchInput variant="filled" placeholder="Filled variant" />
        </div>
      </section>

      {/* With Icons */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          With Icons
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SearchInput 
            iconLeft="🔍" 
            placeholder="Search with left icon" 
          />
          <SearchInput 
            iconRight="⚙️" 
            placeholder="Search with right icon" 
          />
          <SearchInput 
            iconLeft="🔍" 
            iconRight="📋" 
            placeholder="Search with both icons" 
          />
        </div>
      </section>

      {/* With Label and Helper Text */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          With Label and Helper Text
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SearchInput 
            label="Поиск по клиентам"
            placeholder="Введите имя или ID клиента"
            helperText="Начните вводить для поиска"
          />
          <SearchInput 
            label="Поиск по транзакциям"
            placeholder="Введите номер транзакции"
            helperText="Используйте формат: TRX-XXXXX"
          />
        </div>
      </section>

      {/* States */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          States
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SearchInput 
            placeholder="Default state" 
            defaultValue="Пример текста"
          />
          <SearchInput 
            placeholder="Disabled state" 
            defaultValue="Неактивное поле"
            disabled
          />
          <SearchInput 
            placeholder="Error state" 
            defaultValue="Некорректное значение"
            error
            errorMessage="Поле обязательно для заполнения"
          />
        </div>
      </section>

      {/* Loading State */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Loading State
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SearchInput 
            placeholder="Searching..." 
            defaultValue="Запрос выполняется"
            loading
          />
          <div>
            <SearchInput 
              placeholder="Toggle loading state" 
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              loading={loading}
            />
            <button
              onClick={() => setLoading(!loading)}
              style={{
                marginTop: 8,
                padding: '8px 16px',
                border: '1px solid var(--color-primitive-neutral-2)',
                borderRadius: '4px',
                background: 'var(--color-bg-default)',
                cursor: 'pointer',
              }}
            >
              {loading ? 'Stop Loading' : 'Start Loading'}
            </button>
          </div>
        </div>
      </section>

      {/* Clear Button */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Clear Button
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SearchInput 
            placeholder="With clear button (default)" 
            defaultValue="Текст для очистки"
            showClearButton
          />
          <SearchInput 
            placeholder="Without clear button" 
            defaultValue="Текст без кнопки очистки"
            showClearButton={false}
          />
          <SearchInput 
            placeholder="Controlled with clear handler" 
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            onClear={() => {
              setValue2('');
              console.log('Cleared!');
            }}
          />
        </div>
      </section>

      {/* Controlled vs Uncontrolled */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Controlled vs Uncontrolled
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <p style={{ marginBottom: 8, fontSize: '14px', color: 'var(--color-primitive-secondary)' }}>
              Controlled (value: {value3})
            </p>
            <SearchInput 
              placeholder="Controlled input" 
              value={value3}
              onChange={(e) => setValue3(e.target.value)}
              onValueChange={(val) => console.log('Value changed:', val)}
            />
          </div>
          <div>
            <p style={{ marginBottom: 8, fontSize: '14px', color: 'var(--color-primitive-secondary)' }}>
              Uncontrolled
            </p>
            <SearchInput 
              placeholder="Uncontrolled input" 
              defaultValue="Начальное значение"
            />
          </div>
        </div>
      </section>

      {/* Complex Examples */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Complex Examples
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SearchInput 
            label="Поиск клиентов"
            iconLeft="🔍"
            placeholder="Введите имя, email или телефон"
            helperText="Поиск выполняется в реальном времени"
            size="l"
            variant="filled"
          />
          <SearchInput 
            label="Поиск транзакций"
            iconLeft="💳"
            placeholder="Введите номер транзакции"
            error
            errorMessage="Транзакция не найдена"
            size="m"
          />
          <SearchInput 
            label="Поиск по документам"
            iconLeft="📄"
            placeholder="Введите название документа"
            loading
            size="m"
            variant="default"
          />
        </div>
      </section>

      {/* All Props Combined */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          All Features Combined
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SearchInput 
            label="Полнофункциональный поиск"
            iconLeft="🔍"
            iconRight="📋"
            placeholder="Введите запрос для поиска"
            helperText="Используйте расширенный поиск для лучших результатов"
            size="l"
            variant="default"
            showClearButton
            onValueChange={(val) => console.log('Search value:', val)}
            onClear={() => console.log('Search cleared')}
            data-testid="full-featured-search"
          />
        </div>
      </section>
    </div>
  );
};

export default SearchInputPlayground;


