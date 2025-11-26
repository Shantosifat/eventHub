import "./globals.css";

export const metadata = {
  title: "EventHub",
  description: "Discover and create amazing events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        {/* header */}
        {children}
        {/* Footer */}
      </body>
    </html>
  );
}
