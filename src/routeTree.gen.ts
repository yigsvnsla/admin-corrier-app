/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardLayoutImport } from './routes/dashboard/_layout'
import { Route as DashboardLayoutUsersIndexImport } from './routes/dashboard/_layout/users/index'

// Create Virtual Routes

const DashboardImport = createFileRoute('/dashboard')()
const IndexLazyImport = createFileRoute('/')()
const DashboardLayoutIndexLazyImport = createFileRoute('/dashboard/_layout/')()

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const DashboardLayoutRoute = DashboardLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardLayoutIndexLazyRoute = DashboardLayoutIndexLazyImport.update({
  path: '/',
  getParentRoute: () => DashboardLayoutRoute,
} as any).lazy(() =>
  import('./routes/dashboard/_layout/index.lazy').then((d) => d.Route),
)

const DashboardLayoutUsersIndexRoute = DashboardLayoutUsersIndexImport.update({
  path: '/users/',
  getParentRoute: () => DashboardLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/_layout': {
      preLoaderRoute: typeof DashboardLayoutImport
      parentRoute: typeof DashboardRoute
    }
    '/dashboard/_layout/': {
      preLoaderRoute: typeof DashboardLayoutIndexLazyImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/dashboard/_layout/users/': {
      preLoaderRoute: typeof DashboardLayoutUsersIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  DashboardRoute.addChildren([
    DashboardLayoutRoute.addChildren([
      DashboardLayoutIndexLazyRoute,
      DashboardLayoutUsersIndexRoute,
    ]),
  ]),
])

/* prettier-ignore-end */
