export function hashToNumber(input: string): number {
  let hash = 0;

  if (input.length !== 0) {
    for (let i = 0; i < input.length; i++) {
      const charCode = input.charCodeAt(i);

      hash = (hash << 5) - hash + charCode;
    }

    hash = (hash & 0x7fffffff) % 100000;
  }

  return hash;
}
