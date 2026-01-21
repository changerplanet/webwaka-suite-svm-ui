/**
 * Control Consumer - Single entry point for control layer consumption
 * 
 * This module is the ONLY file that may import control packages:
 * - webwaka-suite-svm-control
 * - webwaka-core-dashboard-control
 * 
 * All UI visibility decisions must flow through this module.
 * No other file may import control packages directly.
 */

import type { 
  DashboardSnapshot, 
  NavigationItem, 
  SectionConfig,
  ControlContext,
  ResolvedDashboard 
} from '@/types/control';

const LOCALE = 'en-NG';

export function getLocale(): string {
  return LOCALE;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat(LOCALE, {
    style: 'currency',
    currency: 'NGN',
    currencyDisplay: 'narrowSymbol',
  }).format(amount);
}

export async function resolveDashboard(
  context: ControlContext
): Promise<ResolvedDashboard> {
  const snapshot = await evaluateSnapshot(context);
  
  return {
    navigation: snapshot.navigation,
    sections: snapshot.sections,
    permissions: snapshot.permissions,
    locale: LOCALE,
  };
}

export async function evaluateSnapshot(
  context: ControlContext
): Promise<DashboardSnapshot> {
  return {
    navigation: [],
    sections: [],
    permissions: {
      canView: true,
      canEdit: false,
      canManage: false,
    },
    timestamp: Date.now(),
  };
}

export function getNavigationItems(
  snapshot: DashboardSnapshot
): NavigationItem[] {
  return snapshot.navigation;
}

export function getSectionConfig(
  snapshot: DashboardSnapshot,
  sectionId: string
): SectionConfig | undefined {
  return snapshot.sections.find(s => s.id === sectionId);
}

export function isFeatureVisible(
  snapshot: DashboardSnapshot,
  featureId: string
): boolean {
  const section = snapshot.sections.find(s => s.id === featureId);
  return section?.visible ?? false;
}
