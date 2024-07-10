import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-6xl text-filthy font-bold tracking-tighter">
                  Visualize Your GitHub Contributions
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  HubStats is a powerful tool that helps you track and visualize your GitHub contributions. Get insights
                  into your coding activity and stay motivated to keep contributing.
                </p>
                <form className="w-full max-w-md">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter your GitHub username"
                      className="flex-1 px-3 py-2 bg-white text-black rounded-md"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors"
                    >
                      Analyze
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-6xl font-bold tracking-tighter text-filthy">Key Features</h2>
                <p className="max-w-[900px] text-hub-lightgrey md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  HubStats offers a range of features to help you stay on top of your GitHub contributions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Activity Tracking</h3>
                <p className="text-gray-300">
                  Monitor your daily, weekly, and monthly GitHub activity to stay motivated and improve your coding
                  habits.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Contribution Insights</h3>
                <p className="text-gray-300">
                  Gain insights into your GitHub contributions, including commit trends, language usage, and more.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Contribution Calendar</h3>
                <p className="text-gray-300">
                  Visualize your GitHub contributions on a calendar to identify patterns and track your progress over
                  time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;