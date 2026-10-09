import MurafaDocument, { murafaMetadata } from "@/components/murafa/murafa-document";

export const metadata = murafaMetadata("ar");

export default function MurafaLayout({ children }: { children: React.ReactNode }) {
  return <MurafaDocument lang="ar">{children}</MurafaDocument>;
}
