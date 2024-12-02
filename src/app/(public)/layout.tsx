// src\app\(public)\layout.tsx

export const metadata: {
    title: "SnapZoška"
  };
  
export default function PublicLayout({
        children,
    }: {
    children: React.ReactNode;
    }) {
    return (
      <div>
        {children}
      </div>
    );
}