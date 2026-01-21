import { resolveDashboard, evaluateSnapshot } from '@/lib/control-consumer';

describe('Determinism Tests', () => {
  it('resolveDashboard should produce identical output 10 times', async () => {
    const context = { userId: 'test-user' };
    const results: string[] = [];
    
    for (let i = 0; i < 10; i++) {
      const result = await resolveDashboard(context);
      results.push(JSON.stringify({
        navigation: result.navigation,
        sections: result.sections,
        permissions: result.permissions,
        locale: result.locale,
      }));
    }
    
    const firstResult = results[0];
    results.forEach((result, index) => {
      expect(result).toBe(firstResult);
    });
  });

  it('evaluateSnapshot should produce identical structure 10 times', async () => {
    const context = { userId: 'test-user' };
    const results: string[] = [];
    
    for (let i = 0; i < 10; i++) {
      const result = await evaluateSnapshot(context);
      results.push(JSON.stringify({
        navigation: result.navigation,
        sections: result.sections,
        permissions: result.permissions,
      }));
    }
    
    const firstResult = results[0];
    results.forEach((result, index) => {
      expect(result).toBe(firstResult);
    });
  });
});
