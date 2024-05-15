import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/_layout/users/')({
  component: () => <div>Hello /dashboard/users/!</div>
})