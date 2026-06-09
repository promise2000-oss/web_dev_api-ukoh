const PortfolioContent = () => {
  return (
    <div className="bg-black text-white font-sans">
      
      {/* 1. SKILLS & CORE SERVICES */}
      <section id="services" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-[#FF1E56] text-xs font-black uppercase tracking-[0.4em] mb-4 sticky top-32">
              Capabilities
            </h2>
            <p className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
              The <br/><span className="text-transparent [-webkit-text-stroke:1px_white]">Revenue</span><br/> Engine.
            </p>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* Core Services List */}
            <div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-8 border-b border-white/20 pb-4">Core Services</h3>
              <ul className="space-y-6">
                {[
                  { title: 'Lifecycle Email Strategy', desc: 'Bridging customer acquisition and long-term retention with structured nurture pathways.' },
                  { title: 'Campaign Planning & Execution', desc: 'End-to-end management of seasonal promotions, product launches, and recurring newsletter cadences.' },
                  { title: 'Email Copywriting', desc: 'High-converting copy that embodies your brand voice and drives measurable action.' },
                  { title: 'Flow & Automation Setup', desc: 'Building self-sustaining systems that generate revenue around the clock with minimal oversight.' },
                  { title: 'Segmentation & Personalization', desc: 'Delivering the right message to the right audience at the optimal moment in their journey.' }
                ].map((item, i) => (
                  <li key={i} className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                    <span className="text-[#FF1E56] font-black tracking-widest text-sm w-48 shrink-0">{item.title}</span>
                    <span className="text-gray-400 text-sm md:text-base font-medium group-hover:text-white transition-colors">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Flows Grid */}
            <div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-8 border-b border-white/20 pb-4 mt-8">Key Automation Flows</h3>
              <div className="grid md:grid-cols-2 gap-px bg-white/10">
                {[
                  { title: 'Welcome Series', desc: 'Onboarding new subscribers with a curated brand introduction that drives early engagement.' },
                  { title: 'Abandoned Cart', desc: 'Reclaiming lost revenue from high-intent shoppers through strategic, timely follow-ups.' },
                  { title: 'Post-Purchase', desc: 'Maximizing customer lifetime value with intelligent cross-sells and reorder prompts.' },
                  { title: 'Win-Back', desc: 'Re-engaging inactive subscribers and reviving dormant customer relationships.' }
                ].map((flow, i) => (
                  <div key={i} className="bg-black p-8 hover:bg-[#0a0a0a] transition-colors">
                    <h4 className="text-white text-lg font-bold uppercase tracking-tight mb-2">{flow.title}</h4>
                    <p className="text-gray-400 text-sm">{flow.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROOF POINTS & TESTIMONIALS */}
      <section className="py-24 px-6 bg-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Massive Testimonial */}
          <div className="max-w-4xl mx-auto text-center mb-24">
              <p className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-white/90">
                &ldquo;Edward increased our email-attributed revenue from <span className="text-[#FF1E56]">10% to 28%</span> in under a quarter. Our ROAS has never been stronger.&rdquo;
              </p>
              <p className="text-gray-500 uppercase tracking-widest text-sm font-black">— Founder, Premium Home Goods Brand</p>
          </div>

          {/* Hard Metrics Grid */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="border-l-2 border-[#FF1E56] pl-8">
              <span className="text-5xl md:text-7xl font-black text-white block mb-2">3.5%</span>
              <span className="text-white/60 uppercase tracking-widest text-xs font-bold">Average Click-Through Rate (CTR) across all automated flows.</span>
            </div>
            <div className="border-l-2 border-[#FF1E56] pl-8">
              <span className="text-5xl md:text-7xl font-black text-white block mb-2">99%</span>
              <span className="text-white/60 uppercase tracking-widest text-xs font-bold">Deliverability rate maintained while migrating over 50,000 subscribers across platforms.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WORK SAMPLES */}
      <section id="work" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#FF1E56] text-xs font-black uppercase tracking-[0.4em] mb-12">Select Case Studies</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Abandoned Cart Overhaul', result: '12% Revenue Recovery', desc: 'Redesigned a multi-step recovery sequence for a pet brand, recovering revenue that was previously left on the table.' },
              { title: 'Educational Welcome Flow', result: '45% Sustained Open Rate', desc: 'Developed a five-part brand story sequence for a sustainable apparel startup, establishing trust from the first touchpoint.' },
              { title: 'Flash Sales Campaign', result: '$8K in 12 Hours', desc: 'Executed a time-sensitive VIP flash sale campaign for an eCommerce brand, driving urgency and immediate conversions.' }
            ].map((work, i) => (
              <div key={i} className="group relative border border-white/10 p-8 hover:border-[#FF1E56]/50 transition-colors bg-white/[0.02]">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-[#FF1E56] transition-colors">{work.title}</h3>
                <p className="text-gray-400 text-sm mb-8 min-h-[60px]">{work.desc}</p>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <span className="text-white font-bold uppercase tracking-widest text-xs">Result: {work.result}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="https://t.me/techeegyan" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white uppercase tracking-widest font-bold border-b border-[#FF1E56] pb-1 transition-colors">
              Explore Full Portfolio Gallery <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. TOOLS & CONTACT FOOTER */}
      <footer id="contact" className="py-24 px-6 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-end">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
              Let&apos;s <span className="text-[#FF1E56]">Talk.</span>
            </h2>
            <p className="text-gray-400 mb-10 max-w-md">
              If you&rsquo;re an eCommerce brand looking to drive revenue growth through strategic email marketing, I&rsquo;m available for freelance, contract, and ongoing retainer engagements.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:edwardokigbo@gmail.com" className="block text-xl md:text-2xl font-bold hover:text-[#FF1E56] transition-colors">edwardokigbo@gmail.com</a>
              <div className="flex gap-6 pt-4">
                <a href="https://linkedin.com/in/edwardokigbo" target="_blank" rel="noreferrer" className="text-sm uppercase tracking-widest font-bold text-gray-500 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://x.com/edwardokigbo" target="_blank" rel="noreferrer" className="text-sm uppercase tracking-widest font-bold text-gray-500 hover:text-white transition-colors">X (Twitter)</a>
              </div>
            </div>
          </div>

          {/* Tech Stack / Tools */}
          <div className="lg:text-right">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-gray-600 mb-6">Platforms & Tools</h3>
            <div className="flex flex-wrap lg:justify-end gap-2">
              {['Klaviyo Expert', 'Mailchimp', 'Omnisend', 'Figma', 'Canva', 'Google Analytics 4', 'Shopify Analytics', 'Notion', 'Slack'].map((tool) => (
                <span key={tool} className="text-white/40 text-xs font-bold uppercase tracking-widest border border-white/10 px-4 py-2 rounded-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default PortfolioContent;
