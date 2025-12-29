/**
 * Skills Data
 * Skills and competencies data for filtering feedback cards
 */

import { Skill, Competency } from '../components/SkillsModal/SkillsModal';

/**
 * Competencies list
 */
export const competenciesData: Competency[] = [
  {
    id: 'knowledge',
    label: 'Знания',
  },
  {
    id: 'client-attitude',
    label: 'Отношение к клиенту',
  },
  {
    id: 'self-reliance',
    label: 'Всё зависит от тебя',
  },
  {
    id: 'care',
    label: 'Бережём друг друга',
  },
  {
    id: 'adaptability',
    label: 'Не ждём спокойной жизни',
  },
];

/**
 * Skills list with competency associations
 */
export const skillsData: Skill[] = [
  // Знания
  { id: 'knowledge-1', label: 'Тарифы', competencyId: 'knowledge' },
  { id: 'knowledge-2', label: 'Восстановление ИБ', competencyId: 'knowledge' },
  { id: 'knowledge-3', label: 'Блоки и РИ', competencyId: 'knowledge' },
  { id: 'knowledge-4', label: 'Смена директора', competencyId: 'knowledge' },
  { id: 'knowledge-5', label: 'Пополнение', competencyId: 'knowledge' },
  { id: 'knowledge-6', label: 'Снятие', competencyId: 'knowledge' },
  { id: 'knowledge-7', label: 'Работа с программами', competencyId: 'knowledge' },
  { id: 'knowledge-8', label: 'Ориентация в Источнике', competencyId: 'knowledge' },
  
  // Отношение к клиенту
  { id: 'client-1', label: 'Эмпатия', competencyId: 'client-attitude' },
  { id: 'client-2', label: 'Внимательность к проблемам', competencyId: 'client-attitude' },
  { id: 'client-3', label: 'Вербальная коммуникация', competencyId: 'client-attitude' },
  { id: 'client-4', label: 'Ведение беседы', competencyId: 'client-attitude' },
  { id: 'client-5', label: 'Приёмы активного слушания', competencyId: 'client-attitude' },
  { id: 'client-6', label: 'Сопровождение клиента', competencyId: 'client-attitude' },
  { id: 'client-7', label: 'Общение на языке выгод', competencyId: 'client-attitude' },
  
  // Всё зависит от тебя
  { id: 'self-1', label: 'Инициативность', competencyId: 'self-reliance' },
  { id: 'self-2', label: 'Ответственность', competencyId: 'self-reliance' },
  { id: 'self-3', label: 'Самостоятельность', competencyId: 'self-reliance' },
  { id: 'self-4', label: 'Дорешивание кейсов', competencyId: 'self-reliance' },
  { id: 'self-5', label: 'Подготовка к темам', competencyId: 'self-reliance' },
  
  // Бережём друг друга
  { id: 'care-1', label: 'Обращение за помощью', competencyId: 'care' },
  { id: 'care-2', label: 'Слушание наставника', competencyId: 'care' },
  { id: 'care-3', label: 'Работа в команде', competencyId: 'care' },
  
  // Не ждём спокойной жизни
  { id: 'adapt-1', label: 'Гибкость', competencyId: 'adaptability' },
  { id: 'adapt-2', label: 'Адаптивность', competencyId: 'adaptability' },
  { id: 'adapt-3', label: 'Инициативность', competencyId: 'adaptability' },
  { id: 'adapt-4', label: 'Эмоциональное состояние', competencyId: 'adaptability' },
];

