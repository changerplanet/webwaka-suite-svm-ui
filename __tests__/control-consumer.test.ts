import { 
  formatCurrency, 
  getLocale, 
  resolveDashboard, 
  evaluateSnapshot 
} from '@/lib/control-consumer';

describe('Control Consumer', () => {
  describe('getLocale', () => {
    it('should return en-NG locale', () => {
      expect(getLocale()).toBe('en-NG');
    });
  });

  describe('formatCurrency', () => {
    it('should format currency in Nigerian Naira', () => {
      const formatted = formatCurrency(1000);
      expect(formatted).toContain('₦');
      expect(formatted).not.toContain('$');
    });

    it('should format zero correctly', () => {
      const formatted = formatCurrency(0);
      expect(formatted).toContain('₦');
    });

    it('should format large numbers correctly', () => {
      const formatted = formatCurrency(1000000);
      expect(formatted).toContain('₦');
      expect(formatted).not.toContain('$');
    });
  });

  describe('resolveDashboard', () => {
    it('should return deterministic results', async () => {
      const results = await Promise.all(
        Array(10).fill(null).map(() => resolveDashboard({}))
      );
      
      const firstResult = JSON.stringify(results[0]);
      results.forEach(result => {
        expect(JSON.stringify(result)).toBe(firstResult);
      });
    });

    it('should return en-NG locale', async () => {
      const dashboard = await resolveDashboard({});
      expect(dashboard.locale).toBe('en-NG');
    });
  });

  describe('evaluateSnapshot', () => {
    it('should return a valid snapshot structure', async () => {
      const snapshot = await evaluateSnapshot({});
      
      expect(snapshot).toHaveProperty('navigation');
      expect(snapshot).toHaveProperty('sections');
      expect(snapshot).toHaveProperty('permissions');
      expect(snapshot).toHaveProperty('timestamp');
      expect(Array.isArray(snapshot.navigation)).toBe(true);
      expect(Array.isArray(snapshot.sections)).toBe(true);
    });

    it('should return deterministic results', async () => {
      const results = await Promise.all(
        Array(10).fill(null).map(() => evaluateSnapshot({}))
      );
      
      results.forEach(result => {
        expect(result.navigation).toEqual([]);
        expect(result.sections).toEqual([]);
      });
    });
  });
});
