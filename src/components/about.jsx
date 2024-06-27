
export function About() {
  return (
    (<main className="flex-1 p-8 mt-5">
      <section className="w-full  py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div
            className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  About Our Weather App
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Our weather app is designed to provide you with accurate and up-to-date weather information for your
                  location. With seamless weather data integration, city-based weather display, and an easy-to-use
                  interface, our app makes it simple to stay informed about the weather.
                </p>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center  sm:w- lg:order-last"
              height="650"
              src="Wa.png"
              width="" />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div
            className="grid items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <div className="grid gap-1">
              <div
                className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-700">
                <CloudIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="text-lg font-bold">Weather Data Integration</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our app seamlessly integrates with leading weather data providers to deliver accurate and up-to-date
                weather information.
              </p>
            </div>
            <div className="grid gap-1">
              <div
                className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-700">
                <MapIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="text-lg font-bold">City-based Weather Display</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Get detailed weather information for your city, including temperature, precipitation, and wind speed.
              </p>
            </div>
            <div className="grid gap-1">
              <div
                className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-700">
                <UserIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="text-lg font-bold">Easy-to-use Interface</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our intuitive and user-friendly interface makes it simple to access the weather information you need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>)
  );
}

function CloudIcon(props) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>)
  );
}


function MapIcon(props) {
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
      <path
        d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>)
  );
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}
