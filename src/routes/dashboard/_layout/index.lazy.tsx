import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const Route = createLazyFileRoute('/dashboard/_layout/')({
  component: Dashboard,
});

function Dashboard() {
  return (
    <section className="antialiased">
      <header className="flex items-center justify-between space-y-2 pb-2">
        <h2 className="text-3xl font-bold capitalize tracking-tight">dashboard</h2>
        <div className="flex items-center space-x-2">
          <DatePickerWithRange />
          <Button>Donwload</Button>
        </div>
      </header>

      <Tabs defaultValue="account" className=" w-full">
        <TabsList className="">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <CardDashboard title="total revenue" icon={<DollarSign className="size-4" />} />
            <CardDashboard title="subscriptions" icon={<DollarSign className="size-4" />} />
            <CardDashboard title="sales" icon={<DollarSign className="size-4" />} />
            <CardDashboard title="active now" icon={<DollarSign className="size-4" />} />
          </div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </section>
  );
}

interface CardDashboardProps {
  title: string;
  icon: React.ReactNode;
}

function CardDashboard({ title, icon }: CardDashboardProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setIsLoading(!isLoading);
      console.log(isLoading);
    }, 2000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium capitalize">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <>
            <Skeleton className=" mb-1 h-7 w-[150px]" />
            <Skeleton className=" h-4 w-[125px]" />
          </>
        ) : (
          <>
            <span className="text-2xl font-bold">$45,231.89</span>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </>
        )}
      </CardContent>
    </Card>
  );
}

import * as React from 'react';
import { addDays, format } from 'date-fns';
import { Calendar as CalendarIcon, DollarSign } from 'lucide-react';
import { DateRange } from 'react-day-picker';

import { cn } from '@/utils/cn';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Skeleton } from '@/components/ui/skeleton';
export function DatePickerWithRange({ className }: { className?: string }) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn('mr-2 grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'justify-start  text-left font-normal ',
              !date && 'text-muted-foreground'
            )}>
            <CalendarIcon className="mr-2 size-4" />

            {date?.from ? (
              date.to ? (
                <span className="hidden md:block">
                  {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                </span>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" className="w-auto p-0" align="end">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
