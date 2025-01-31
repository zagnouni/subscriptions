import React, { useState } from 'react';
import { ArrowRight, Command, Bell, Calendar, CreditCard, DollarSign, BarChart, Shield, Check, Globe, Laptop, Smartphone, Zap, Clock, Sparkles, Menu, X } from 'lucide-react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const services = [
    { name: 'Netflix', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/netflix.svg' },
    { name: 'Amazon AWS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/amazonaws.svg' },
    { name: 'Spotify', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/spotify.svg' },
    { name: 'Microsoft 365', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/microsoft.svg' },
    { name: 'Adobe CC', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/adobe.svg' },
    { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/googlecloud.svg' },
    { name: 'Apple One', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/apple.svg' },
    { name: 'Disney+', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/disneyplus.svg' },
  ];
  return (
    <HelmetProvider>
    <div className="min-h-screen bg-white">
          <Helmet>
        <title>Bufflio - Never Miss a Subscription Renewal</title>
        <meta
          name="description"
          content="Track all your subscriptions in one place. Get timely reminders before renewals so you can make informed decisions about your digital services. Perfect for nomads!"
        />
        <meta
          name="keywords"
          content="subscription tracker, subscription management, digital nomad tools, subscription reminders, subscription renewal"
        />
        <meta name="author" content="Bufflio Team" />
        <meta property="og:title" content="Bufflio - Never Miss a Subscription Renewal" />
        <meta
          property="og:description"
          content="Track all your subscriptions in one place. Get timely reminders before renewals so you can make informed decisions about your digital services. Perfect for nomads!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bufflio.com" />
        <meta property="og:image" content="https://bufflio.com/og-image.png" />
        <link rel="canonical" href="https://bufflio.com/" />
      </Helmet>
      {/* Community Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-2">
          <Globe className="w-4 h-4" />
          <span>Trusted by the global nomad community 🌍</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <Command className="w-6 h-6" />
              <span className="font-bold text-xl">Bufflio</span>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium">
                #1 Tool for Nomads ✨
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href='https://app.bufflio.com/' className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              Start for free 🚀
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-900">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-4">
              <a href="#features" className="block text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="block text-gray-600 hover:text-gray-900">Pricing</a>
              <a href='https://app.bufflio.com/' className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              Start for free 🚀
              </a>
            </div>
          </div>
        )}
      </nav>


      {/* Hero Section */}
      <section className="pt-10 md:pt-20 pb-16 px-4">
  <div className="max-w-4xl mx-auto text-center">
    {/* Loved by 100K Badge */}
    <div className="mb-6">
      <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full font-medium">
        Loved by 100K+ digital nomads worldwide 🌎
      </span>
    </div>

    {/* Main Heading */}
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
      Never miss a
      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> subscription </span>
      renewal ✨
    </h1>

    {/* Description */}
    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
      Track all your subscriptions in one place. Get timely reminders before renewals so you can make informed decisions about your digital services. Perfect for nomads! 🎯
    </p>

    {/* Single Button */}
    <div className="flex justify-center">
      <a href='https://app.bufflio.com/' className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition flex items-center justify-center">
      Start for free <ArrowRight className="ml-2 w-5 h-5" />
      </a>
    </div>
  </div>
</section>

      {/* Features Section */}
 {/* Features Section */}
<section className="py-20 bg-gray-50" id="features">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="text-center mb-16"
>
  <h2 className="text-3xl font-bold mb-4">Stay in Control 🎮</h2>
  <p className="text-gray-600 max-w-2xl mx-auto">
    Track and manage all your subscriptions with ease. Never be surprised by an auto-renewal again.
  </p>
</motion.div>
    </div>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } }, // Stagger animations
      }}
      className="grid md:grid-cols-3 gap-8"
    >
      <FeatureCard
        icon={<Bell className="w-6 h-6 text-purple-600" />}
        title="Smart Notifications 🔔"
        description="Get timely reminders before any subscription renewal. Choose when and how you want to be notified."
      />
      <FeatureCard
        icon={<Calendar className="w-6 h-6 text-purple-600" />}
        title="Renewal Calendar 📅"
        description="Visual calendar view of all your upcoming renewals. Plan your subscriptions better."
      />
      <FeatureCard
        icon={<CreditCard className="w-6 h-6 text-purple-600" />}
        title="Service Tracking 📊"
        description="Track subscriptions across Netflix, AWS, Spotify, and hundreds of other services."
      />
      <FeatureCard
        icon={<DollarSign className="w-6 h-6 text-purple-600" />}
        title="Spending Insights 💸"
        description="Understand your subscription spending patterns with detailed analytics and reports."
      />
      <FeatureCard
        icon={<Shield className="w-6 h-6 text-purple-600" />}
        title="Security Alerts 🔒"
        description="Get notified if any of your subscription services experience a security breach."
      />
      <FeatureCard
        icon={<Zap className="w-6 h-6 text-purple-600" />}
        title="Quick Actions ⚡"
        description="Easily cancel or pause subscriptions directly from the app with just one click."
      />
    </motion.div>
  </div>
</section>

      {/* Pricing Section */}
      <section className="py-20" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing 💎</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for you. All plans include our core features.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">Free</h3>
                <p className="text-gray-600 mb-4">Perfect for getting started 🚀</p>
                <div className="text-4xl font-bold">$0</div>
                <p className="text-sm text-gray-600">Forever free</p>
              </div>
              <ul className="space-y-4 mb-8">
                <PricingFeature text="Track up to 5 subscriptions" />
                <PricingFeature text="Basic email notifications" />
                <PricingFeature text="Monthly spending summary" />
                <PricingFeature text="Calendar view" />
              </ul>
              <a href="https://app.bufflio.com" className="w-full py-3 px-4 border border-black text-black rounded-lg hover:bg-gray-50 transition text-center block">
                Get Started
               </a>

            </div>

            {/* Pro Tier */}
            <div className="bg-white p-8 rounded-xl border-2 border-purple-500 shadow-lg relative">
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                Popular ⭐️
              </div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <p className="text-gray-600 mb-4">For power users 💪</p>
                <div className="text-4xl font-bold">$9</div>
                <p className="text-sm text-gray-600">per month</p>
              </div>
              <ul className="space-y-4 mb-8">
                <PricingFeature text="Unlimited subscriptions" />
                <PricingFeature text="Advanced notifications (Email, SMS)" />
                <PricingFeature text="Detailed analytics" />
                <PricingFeature text="Spending insights" />
                <PricingFeature text="Custom categories" />
                <PricingFeature text="Priority support" />
              </ul>
              <a href='https://app.bufflio.com' className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                Start Free Trial ✨
              </a>
            </div>

            {/* Team Tier */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">Team</h3>
                <p className="text-gray-600 mb-4">For organizations 🏢</p>
                <div className="text-4xl font-bold">$29</div>
                <p className="text-sm text-gray-600">per month</p>
              </div>
              <ul className="space-y-4 mb-8">
                <PricingFeature text="Everything in Pro" />
                <PricingFeature text="Team collaboration" />
                <PricingFeature text="Role-based access" />
                <PricingFeature text="Approval workflows" />
                <PricingFeature text="API access" />
                <PricingFeature text="24/7 phone support" />
              </ul>
              <button className="w-full py-3 px-4 border border-black text-black rounded-lg hover:bg-gray-50 transition">
                Contact Sales 👋
              </button>
            </div>
          </div>
        </div>
      </section>

     {/* Stats Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-3 gap-8">
      {/* Stat 1: Yearly Savings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition"
      >
        <div className="text-center">
          <DollarSign className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-5xl font-bold mb-2">$240</h3>
          <p className="text-gray-600">Average yearly savings per user 💰</p>
        </div>
      </motion.div>

      {/* Stat 2: Subscriptions Managed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition"
      >
        <div className="text-center">
          <BarChart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-5xl font-bold mb-2">15+</h3>
          <p className="text-gray-600">Subscriptions managed on average 📈</p>
        </div>
      </motion.div>

      {/* Stat 3: Active Users */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition"
      >
        <div className="text-center">
          <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-5xl font-bold mb-2">10K+</h3>
          <p className="text-gray-600">Active users worldwide 🌍</p>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Feature Image Section 1 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Track Anywhere, Anytime 🌍</h2>
              <div className="space-y-6">
                <FeatureItem
                  icon={<Laptop className="w-5 h-5 text-purple-600" />}
                  title="Cross-Platform Sync"
                  description="Access your subscriptions from any device - desktop, mobile, or tablet."
                />
                <FeatureItem
                  icon={<Smartphone className="w-5 h-5 text-purple-600" />}
                  title="Mobile App"
                  description="Get instant notifications and manage subscriptions on the go."
                />
                <FeatureItem
                  icon={<Zap className="w-5 h-5 text-purple-600" />}
                  title="Offline Support"
                  description="View your subscriptions even without internet connection."
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800"
                alt="Dashboard Preview"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-4 rounded-lg">
                <Clock className="w-6 h-6" />
                <p className="mt-2 font-semibold">Real-time Updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Image Section 2 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="Analytics Preview"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 bg-black text-white p-4 rounded-lg">
                <Sparkles className="w-6 h-6" />
                <p className="mt-2 font-semibold">Smart Analytics</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Smart Insights for Better Decisions 📊</h2>
              <div className="space-y-6">
                <FeatureItem
                  icon={<BarChart className="w-5 h-5 text-purple-600" />}
                  title="Spending Analytics"
                  description="Visualize your subscription spending patterns and identify areas for optimization."
                />
                <FeatureItem
                  icon={<DollarSign className="w-5 h-5 text-purple-600" />}
                  title="Cost Predictions"
                  description="Get AI-powered predictions about your future subscription costs."
                />
                <FeatureItem
                  icon={<Shield className="w-5 h-5 text-purple-600" />}
                  title="Budget Alerts"
                  description="Set budget limits and get notified when you're approaching them."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Loved by Digital Nomads ❤️</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of remote workers who trust Bufflio to manage their subscriptions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
              name="Sarah Chen"
              role="Digital Nomad"
              location="Currently in Bali 🌴"
              quote="Bufflio has saved me hundreds of dollars by reminding me of subscriptions I no longer needed. Perfect for my nomadic lifestyle!"
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
              name="Mark Thompson"
              role="Remote Developer"
              location="Working from Portugal 🇵🇹"
              quote="As someone managing multiple AWS services, Bufflio helps me stay on top of all my cloud spending. It's a game-changer!"
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
              name="Emma Rodriguez"
              role="Content Creator"
              location="Exploring Asia 🌏"
              quote="The best tool for managing my creative subscriptions. Clean interface and timely notifications - exactly what I needed!"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
 {/* Services Section */}
 {/* Services Section */}
<section className="py-20" id="services">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Track Any Service 🎯</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Support for hundreds of subscription services, from streaming to cloud services.
      </p>
    </div>

    {/* Swiper Carousel */}
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={4}
      autoplay={{
        delay: 0, // No delay between slides
        disableOnInteraction: false, // Continue autoplay even after user interaction
      }}
      speed={3000} // Adjust scrolling speed (in milliseconds)
      loop={true} // Enable infinite loop
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 20 }, // Mobile
        768: { slidesPerView: 3, spaceBetween: 30 }, // Tablet
        1024: { slidesPerView: 4, spaceBetween: 40 }, // Desktop
      }}
    >
      {services.map((service) => (
        <SwiperSlide key={service.name}>
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition flex items-center space-x-4">
            <img
              src={service.logo}
              alt={service.name}
              className="w-10 h-10" // Adjust logo size
            />
            <p className="font-semibold">{service.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Command className="w-6 h-6" />
                <span className="font-bold text-xl">Bufflio</span>
              </div>
              <p className="text-gray-600">
                Never miss a subscription renewal again ✨
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Features</a></li>
                <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="hover:text-gray-900">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2025 Bufflio. All rights reserved. Made with ❤️ for the nomad community</p>
          </div>
        </div>
      </footer>
    </div>
    </HelmetProvider>

  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
      whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and in place
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.5, ease: "easeOut" }} // Animation duration and easing
      className="bg-white p-8 rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function PricingFeature({ text }: { text: string }) {
  return (
    <li className="flex items-center space-x-3">
      <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
      <span className="text-gray-600">{text}</span>
    </li>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-purple-100 p-2 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ image, name, role, location, quote }: { 
  image: string; 
  name: string; 
  role: string; 
  location: string;
  quote: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition">
      <div className="flex items-center space-x-4 mb-6">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-gray-600 text-sm">{role}</p>
          <p className="text-purple-600 text-sm">{location}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  );
}

export default App;