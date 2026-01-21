/**
 * Control Layer Types
 * 
 * Type definitions for control layer consumption.
 * These types define the contract between UI and control layers.
 */

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  visible: boolean;
  children?: NavigationItem[];
}

export interface SectionConfig {
  id: string;
  label: string;
  visible: boolean;
  order: number;
  metadata?: Record<string, unknown>;
}

export interface Permissions {
  canView: boolean;
  canEdit: boolean;
  canManage: boolean;
}

export interface DashboardSnapshot {
  navigation: NavigationItem[];
  sections: SectionConfig[];
  permissions: Permissions;
  timestamp: number;
}

export interface ControlContext {
  userId?: string;
  role?: string;
  tenantId?: string;
}

export interface ResolvedDashboard {
  navigation: NavigationItem[];
  sections: SectionConfig[];
  permissions: Permissions;
  locale: string;
}
