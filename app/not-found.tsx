import { Home } from "@mui/icons-material";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center gap-2">
      <h1 className="font-bold text-xl">Go Home</h1>
      <Link href="/">
        <Home />
      </Link>
    </main>
  );
}
