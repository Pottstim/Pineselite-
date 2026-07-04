'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, X, ArrowRight, Users, Trophy, Heart, Target, 
  Calendar, Award, MapPin, Mail, Phone 
} from 'lucide-react';
import { toast } from 'sonner';
import dynamic from 'next/dynamic';

const Basketball3D = dynamic(() => import('./components/3d/Basketball3D'), { 
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-white/50">Loading 3D Experience...</div>
});

// Navbar Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#program', label: 'The Program' },
    { href: '#athletes', label: 'Our Athletes' },
    { href: '#impact', label: 'Impact' },
    { href: '#support', label: 'Support Us' },
    { href: '#join', label: 'Join' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <img
            src="/brand/pines-elite-modern.jpg"
            alt="Pines Elite AAU Basketball"
            className="h-11 w-11 rounded-full object-cover border border-white/10"
          />
          <div>
            <div className="font-bold text-xl tracking-[-0.5px]">PINES ELITE</div>
            <div className="text-[10px] text-white/50 -mt-1">AAU BASKETBALL • NC</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href.slice(1))}
              className="nav-link text-sm uppercase tracking-[1px]"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => scrollTo('join')}
            className="btn btn-secondary text-sm px-6 py-2.5"
          >
            TRYOUTS
          </button>
          <button 
            onClick={() => scrollTo('support')}
            className="btn btn-primary text-sm px-7 py-2.5"
          >
            DONATE
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mobile-menu glass border-t border-white/10 px-6 py-8 flex flex-col gap-6 text-lg">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href.slice(1))}
              className="text-left py-1 text-white/90 hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button 
              onClick={() => scrollTo('join')}
              className="btn btn-secondary w-full justify-center"
            >
              ATTEND TRYOUTS
            </button>
            <button 
              onClick={() => scrollTo('support')}
              className="btn btn-primary w-full justify-center"
            >
              SUPPORT THE PROGRAM
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-[100dvh] pt-20 flex items-center relative overflow-hidden bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-x-8 items-center pt-12 pb-20">
        {/* Left Content */}
        <div className="md:col-span-7 lg:pr-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 text-xs tracking-[2px] text-white/60">
            <MapPin size={14} /> SOUTHERN PINES, NORTH CAROLINA
          </div>

          <h1 className="display font-bold tracking-[-3.5px] leading-[0.92] mb-6">
            PINES<br />ELITE
          </h1>
          
          <p className="max-w-[42ch] text-2xl md:text-3xl text-white/90 tracking-[-0.6px] mb-4">
            Elite AAU Basketball.<br />Excellence and Character.
          </p>
          
          <p className="max-w-md text-lg text-white/60 mb-10">
            A 501(c)(3) nonprofit AAU basketball organization developing the next generation of elite athletes and leaders 
            in Southern Pines and Moore County through competitive basketball, skill development, and mentorship.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="btn btn-primary text-base px-9 py-4 group"
            >
              JOIN THE PROGRAM 
              <ArrowRight className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('support')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="btn btn-secondary text-base px-8 py-4"
            >
              BECOME A SPONSOR
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-white/50">
            <div>EST. 2019</div>
            <div className="h-px w-8 bg-white/20" />
            <div>200+ ATHLETES DEVELOPED</div>
          </div>
        </div>

        {/* Right: 3D Basketball Experience */}
        <div className="md:col-span-5 mt-12 md:mt-0 h-[520px] md:h-[620px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <Basketball3D />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] tracking-[3px] text-white/40">
        SCROLL TO EXPLORE
        <div className="h-px w-6 bg-white/30" />
      </div>
    </section>
  );
}

// Mission / About
function Mission() {
  return (
    <section id="about" className="section max-w-5xl mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="uppercase tracking-[3px] text-xs text-[#c8102e] mb-3">OUR MISSION</div>
        <h2 className="text-6xl md:text-7xl font-bold tracking-[-2.5px] leading-none mb-8">
          Elite basketball.<br />Exceptional character.<br />Lasting impact.
        </h2>
        <p className="text-xl text-white/70 max-w-[52ch] mx-auto">
          Pines Elite exists to give every young person in our community access to elite-level 
          basketball training, real competition, and the mentorship that turns potential into purpose.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
        {[
          { icon: Target, title: "COMPETITIVE EXCELLENCE", desc: "AAU teams competing at the highest regional and national levels" },
          { icon: Users, title: "CHARACTER FIRST", desc: "Leadership, discipline, accountability and respect taught every day" },
          { icon: Trophy, title: "COLLEGE PATHWAYS", desc: "Real exposure and guidance for athletes with D1, D2, D3 and NAIA dreams" },
        ].map((item, i) => (
          <div key={i} className="card p-8 text-left group">
            <div className="w-12 h-12 rounded-2xl bg-[#c8102e]/10 flex items-center justify-center mb-6 group-hover:bg-[#c8102e]/20 transition-colors">
              <item.icon className="text-[#c8102e]" size={26} />
            </div>
            <h3 className="font-semibold text-2xl tracking-[-0.5px] mb-3">{item.title}</h3>
            <p className="text-white/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// The Program Section
function Program() {
  const teams = [
    { age: "8U - 10U", focus: "Fundamentals & Love for the Game", schedule: "2x/week + weekend tournaments" },
    { age: "11U - 12U", focus: "Skill Mastery + Game IQ", schedule: "3x/week + regional AAU events" },
    { age: "13U - 14U", focus: "Athletic Development + Team Play", schedule: "4x/week + showcase events" },
    { age: "15U - 17U", focus: "College Prep & High-Level Competition", schedule: "Year-round + national exposure" },
  ];

  return (
    <section id="program" className="section bg-[#111114] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="text-[#c8102e] text-xs tracking-[3px] mb-2">DEVELOPMENT PATHWAY</div>
            <h2 className="text-6xl font-bold tracking-[-2px]">The Pines Program</h2>
          </div>
          <p className="max-w-sm text-white/60 mt-4 md:mt-0">
            Age-appropriate training that builds complete athletes — technically, athletically, and mentally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -6 }}
              className="card p-8 group border-l-4 border-[#c8102e]"
            >
              <div className="font-mono text-5xl font-bold tracking-[-3px] text-white/90 mb-6 group-hover:text-[#c8102e] transition-colors">
                {team.age}
              </div>
              <div className="font-semibold text-xl mb-2 tracking-[-0.3px]">{team.focus}</div>
              <div className="text-sm text-white/50">{team.schedule}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-9 glass rounded-3xl flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <div className="uppercase text-xs tracking-widest text-white/50 mb-2">WHAT MAKES US DIFFERENT</div>
            <h3 className="text-4xl font-bold tracking-[-1px] mb-4">More than a team.<br />A brotherhood.</h3>
          </div>
          <div className="flex-1 text-white/70 space-y-3 text-[15px]">
            <p>• Year-round skill development with certified coaches</p>
            <p>• Mental performance &amp; leadership curriculum</p>
            <p>• Academic monitoring and college planning support</p>
            <p>• Community service initiatives that build character</p>
            <p>• Transparent communication with every family</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Our Athletes / Testimonials
function Athletes() {
  const testimonials = [
    {
      quote: "Pines Elite completely changed how I see the game. The coaching is elite but they actually care about who you are as a person. I'm now playing at a D2 school with a scholarship.",
      name: "Jalen R.",
      role: "17U Alum • UNC Pembroke"
    },
    {
      quote: "My son went from being cut from his middle school team to starting on a top 50 AAU squad in two years. The growth in his confidence and work ethic has been incredible.",
      name: "Maria T.",
      role: "Parent of 14U Player"
    },
    {
      quote: "The culture here is unmatched. It's not just about winning games — it's about becoming the kind of man other people want to follow. My teammates are my brothers for life.",
      name: "Marcus K.",
      role: "16U Captain"
    },
  ];

  return (
    <section id="athletes" className="section max-w-7xl mx-auto px-6">
      <div className="text-center mb-14">
        <div className="text-[#c8102e] tracking-[3px] text-xs mb-3">REAL STORIES</div>
        <h2 className="text-6xl font-bold tracking-[-2px]">Voices from the Pines</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="card p-9 flex flex-col">
            <div className="flex-1">
              <div className="text-6xl text-[#c8102e]/30 font-serif leading-none mb-4">“</div>
              <p className="text-[17px] leading-relaxed text-white/90">"{t.quote}"</p>
            </div>
            <div className="pt-8 mt-auto border-t border-white/10">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-white/50">{t.role}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button 
          onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn btn-ghost text-sm flex items-center gap-2 mx-auto"
        >
          SEE ALL ATHLETE STORIES <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

// Impact Section with animated stats
function Impact() {
  const stats = [
    { number: "200+", label: "Young Athletes Developed", sub: "Since 2019" },
    { number: "28", label: "College Commitments", sub: "D1 • D2 • D3 • NAIA" },
    { number: "94%", label: "High School Graduation Rate", sub: "Among program alumni" },
    { number: "11", label: "State & Regional Titles", sub: "Across all age groups" },
  ];

  return (
    <section id="impact" className="section bg-[#111114] border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-x-16 items-center">
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <div className="uppercase tracking-[3px] text-xs text-[#c8102e] mb-3">MEASURABLE IMPACT</div>
            <h2 className="text-6xl font-bold tracking-[-2.2px] leading-none mb-6">
              We measure success<br />in transformed lives.
            </h2>
            <p className="text-xl text-white/70 pr-4">
              As a nonprofit, every dollar and every hour goes directly into developing 
              Southern Pines youth. Your support creates real, lasting change.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-white/50">
              <Heart className="text-[#c8102e]" size={18} /> 100% of donations support athletes
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-5">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card group">
                <div className="text-7xl font-bold tracking-[-3.5px] text-white mb-1 group-hover:text-[#c8102e] transition-colors">
                  {stat.number}
                </div>
                <div className="font-semibold text-xl tracking-[-0.3px] mb-1">{stat.label}</div>
                <div className="text-sm text-white/50">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Support / Donate Section
function Support() {
  const [donationAmount, setDonationAmount] = useState(100);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);

  const donationTiers = [
    { amount: 25, label: "Player Essentials", desc: "Snacks, water, and practice gear for one athlete for a month" },
    { amount: 75, label: "Tournament Support", desc: "Covers entry fees and travel for one player to a regional event" },
    { amount: 150, label: "Season Sponsor", desc: "Full season support including uniform and equipment for one athlete" },
    { amount: 500, label: "Program Champion", desc: "Significant impact — helps fund coaching, facility time, and mentorship programs" },
  ];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!donorName || !donorEmail) {
      toast.error("Please enter your name and email");
      return;
    }

    const type = isMonthly ? "monthly recurring" : "one-time";
    
    toast.success(`Thank you, ${donorName.split(" ")[0]}!`, {
      description: `Your ${type} donation of $${donationAmount} has been received. A receipt has been sent to ${donorEmail}.`,
      duration: 6000,
    });

    // Reset form (in real app would submit to Stripe or backend)
    setDonorName('');
    setDonorEmail('');
  };

  return (
    <section id="support" className="section max-w-7xl mx-auto px-6">
      <div className="text-center mb-14">
        <div className="text-[#c8102e] text-xs tracking=[3px] text-xs mb-3">GIVE BACK TO SOUTHERN PINES</div>
        <h2 className="text-6xl font-bold tracking-[-2px]">Support the Mission</h2>
        <p className="mt-4 max-w-md mx-auto text-white/70">
          Your tax-deductible gift directly funds training, competition, and life-changing opportunities for local youth.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Donation Form */}
        <div className="lg:col-span-3 card p-10">
          <form onSubmit={handleDonate} className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium text-white/80">DONATION AMOUNT</label>
                <div className="flex items-center gap-2 text-xs">
                  <button 
                    type="button"
                    onClick={() => setIsMonthly(false)}
                    className={`px-4 py-1 rounded-full transition ${!isMonthly ? 'bg-white text-black' : 'bg-white/10'}`}
                  >
                    ONE-TIME
                  </button>
                  <button 
                    type="button"
                    onClick={() => setIsMonthly(true)}
                    className={`px-4 py-1 rounded-full transition ${isMonthly ? 'bg-white text-black' : 'bg-white/10'}`}
                  >
                    MONTHLY
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-4">
                {[25, 50, 100, 250, 500].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setDonationAmount(amt)}
                    className={`px-6 py-2.5 rounded-2xl border text-sm font-medium transition-all ${donationAmount === amt 
                      ? 'border-[#c8102e] bg-[#c8102e]/10 text-white' 
                      : 'border-white/10 hover:border-white/30'}`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-light text-white/40">$</div>
                <input 
                  type="number" 
                  value={donationAmount} 
                  onChange={(e) => setDonationAmount(parseInt(e.target.value) || 25)}
                  className="pl-9 text-4xl font-semibold tracking-[-1px] h-[72px]" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label>FULL NAME</label>
                <input 
                  type="text" 
                  value={donorName} 
                  onChange={(e) => setDonorName(e.target.value)} 
                  placeholder="Alex Rivera" 
                  required 
                />
              </div>
              <div>
                <label>EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  value={donorEmail} 
                  onChange={(e) => setDonorEmail(e.target.value)} 
                  placeholder="you@email.com" 
                  required 
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary w-full py-4 text-base mt-2"
            >
              {isMonthly ? 'START MONTHLY GIFT' : 'MAKE TAX-DEDUCTIBLE DONATION'} → 
            </button>

            <p className="text-center text-xs text-white/40">
              Pines Elite is a registered 501(c)(3) nonprofit. All donations are tax-deductible to the extent allowed by law.
            </p>
          </form>
        </div>

        {/* Impact Tiers */}
        <div className="lg:col-span-2 space-y-4">
          {donationTiers.map((tier, i) => (
            <div 
              key={i} 
              onClick={() => setDonationAmount(tier.amount)}
              className={`card p-6 cursor-pointer transition-all hover:border-[#c8102e]/40 ${donationAmount === tier.amount ? 'border-[#c8102e] ring-1 ring-[#c8102e]/30' : ''}`}
            >
              <div className="flex justify-between items-baseline">
                <div className="font-semibold text-2xl tracking-tight">${tier.amount}</div>
                <div className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60">{tier.label}</div>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-snug">{tier.desc}</p>
            </div>
          ))}
          
          <div className="pt-4 text-xs text-white/40 px-1">
            Corporate sponsorships and player sponsorship opportunities also available. 
            <button onClick={() => toast.info("Contact us at sponsors@pineselite.org for partnership details")} className="underline hover:text-white/70 ml-1">Learn more →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Join / Tryouts Section
function Join() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', ageGroup: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Name and email are required");
      return;
    }
    toast.success("Application received!", {
      description: "Coach will contact you within 48 hours to discuss tryouts and next steps.",
    });
    setFormData({ name: '', email: '', phone: '', ageGroup: '', message: '' });
  };

  return (
    <section id="join" className="section max-w-5xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="text-[#c8102e] tracking=[3px] text-xs mb-3">THE NEXT CHAPTER STARTS HERE</div>
        <h2 className="text-6xl font-bold tracking-[-2px]">Ready to rise with us?</h2>
        <p className="mt-4 text-xl text-white/70">Whether you're a player ready to level up or a family looking for the right environment — we want to meet you.</p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Tryout Info */}
        <div className="md:col-span-2 card p-9">
          <h3 className="font-semibold text-3xl tracking-[-0.8px] mb-6">Upcoming Tryouts</h3>
          
          <div className="space-y-6 text-sm">
            <div>
              <div className="flex items-center gap-2 text-[#c8102e] mb-1">
                <Calendar size={16} /> <span className="font-medium">JULY 12 • 10:00 AM</span>
              </div>
              <div className="text-white/70">Sandhills Community College • Southern Pines</div>
              <div className="text-xs text-white/50 mt-1">Ages 10U – 17U • Bring basketball shoes + water</div>
            </div>
            
            <div className="pt-5 border-t border-white/10 text-white/70">
              <div className="font-medium text-white mb-2">What to Expect</div>
              <ul className="space-y-1.5 text-sm">
                <li>• 90-minute skills + scrimmage evaluation</li>
                <li>• Meet coaches and current players</li>
                <li>• Parent information session</li>
                <li>• Immediate feedback and roster decisions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3 card p-9">
          <h3 className="font-semibold text-3xl tracking-[-0.8px] mb-8">Get in touch</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label>ATHLETE / PARENT NAME</label>
                <input 
                  type="text" 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  placeholder="Jordan Hale" 
                  required 
                />
              </div>
              <div>
                <label>EMAIL</label>
                <input 
                  type="email" 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  placeholder="jordan@email.com" 
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label>PHONE NUMBER</label>
                <input 
                  type="tel" 
                  value={formData.phone} 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                  placeholder="(910) 555-0192" 
                />
              </div>
              <div>
                <label>AGE GROUP INTERESTED IN</label>
                <select 
                  value={formData.ageGroup} 
                  onChange={(e) => setFormData({...formData, ageGroup: e.target.value})}
                  className="bg-[#18181b] border border-white/10 rounded-2xl px-5 py-[17px] text-sm w-full"
                >
                  <option value="">Select age group...</option>
                  <option value="8U-10U">8U – 10U</option>
                  <option value="11U-12U">11U – 12U</option>
                  <option value="13U-14U">13U – 14U</option>
                  <option value="15U-17U">15U – 17U</option>
                </select>
              </div>
            </div>

            <div>
              <label>MESSAGE OR QUESTIONS (OPTIONAL)</label>
              <textarea 
                rows={4} 
                value={formData.message} 
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell us a bit about your experience or what you're looking for..."
                className="resize-y min-h-[100px]"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full py-4 text-base mt-3">
              SUBMIT INTEREST FORM
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-10 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-y-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/brand/pines-elite-modern.jpg"
              alt="Pines Elite AAU Basketball"
              className="h-10 w-10 rounded-full object-cover border border-white/10"
            />
            <span className="font-bold tracking-[-0.5px] text-xl">PINES ELITE</span>
          </div>
          <p className="max-w-xs text-white/50">
            A 501(c)(3) nonprofit AAU basketball organization dedicated to developing elite athletes and leaders 
            in Southern Pines, Pinehurst, Aberdeen and all of Moore County, North Carolina.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="font-medium mb-4 tracking-widest text-xs text-white/50">CONTACT</div>
          <div className="space-y-2 text-white/80">
            <div className="flex items-center gap-2"><MapPin size={15} /> Southern Pines, NC 28387</div>
            <div className="flex items-center gap-2"><Mail size={15} /> info@pineselite.org</div>
            <div className="flex items-center gap-2"><Phone size={15} /> (910) 555-0187</div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="font-medium mb-4 tracking-widest text-xs text-white/50">QUICK LINKS</div>
          <div className="grid grid-cols-2 gap-y-2 text-white/70">
            <a href="#program" className="hover:text-white transition">Our Program</a>
            <a href="#athletes" className="hover:text-white transition">Athlete Stories</a>
            <a href="#impact" className="hover:text-white transition">Our Impact</a>
            <a href="#support" className="hover:text-white transition">Donate / Sponsor</a>
            <a href="#join" className="hover:text-white transition">Tryouts &amp; Join</a>
            <button onClick={() => toast("Thank you for your interest! We will email you our media kit.")} className="text-left hover:text-white transition">Media / Press Kit</button>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/40 max-w-7xl mx-auto px-6">
        © {new Date().getFullYear()} Pines Elite. All rights reserved. A registered 501(c)(3) nonprofit organization. 
        EIN available upon request. Built with pride in Southern Pines, North Carolina.
      </div>
    </footer>
  );
}

// Main Page
export default function PinesEliteSite() {
  return (
    <div className="bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Mission />
      <Program />
      <Athletes />
      <Impact />
      <Support />
      <Join />
      <Footer />
    </div>
  );
}
