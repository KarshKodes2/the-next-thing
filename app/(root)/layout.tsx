// import Navbar from "../components/ui/Navbar";
import { Navbar } from "../components/ui";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="font-raleway">
      <Navbar />
      {children}
    </main>
  );
}
