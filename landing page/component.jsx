/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8tapULOSrCl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-primary-foreground py-20 px-4 md:px-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-primary-foreground mb-4">Stay Active, Stay Healthy</h1>
        <p className="text-lg text-primary-foreground mb-8">
          Track your fitness goals and progress with our powerful dashboard.
        </p>
        <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary/90">
          Start Workout
        </Button>
      </section>
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Daily Activity</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="text-sm font-medium text-muted-foreground">Steps</div>
                <FootprintsIcon className="w-6 h-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8,245</div>
                <p className="text-sm text-muted-foreground">Today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="text-sm font-medium text-muted-foreground">Distance</div>
                <RouteIcon className="w-6 h-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">5.2 mi</div>
                <p className="text-sm text-muted-foreground">Today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="text-sm font-medium text-muted-foreground">Calories</div>
                <FlameIcon className="w-6 h-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,342 kcal</div>
                <p className="text-sm text-muted-foreground">Today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="text-sm font-medium text-muted-foreground">Heart Rate</div>
                <HeartIcon className="w-6 h-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">72 bpm</div>
                <p className="text-sm text-muted-foreground">Resting</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 px-4 md:px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Workout History</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-muted-foreground">Running</div>
                  <div className="text-xs font-medium text-muted-foreground">June 20, 2024</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">6.2 mi</div>
                    <p className="text-sm text-muted-foreground">Distance</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">48m 22s</div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">7:48 /mi</div>
                    <p className="text-sm text-muted-foreground">Pace</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-muted-foreground">Cycling</div>
                  <div className="text-xs font-medium text-muted-foreground">June 15, 2024</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">18.4 mi</div>
                    <p className="text-sm text-muted-foreground">Distance</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1h 12m</div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15.3 mph</div>
                    <p className="text-sm text-muted-foreground">Speed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-muted-foreground">Hiking</div>
                  <div className="text-xs font-medium text-muted-foreground">June 10, 2024</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">8.1 mi</div>
                    <p className="text-sm text-muted-foreground">Distance</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">2h 45m</div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1,325 ft</div>
                    <p className="text-sm text-muted-foreground">Elevation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Health Insights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="text-sm font-medium text-muted-foreground">Resting Heart Rate</div>
                <HeartIcon className="w-6 h-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">72 bpm</div>
                <p className="text-sm text-muted-foreground">Your resting heart rate is within the normal range.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="text-sm font-medium text-muted-foreground">Sleep Quality</div>
                <MoonIcon className="w-6 h-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">85%</div>
                <p className="text-sm text-muted-foreground">Your sleep quality has been excellent this week.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="text-sm font-medium text-muted-foreground">Stress Level</div>
                <GaugeIcon className="w-6 h-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">Low</div>
                <p className="text-sm text-muted-foreground">Your stress levels have been low this week.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

function FlameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}


function FootprintsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>
  )
}


function GaugeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function RouteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  )
}