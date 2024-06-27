
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Services() {
  return (<>
    <section className="w-full p-8 mt-20 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div
          className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <img
            alt="Weather Conditions"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="400"
            src="waS.png"
            width="600" />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Weather Services</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore our comprehensive weather services to stay informed and prepared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full p-8 py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="group">
            <CardContent className="flex flex-col items-start gap-4">
              <div
                className="bg-gray-900 p-3 mt-4 rounded-lg group-hover:shadow-lg group-hover:scale-105 transition-all">
                <SunIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Current Weather</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Get up-to-date information on current weather conditions.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="group">
            <CardContent className="flex flex-col items-start gap-4">
              <div
                className="bg-gray-900 mt-4 p-3 rounded-lg group-hover:shadow-lg group-hover:scale-105 transition-all">
                <CalendarIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Weather Forecasts</h3>
                <p className="text-gray-500 dark:text-gray-400">Get accurate weather forecasts for the days ahead.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="group">
            <CardContent className="flex flex-col items-start gap-4">
              <div
                className="bg-gray-900 mt-4 p-3 rounded-lg group-hover:shadow-lg group-hover:scale-105 transition-all">
                <BellIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Weather Alerts</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Stay informed with real-time weather alerts and notifications.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    <section className="w-full p-8 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-3" >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Explore Our Weather Services</h2>
          <p
            className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Get the information you need to stay prepared and informed.
          </p>
        </div>
        <div className="mt-6">
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  </>);
}

function BellIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>)
  );
}


function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function SunIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>)
  );
}
