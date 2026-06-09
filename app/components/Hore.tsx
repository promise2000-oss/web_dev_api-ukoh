const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black pt-32 pb-20 px-6 flex flex-col justify-center overflow-hidden">
      {/* Background Glow - Subtle Pink/Red aura for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF1E56] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: The Hook & Identity */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-[#FF1E56] rounded-full animate-pulse"></span>
            <span className="text-[#FF1E56] text-xs font-black uppercase tracking-[0.3em]">
              Edward Okigbo &mdash; Email Marketing Strategist
            </span>
          </div>
          
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
            Build Systems. <br/>
            <span className="text-transparent [-webkit-text-stroke:1px_white]">Scale Revenue.</span> <br/>
            Retain Fans.
          </h1>

          {/* Skill Pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {['B2C & DTC', 'Shopify Ecosystem', 'Lifecycle Marketing', 'Data Optimization'].map((tag) => (
              <span key={tag} className="text-white/60 text-xs font-bold uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="bg-[#FF1E56] hover:bg-[#D91547] text-white text-sm font-black uppercase tracking-widest px-8 py-4 rounded-sm transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(255,30,86,0.2)]">
              Scale Your Revenue
            </button>
            <button className="text-white text-sm font-black uppercase tracking-widest px-8 py-4 border border-white/20 rounded-sm hover:bg-white/5 transition-colors">
              Read Case Studies
            </button>
          </div>
        </div>

        {/* Right Column: The "Maryann" Style Letter, elevated for Senior UI */}
        <div className="lg:col-span-5 relative">
          {/* Subtle frame for the letter */}
          <div className="absolute -inset-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm -z-10 rounded-xl hidden md:block"></div>
          
          <div className="md:p-4">
            <p className="text-white text-xl font-bold mb-6">Dear Founder,</p>
            
            <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed font-medium">
              <p>
                You have a business to grow&mdash;optimizing product-market fit, managing operations, and scaling customer acquisition. Dedicating hours to email flow strategy shouldn&apos;t be what pulls you away from the big picture.
              </p>
              <p>
                I am an eCommerce Email Marketing Strategist who operates at the intersection of <strong className="text-white font-bold">consumer psychology, persuasive copywriting, and data-driven optimization</strong>.
              </p>
              <p>
                My mission is straightforward: to take the marketing weight off your shoulders. I don&apos;t just dispatch campaigns&mdash;I engineer predictable lifecycle systems that transform first-time buyers into loyal, lifetime customers. 
              </p>
              
              {/* Pull Quote / Core Promise */}
              <p className="border-l-2 border-[#FF1E56] pl-4 py-1 italic text-gray-300">
                &ldquo;Turning email into a channel for sustainable, long-term revenue growth&mdash;no restrictive contracts, just results.&rdquo;
              </p>
            </div>

            {/* Signature Area */}
            <div className="mt-10 flex items-center gap-4">
              <div className="w-14 h-14 bg-gray-800 rounded-full overflow-hidden border-2 border-[#FF1E56]/50">
                {/* Replace this div with an actual <img src="..." /> of Edward */}
                <div className="w-full h-full bg-gradient-to-tr from-[#FF1E56] to-gray-900"></div>
              </div>
              <div>
                <p className="text-white text-sm font-black uppercase tracking-widest">Edward Okigbo</p>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">Email Marketing Strategist</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
