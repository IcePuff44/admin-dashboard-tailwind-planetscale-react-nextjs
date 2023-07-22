import "./globals.css";

export const metadata = {
  title: "HelloWorld",
  description: "HelloWorld Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
