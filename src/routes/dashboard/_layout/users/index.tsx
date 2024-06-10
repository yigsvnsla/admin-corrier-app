import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { fakeAsyncGetUsers } from '@/utils/faker/user.faker';
import { createFileRoute } from '@tanstack/react-router';
import { IUser } from '@/interfaces/user.interface';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Icon from '@/components/Icon';
import { useMemo, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTablePagination } from '@/components/ui/datatable-pagination';

export const Route = createFileRoute('/dashboard/_layout/users/')({
  component: Index,
});

function Index() {
  const [paginationState, setPaginationState] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const query = useQuery({ queryKey: ['query-list-users'], queryFn: fakeAsyncGetUsers });

  const columns: ColumnDef<IUser>[] = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && 'indeterminate')
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: '_id',
        header: 'ID',
        cell: ({ row }) => <div className="w-4 lowercase">{row.index}</div>,
      },
      {
        accessorKey: 'nameComplete',
        header: () => (
          <div>
            <Button variant="ghost">
              Complete Name
              <Icon name="user" className="ml-2 size-4" />
            </Button>
          </div>
        ),
        cell: ({ row }) => {
          const nameComplete = `${row.original.firstName} ${row.original.lastName}`;
          const avatarFallback = `${row.original.firstName.charAt(0)}${row.original.lastName.charAt(0)}`;
          const avatar = row.original.avatar;
          return (
            <div className="flex flex-row items-center gap-3 font-semibold uppercase">
              <Avatar>
                <AvatarImage src={avatar} />
                <AvatarFallback>{avatarFallback}</AvatarFallback>
              </Avatar>
              {nameComplete}
            </div>
          );
        },
      },
      {
        accessorKey: 'email',
        header: () => (
          <div>
            <Button variant="ghost">
              Email
              <Icon name="mail" className="ml-2 size-4" />
            </Button>
          </div>
        ),
        cell: ({ row }) => <div className="w-4 lowercase">{row.getValue('email')}</div>,
      },
      {
        accessorKey: 'subscriptionTier',
        header: () => (
          <div className="flex">
            <Button variant="ghost" className="mx-auto">
              Email
              <Icon name="mail" className="ml-2 size-4 " />
            </Button>
          </div>
        ),
        cell: ({ row }) => (
          <div className="flex capitalize">
            <Badge variant="success" className="mx-auto">
              {row.getValue('subscriptionTier')}
            </Badge>
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: query.data ?? [],
    columns,
    // onSortingChange: setSorting,
    // onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // getSortedRowModel: getSortedRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    // onColumnVisibilityChange: setColumnVisibility,
    // onRowSelectionChange: setRowSelection,
    onPaginationChange: setPaginationState,
    state: {
      pagination: paginationState,
      //   sorting,
      //   columnFilters,
      //   columnVisibility,
      //   rowSelection,
    },
  });

  return (
    <section className="container">
      <Card>
        <CardHeader className="flex flex-row items-end justify-between gap-4 p-4">
          <h2 className="mb-4 ml-4 mr-auto text-3xl font-semibold tracking-tight transition-colors ">
            List of Users
          </h2>
          <div>
            <Label htmlFor="input-text-filter">What are you look for?</Label>
            <Input
              className="w-80"
              id="input-text-filter"
              placeholder="Search by, category 1, category 2"></Input>
          </div>
          <div>
            <Label htmlFor="input-text-filter">What are you look for?</Label>
            <Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </Select>
          </div>
          <div>
            <Label htmlFor="input-text-filter">What are you look for?</Label>
            <Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </Select>
          </div>
          <Button variant="secondary" className=" gap-2">
            <Icon className="size-4" name="search" />
            <span className="capitalize">search</span>
          </Button>
          <Button variant="info" className="gap-2 ">
            <Icon className="size-4" name="plus" />
            <span className="capitalize">add</span>
          </Button>
          <Button variant="destructive" className="gap-2">
            <Icon className="size-4" name="trash" />
            <span className="capitalize">delete</span>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-auto rounded-lg border border-primary-foreground">
            <Table className="overflow-hidden">
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id} className="bg-primary-foreground">
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell className="py-2" key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
              <TableFooter></TableFooter>
            </Table>
          </div>
          <div className="mt-4">
            <DataTablePagination table={table} />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

// import { createRandomUsers } from '@/utils/faker/user.faker';
// import { createFileRoute } from '@tanstack/react-router';
// import { Separator } from '@radix-ui/react-separator';
// import { IUser } from '@/interfaces/user.interface';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import Icon from '@/components/Icon';
// import { useMemo, useState } from 'react';
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from '@tanstack/react-table';

// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// export const Route = createFileRoute('/dashboard/_layout/users/')({
//   component: Index,
// });

// function Index() {
//   const [stateData] = useState(createRandomUsers(20));
//   const [sorting, setSorting] = useState<SortingState>([]);
//   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
//   const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
//   const [rowSelection, setRowSelection] = useState({});

//   const columns: ColumnDef<IUser>[] = useMemo(
//     () => [
//       {
//         id: 'select',
//         header: ({ table }) => (
//           <Checkbox
//             checked={
//               table.getIsAllPageRowsSelected() ||
//               (table.getIsSomePageRowsSelected() && 'indeterminate')
//             }
//             onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//             aria-label="Select all"
//           />
//         ),
//         cell: ({ row }) => (
//           <Checkbox
//             checked={row.getIsSelected()}
//             onCheckedChange={(value) => row.toggleSelected(!!value)}
//             aria-label="Select row"
//           />
//         ),
//         enableSorting: false,
//         enableHiding: false,
//       },
//       {
//         accessorKey: 'email',
//         header: ({ column }) => {
//           return (
//             <Button
//               variant="ghost"
//               onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
//               Email
//               <Icon name="file" className="ml-2 size-4" />
//             </Button>
//           );
//         },
//         cell: ({ row }) => <div className="w-4 lowercase">{row.getValue('email')}</div>,
//       },
//       {
//         id: 'actions',
//         enableHiding: false,
//         header: 'Actions',
//         cell: ({ row }) => {
//           const payment = row.original;

//           return (
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="size-8 p-0">
//                   <span className="sr-only">Open menu</span>
//                   <Icon name="ellipsis" className="size-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                 <DropdownMenuItem onClick={() => alert(payment)}>Copy payment ID</DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>View customer</DropdownMenuItem>
//                 <DropdownMenuItem>View payment details</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           );
//         },
//       },
//     ],
//     []
//   );

//   const table = useReactTable({
//     data: stateData,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   });

//   return (
//     <section>
//       <div className="w-full">
//         <Card>
//           <CardHeader>
//             <CardTitle>Card Title</CardTitle>
//             <CardDescription>Card Description</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <Tabs defaultValue="list">
//               <TabsList >
//                 <TabsTrigger value="list">List</TabsTrigger>
//                 <TabsTrigger value="add">Add</TabsTrigger>
//               </TabsList>
//               <TabsContent value="list">
//                 <div className="flex items-center py-4">
//                   <Input
//                     placeholder="Filter emails..."
//                     value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
//                     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
//                     onChange={(event) =>
//                       table.getColumn('email')?.setFilterValue(event.target.value)
//                     }
//                     className="max-w-sm"
//                   />
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <Button variant="outline" className="ml-auto">
//                         Columns <Icon name="file" className="ml-2 size-4" />
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                       {table
//                         .getAllColumns()
//                         .filter((column) => column.getCanHide())
//                         .map((column) => {
//                           return (
//                             <DropdownMenuCheckboxItem
//                               key={column.id}
//                               className="capitalize"
//                               checked={column.getIsVisible()}
//                               onCheckedChange={(value) => column.toggleVisibility(!!value)}>
//                               {column.id}
//                             </DropdownMenuCheckboxItem>
//                           );
//                         })}
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 </div>
//                 <Separator />

//                 <Table>
//                   <TableHeader>
//                     {table.getHeaderGroups().map((headerGroup) => (
//                       <TableRow key={headerGroup.id}>
//                         {headerGroup.headers.map((header) => {
//                           return (
//                             <TableHead key={header.id}>
//                               {header.isPlaceholder
//                                 ? null
//                                 : flexRender(header.column.columnDef.header, header.getContext())}
//                             </TableHead>
//                           );
//                         })}
//                       </TableRow>
//                     ))}
//                   </TableHeader>
//                   <TableBody>
//                     {table.getRowModel().rows?.length ? (
//                       table.getRowModel().rows.map((row) => (
//                         <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
//                           {row.getVisibleCells().map((cell) => (
//                             <TableCell key={cell.id}>
//                               {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                             </TableCell>
//                           ))}
//                         </TableRow>
//                       ))
//                     ) : (
//                       <TableRow>
//                         <TableCell colSpan={columns.length} className="h-9 text-center">
//                           No results.
//                         </TableCell>
//                       </TableRow>
//                     )}
//                   </TableBody>
//                   <div className="flex items-center justify-end space-x-2 py-4">
//                     <div className="flex-1 text-sm text-muted-foreground">
//                       {table.getFilteredSelectedRowModel().rows.length} of{' '}
//                       {table.getFilteredRowModel().rows.length} row(s) selected.
//                     </div>
//                     <div className="space-x-2">
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => table.previousPage()}
//                         disabled={!table.getCanPreviousPage()}>
//                         Previous
//                       </Button>
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => table.nextPage()}
//                         disabled={!table.getCanNextPage()}>
//                         Next
//                       </Button>
//                     </div>
//                   </div>
//                 </Table>
//               </TabsContent>
//               <TabsContent value="password">Change your password here.</TabsContent>
//             </Tabs>
//           </CardContent>
//           <CardFooter>
//             <p>Card Footer</p>
//           </CardFooter>
//         </Card>
//       </div>
//     </section>
//   );
// }
