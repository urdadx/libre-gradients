import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "./site-footer";

interface LayoutProps {
	children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return (
		<>
			<SiteHeader showGenerate={true} />
			<main>{children}</main>
			<SiteFooter />

		</>
	);
}
