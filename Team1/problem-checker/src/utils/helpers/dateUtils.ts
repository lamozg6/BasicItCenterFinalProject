export function generateDateInsertPSQLCommand(date: Date) {
  return `to_timestamp(${date.getTime()} / 1000)`;
}
