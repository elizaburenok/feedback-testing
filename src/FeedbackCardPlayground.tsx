import React, { useState } from 'react';
import { FeedbackCard } from './components/FeedbackCard';
import '../tokens/css-variables.css';

export const FeedbackCardPlayground: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 24, maxWidth: 1000 }}>
      <h1 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '24px', fontWeight: 600 }}>
        FeedbackCard Component Playground
      </h1>

      {/* Basic Card */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Basic Card
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <FeedbackCard
            name="Обратная связь от коллеги"
            date={new Date()}
            author="Иванов Александр Иванович"
            strengths="Отличные навыки коммуникации, внимательность к деталям, проактивный подход к решению задач."
            growthZone="Рекомендуется развивать навыки публичных выступлений и работы с большими объемами данных."
          />
        </div>
      </section>

      {/* With Actions */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          With Actions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <FeedbackCard
            name="Обратная связь по проекту"
            date={new Date()}
            author="Петрова Мария Сергеевна"
            strengths="Отличная работа в команде, креативное мышление, умение находить нестандартные решения."
            growthZone="Стоит обратить внимание на тайм-менеджмент и приоритизацию задач."
            primaryAction={{
              label: 'Принять',
              onClick: () => alert('Принято!'),
            }}
            secondaryAction={{
              label: 'Отклонить',
              onClick: () => alert('Отклонено'),
            }}
          />
        </div>
      </section>

      {/* With Loading State */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          With Loading State
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <FeedbackCard
            name="Обратная связь в обработке"
            date={new Date()}
            author="Сидоров Алексей Викторович"
            strengths="Профессионализм, ответственность, качественное выполнение задач."
            growthZone="Развитие навыков менторства и передачи знаний."
            primaryAction={{
              label: 'Сохранить',
              onClick: () => {
                setLoading(true);
                setTimeout(() => setLoading(false), 2000);
              },
              loading: loading,
            }}
          />
        </div>
      </section>

      {/* Multiple Cards */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Multiple Cards (List View)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <FeedbackCard
            name="Квартальная обратная связь"
            date={new Date(Date.now() - 86400000)}
            author="Козлова Елена Дмитриевна"
            strengths="Системное мышление, аналитические способности, умение работать с данными."
            growthZone="Развитие навыков презентации результатов и работы с клиентами."
            primaryAction={{
              label: 'Просмотреть',
              onClick: () => alert('Открыто'),
            }}
          />
          <FeedbackCard
            name="Обратная связь по спринту"
            date={new Date(Date.now() - 172800000)}
            author="Волков Дмитрий Андреевич"
            strengths="Техническая экспертиза, наставничество, помощь коллегам."
            growthZone="Улучшение навыков планирования и оценки сроков выполнения задач."
            primaryAction={{
              label: 'Просмотреть',
              onClick: () => alert('Открыто'),
            }}
          />
          <FeedbackCard
            name="Годовая обратная связь"
            date={new Date(Date.now() - 259200000)}
            author="Новикова Анна Петровна"
            strengths="Лидерские качества, стратегическое мышление, эффективное управление командой."
            growthZone="Развитие навыков работы с международными командами и кросс-культурной коммуникации."
            primaryAction={{
              label: 'Просмотреть',
              onClick: () => alert('Открыто'),
            }}
          />
        </div>
      </section>

      {/* Different Date Formats */}
      <section>
        <h2 style={{ fontFamily: 'var(--font-family-primary)', fontSize: '18px', marginBottom: 16 }}>
          Different Date Formats
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <FeedbackCard
            name="Обратная связь (Date object)"
            date={new Date()}
            author="Иванов Иван Иванович"
            strengths="Пример сильных сторон."
            growthZone="Пример зон роста."
          />
          <FeedbackCard
            name="Обратная связь (Date string)"
            date="2024-12-19T10:30:00"
            author="Петров Петр Петрович"
            strengths="Пример сильных сторон."
            growthZone="Пример зон роста."
          />
        </div>
      </section>
    </div>
  );
};

export default FeedbackCardPlayground;
