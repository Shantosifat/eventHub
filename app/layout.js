import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { dark } from "@clerk/themes";

export const metadata = {
  title: "EventHub",
  description: "Discover and create amazing events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning = to avoid small or unnecessary error from nextjs */}
      <body
        className={`bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider
            appearance={{
              theme: dark,
            }}
          >
            <ConvexClientProvider>
              {/* Haeder */}
              <Header />
              <main className="relative min-h-screen container mx-auto pt-40 md:pt-32">
                {/* glow */}
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />
                </div>
                <div className="relative z-10 ">{children}</div>{" "}
                {/* min-h-[80vh] */}
                {/* Footer */}
                <Footer />
              </main>
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
        {/* header */}
      </body>
    </html>
  );
}
