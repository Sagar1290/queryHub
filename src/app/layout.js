import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "QueryHub",
  description: "A google Search Engine clone using nextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
