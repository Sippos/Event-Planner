function App() {
  return (
    <div className="container mx-auto p-4 mt-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Event Planner</h1>
      <p className="text-gray-700 text-lg">
        This is your new React Frontend using Vite, Tailwind CSS, and React Router.
      </p>
      <div className="mt-6 p-4 bg-gray-100 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Next Steps:</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Create an <strong>EventsPage.jsx</strong> component to fetch data from your API.</li>
          <li>Add a new <code>&lt;Route&gt;</code> in <strong>main.jsx</strong> for the Events page.</li>
          <li>Ensure your Express API backend is running and configure CORS if needed.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
