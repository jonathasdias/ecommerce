import { describe, expect, it } from 'vitest';
import formatter from '../formatPrice';

describe('Intl.NumberFormat Formatter', () => {
  it('deve formatar números corretamente como moeda brasileira (BRL)', () => {
    expect(formatter.format(1000)).toBe('R$ 1.000,00');
    expect(formatter.format(1234.56)).toBe('R$ 1.234,56');
    expect(formatter.format(0)).toBe('R$ 0,00');
  });

  it('deve lidar corretamente com números negativos', () => {
    expect(formatter.format(-500)).toBe('-R$ 500,00');
  });
});