import MurafaDocument, { murafaMetadata } from "@/components/murafa/murafa-document";

export const metadata = murafaMetadata("en");

export default function MurafaLayout({ children }: { children: React.ReactNode }) {
  return <MurafaDocument lang="en">{children}</MurafaDocument>;
}
