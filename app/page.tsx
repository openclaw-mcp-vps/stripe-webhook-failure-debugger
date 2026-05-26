export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          API Monitoring
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Debug Failed Stripe Webhooks{' '}
          <span className="text-[#58a6ff]">Instantly</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your Stripe account, paste your webhook endpoint, and get specific failure analysis with ready-to-use code fixes in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $11/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card trials. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🔍', title: 'Fetch Failed Events', desc: 'Pull failed webhook attempts directly from Stripe API with full payload details.' },
            { icon: '⚡', title: 'Diagnose Root Cause', desc: 'Identify timeout errors, signature mismatches, HTTP failures, and more automatically.' },
            { icon: '🛠️', title: 'Get Code Fixes', desc: 'Receive language-specific code snippets to resolve each failure type immediately.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2 uppercase tracking-widest">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited webhook analysis',
              'All Stripe failure types covered',
              'Code fix snippets (Node, Python, PHP)',
              'Webhook signature debugger',
              'Email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Start Debugging
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does it connect to Stripe?',
              a: 'You provide a restricted Stripe API key with read-only access to webhook events. We never store your key — it is used only for the analysis session.',
            },
            {
              q: 'Which failure types are supported?',
              a: 'Timeout errors, HTTP 4xx/5xx responses, signature verification failures, TLS errors, DNS failures, and payload parsing issues are all detected and explained.',
            },
            {
              q: 'What languages are the code fixes in?',
              a: 'Fix snippets are provided in Node.js, Python, and PHP — the three most common Stripe integration languages.',
            },
          ].map((faq) => (
            <div key={faq.q} className="border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Stripe Webhook Failure Debugger. Not affiliated with Stripe, Inc.
      </footer>
    </main>
  )
}
