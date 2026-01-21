import { formatCurrency } from '@/lib/control-consumer';

describe('Currency Compliance', () => {
  it('should never output USD symbol', () => {
    const testAmounts = [0, 1, 100, 1000, 10000, 100000, 1000000];
    
    testAmounts.forEach(amount => {
      const formatted = formatCurrency(amount);
      expect(formatted).not.toContain('$');
      expect(formatted).not.toContain('USD');
      expect(formatted).not.toContain('US$');
    });
  });

  it('should always output NGN symbol (₦)', () => {
    const testAmounts = [0, 1, 100, 1000, 10000, 100000, 1000000];
    
    testAmounts.forEach(amount => {
      const formatted = formatCurrency(amount);
      expect(formatted).toContain('₦');
    });
  });

  it('should format with correct Nigerian locale', () => {
    const formatted = formatCurrency(1234567.89);
    expect(formatted).toContain('₦');
  });
});
