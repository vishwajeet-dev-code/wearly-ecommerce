const Login = () => {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <header className="mb-10 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
          Welcome to Wearly
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Your account
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          Sign in or create an account to get started.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <section className="border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-gray-900">Login</h2>
          <p className="mt-1 text-sm text-gray-600">
            Welcome back. Enter your details below.
          </p>

          <div className="mt-7 space-y-5">
            <div>
              <label
                htmlFor="login-email"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                Email address
              </label>
              <input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                className="h-12 w-full border border-gray-300 px-3 text-sm outline-none transition focus:border-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                placeholder="Enter your password"
                className="h-12 w-full border border-gray-300 px-3 text-sm outline-none transition focus:border-gray-900"
              />
            </div>

            <button
              type="button"
              className="h-12 w-full bg-gray-900 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Login
            </button>
          </div>
        </section>

        <section className="border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-gray-900">Register</h2>
          <p className="mt-1 text-sm text-gray-600">
            Create an account for a more personal shopping experience.
          </p>

          <div className="mt-7 space-y-5">
            <div>
              <label
                htmlFor="register-name"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                Full name
              </label>
              <input
                id="register-name"
                type="text"
                placeholder="Your name"
                className="h-12 w-full border border-gray-300 px-3 text-sm outline-none transition focus:border-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="register-email"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                Email address
              </label>
              <input
                id="register-email"
                type="email"
                placeholder="you@example.com"
                className="h-12 w-full border border-gray-300 px-3 text-sm outline-none transition focus:border-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="register-password"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                Create password
              </label>
              <input
                id="register-password"
                type="password"
                placeholder="Create a password"
                className="h-12 w-full border border-gray-300 px-3 text-sm outline-none transition focus:border-gray-900"
              />
            </div>

            <button
              type="button"
              className="h-12 w-full bg-gray-900 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Create account
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Login