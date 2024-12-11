import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <nav className="text-lg">
          <Link href={"/app-router"} className="m-1">
            Home
          </Link>
          <Link href={"/app-router/new"} className="m-1">
            New
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
