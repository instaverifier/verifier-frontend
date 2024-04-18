export const metadata = {
  title: "Trustchecker",
  description: "Build trust here and earn on your chair",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
