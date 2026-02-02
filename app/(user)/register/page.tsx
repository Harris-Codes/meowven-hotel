import Link from "next/dist/client/link";

export default function RegisterPage() {
  return (
    <div className="min-h-dvh flex items-center justify-center px-6 bg-gradient-to-b from-white-50 to-orange-100">
      <div className=" w-full max-w-md bg-white rounded-3xl border border-stone-100 p-8 md:p-12">
        <div className="text-center mb-10">
          <div className="text-4xl mb-4">🐾</div>
          <h1 className="text-3xl font-extrabold text-orange-500 tracking-tight">
            Create an Account
          </h1>
          <h2 className="text-stone-500 mt-2">
            Please register to make a booking!
          </h2>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="human@meowven.com"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
            />
          </div>

          <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-200 transition-all active:scale-[.98]">
            Register
          </button>
        </form>

        <p className="text-center mt-8 text-stone-500 text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-orange-600 font-bold hover:text-orange-700"
          >
            Sign in to your account
          </Link>
        </p>

        <Link
          href="/"
          className="block mx-auto w-48 px-4 py-2 rounded-xl mt-10 text-stone-700 bg-stone-100 hover:bg-stone-200 text-center font-semibold text-sm transition-all"
        >
          ← Back to homepage
        </Link>
      </div>
    </div>
  );
}
