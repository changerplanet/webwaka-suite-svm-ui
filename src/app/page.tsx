import { Layout } from '@/components/Layout';
import { SectionContainer } from '@/components/SectionContainer';
import { resolveDashboard } from '@/lib/control-consumer';
import type { SectionConfig } from '@/types/control';

export default async function Home() {
  const dashboard = await resolveDashboard({});
  
  return (
    <Layout navigation={dashboard.navigation}>
      <div className="space-y-6">
        <header className="text-center py-8">
          <h1 className="text-3xl font-bold text-slate-800">
            WebWaka Suite
          </h1>
          <p className="text-slate-600 mt-2">
            Single Vendor Marketplace UI
          </p>
        </header>
        
        {dashboard.sections.map((section: SectionConfig) => (
          <SectionContainer key={section.id} section={section} />
        ))}
      </div>
    </Layout>
  );
}
