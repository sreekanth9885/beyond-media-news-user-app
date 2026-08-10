export default function ContactPage() {
  return (
    <main className="mx-auto max-w-screen-xl px-5 py-12">

      <div className="max-w-2xl">

        <h1 className="text-4xl font-bold">
          Contact Us
        </h1>

        <p className="mt-4 text-muted">
          We would love to hear from you.
        </p>

        <div className="mt-8 space-y-5">

          <div>
            <h2 className="font-semibold">
              Email
            </h2>

            <p className="mt-1 text-muted">
              info@beyondimedia.com
            </p>
          </div>

          <div>
            <h2 className="font-semibold">
              Location
            </h2>

            <p className="mt-1 text-muted">
              Hyderabad, Telangana
            </p>
          </div>

          <div>
            <h2 className="font-semibold">
              Phone
            </h2>

            <p className="mt-1 text-muted">
              +91 XXXXX XXXXX
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}