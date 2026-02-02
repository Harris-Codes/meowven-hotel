{
  /* basically ahref= from html*/
}
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-dvh flex items-center justify-center px-6 bg-gradient-to-b from-white-50 to-orange-100">
      {/* Layer 1 above: controls the space around the login box*/}

      {/* Layer 2  : this is the card login itself */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-orange-100/50 border border-stone-100 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-4xl mb-4 text-orange-600">🐾</div>
          <h1 className="text-3xl font-extrabold text-orange-500 tracking-tight ">
            Welcome Back
          </h1>
          <p className="text-stone-500 mt-2">
            Your felines luxury suite awaits.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5">
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
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-stone-700">
                Password
              </label>
              <a href="#" className="text-xs text-orange-600 hover:underline">
                Forgot?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
            />
          </div>

          <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-200 transition-all active:scale-[0.98]">
            Sign In
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center mt-8 text-stone-500 text-sm">
          New to Meowven?{" "}
          <Link
            href="/register"
            className="text-orange-600 font-bold hover:text-orange-700"
          >
            Create an account
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
