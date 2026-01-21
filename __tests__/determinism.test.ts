import { resolveDashboard, evaluateSnapshot } from '@/lib/control-consumer';

describe('Determinism Tests', () => {
  it('resolveDashboard should produce identical output 10 times', async () => {
    const context = { userId: 'test-user' };
    const results: string[] = [];
    
    for (let i = 0; i < 10; i++) {
      const result = await resolveDashboard(context);
      results.push(JSON.stringify(result));
    }
    
    const firstResult = results[0];
    results.forEach((result) => {
      expect(result).toBe(firstResult);
    });
  });

  it('evaluateSnapshot should produce identical output 10 times', async () => {
    const context = { userId: 'test-user' };
    const results: string[] = [];
    
    for (let i = 0; i < 10; i++) {
      const result = await evaluateSnapshot(context);
      results.push(JSON.stringify(result));
    }
    
    const firstResult = results[0];
    results.forEach((result) => {
      expect(result).toBe(firstResult);
    });
  });

  it('snapshot timestamp should be deterministic', async () => {
    const snapshots = await Promise.all(
      Array(10).fill(null).map(() => evaluateSnapshot({}))
    );
    
    snapshots.forEach(snapshot => {
      expect(snapshot.timestamp).toBe(0);
    });
  });
});
