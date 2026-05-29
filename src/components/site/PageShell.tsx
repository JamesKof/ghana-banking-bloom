import { Nav } from "./Nav";
import { Ticker } from "./Ticker";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <Ticker />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
