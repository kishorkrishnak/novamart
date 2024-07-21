import Link from "next/link";

export default function Orders() {
  return (
    <main className="min-h-[calc(100vh-160px)]">
      <h1>NovaMart</h1>
      <Link href="/users">Users</Link>
    </main>
  );
}
