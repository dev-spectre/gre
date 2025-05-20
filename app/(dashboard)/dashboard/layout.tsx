export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  
  return (
    <html>
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body>{children}</body>
    </html>
  );
}
