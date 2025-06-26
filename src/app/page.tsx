import { Metadata } from 'next';
import { Hero } from '@/components/blocks/hero';

export const metadata: Metadata = {
    title: 'Nextra 4',
    description: 'Nextra 4 is here.',
};

export default function Home() {
    return (
        <Hero
            title="Your Documentation Platform"
            subtitle={
                <>
                    The next generation documentation and knowledge platform for modern teams. Explore our Git SOP, best
                    practices, and developer resources to accelerate your workflow.
                </>
            }
            actions={[
                {
                    label: 'View Git SOP',
                    href: '/docs/git-sop/repository-overview',
                    variant: 'default',
                },
                {
                    label: 'Get Started',
                    href: '/docs',
                    variant: 'outline',
                },
            ]}
            titleClassName="text-5xl md:text-6xl font-extrabold"
            subtitleClassName="text-lg md:text-xl max-w-[600px]"
            actionsClassName="mt-8"
        />
    );
}
