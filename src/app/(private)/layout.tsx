import WatchCat from '../../components/WatchCat'

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthGuard>
          {children}
    </AuthGuard>
  )
}