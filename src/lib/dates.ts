import type { LocalizedText } from '@/data/site';

const MONTHS: Record<'en' | 'es', string[]> = {
  en: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ],
  es: [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
  ],
};

/**
 * Dates are plain ISO strings and are formatted here without `new Date()`.
 * Parsing "2026-06-02" as a Date makes it UTC midnight, which a browser west of
 * Greenwich then renders as the 1st — a logbook that quietly loses a day.
 */
export function monthLabel(iso: string): LocalizedText {
  const [year, month] = iso.split('-');
  const index = Number(month) - 1;
  return {
    en: `${MONTHS.en[index]} ${year}`,
    es: `${MONTHS.es[index]} ${year}`,
  };
}

/** The compact form used on entry rails and in the index: 02 JUN. */
export function dayLabel(iso: string): LocalizedText {
  const [, month, day] = iso.split('-');
  const index = Number(month) - 1;
  return {
    en: `${day} ${MONTHS.en[index]!.slice(0, 3).toUpperCase()}`,
    es: `${day} ${MONTHS.es[index]!.slice(0, 3).toUpperCase()}`,
  };
}

export type MonthGroup<T> = {
  key: string;
  label: LocalizedText;
  rows: T[];
};

/** Groups already-sorted entries into the months they were opened in. */
export function groupByMonth<T extends { started: string }>(entries: T[]): MonthGroup<T>[] {
  const groups: MonthGroup<T>[] = [];

  for (const entry of entries) {
    const key = entry.started.slice(0, 7);
    let group = groups.find((candidate) => candidate.key === key);

    if (!group) {
      group = { key, label: monthLabel(entry.started), rows: [] };
      groups.push(group);
    }

    group.rows.push(entry);
  }

  return groups;
}
