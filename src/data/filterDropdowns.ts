/**
 * Filter Dropdown Data
 * Configuration data for filter dropdowns in the main feedback page
 */

import { DropdownItem } from '../components/Dropdown/Dropdown';

/**
 * Dropdown items for Period filter (Период)
 */
export const periodDropdownItems: DropdownItem[] = [
  {
    id: 'today',
    label: 'Сегодня',
  },
  {
    id: 'week',
    label: 'Неделя',
  },
  {
    id: 'month',
    label: 'Месяц',
  },
  {
    id: 'year',
    label: 'Год',
  },
];

/**
 * Dropdown items for Activity filter (Активность)
 */
export const activityDropdownItems: DropdownItem[] = [
  {
    id: 'Dialog-coach',
    label: 'Встреча с Диалог‑коучем',
  },
  {
    id: 'Tet-a-tet',
    label: 'Встреча тет‑а‑тет',
  },
  {
    id: 'Group-meeting',
    label: 'Групповая встреча',
  },
  {
    id: 'Practice',
    label: 'Практика',
  },
  {
    id: 'Self-learning',
    label: 'Самостоятельное изучение',
  },
  {
    id: 'Check-meeting',
    label: 'Чек-беседа',
  },
];

/**
 * Map of filter dropdown items
 * Key is the filter identifier, value is the array of dropdown items
 */
export const filterDropdownItems: { [key: string]: DropdownItem[] } = {
  period: periodDropdownItems,
  activity: activityDropdownItems,
};

