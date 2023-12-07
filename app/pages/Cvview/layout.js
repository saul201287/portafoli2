export const metadata = {
    title: "Vista PDF",
    description: "Vista PDF",
  };
  
  export default function RootLogin({ children }) {
    return (
      <html lang="es">
        <title>PDF</title>
        <body>{children}</body>
      </html>
    );
  }
  