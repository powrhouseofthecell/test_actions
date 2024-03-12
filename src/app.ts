export function change_case(arg: string): { uppercase: string; lowercase: string } {
  return { uppercase: arg.toUpperCase(), lowercase: arg.toLowerCase() };
}

export function reverse(arg: string): string {
  return arg.split('').reverse().join('');
}
