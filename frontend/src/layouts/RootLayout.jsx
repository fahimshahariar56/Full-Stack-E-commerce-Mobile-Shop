import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  User, 
  Menu, 
  X, 
  ShieldCheck, 
  Truck, 
  Headphones, 
  Zap,
  ArrowRight
} from 'lucide-react';
import ThemeToggle from '@/components/common/ThemeToggle';
import Button from '@/components/common/Button';

export default function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Announcement Bar */}
      {announcementVisible && (
        <aside aria-label="Announcement" className="bg-slate-950 text-slate-300 dark:bg-black dark:text-slate-400 text-xs py-2 px-4 border-b border-slate-800 transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 mx-auto sm:mx-0">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <p>Free Express Delivery inside Dhaka on orders over ৳1,500. Cash on Delivery & bKash / Nagad available.</p>
            </div>
            <button
              type="button"
              onClick={() => setAnnouncementVisible(false)}
              className="text-slate-400 hover:text-white transition-colors hidden sm:block p-1"
              aria-label="Dismiss announcement"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      )}

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/80 dark:bg-surface-dark/80 border-b border-slate-200/70 dark:border-slate-800/70 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo */}
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center text-white shadow-glow-brand group-hover:scale-105 transition-transform">
                  <Zap className="w-5 h-5 fill-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                    AURA
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-600 dark:text-cyan-400 -mt-1">
                    Accessories
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                <Link to="/shop" className="hover:text-brand-600 dark:hover:text-cyan-400 transition-colors">
                  Shop All
                </Link>
                <Link to="/categories/chargers" className="hover:text-brand-600 dark:hover:text-cyan-400 transition-colors">
                  Chargers & Power
                </Link>
                <Link to="/categories/cases" className="hover:text-brand-600 dark:hover:text-cyan-400 transition-colors">
                  Cases & Shields
                </Link>
                <Link to="/categories/audio" className="hover:text-brand-600 dark:hover:text-cyan-400 transition-colors">
                  Audio Gear
                </Link>
                <Link to="/categories/cables" className="hover:text-brand-600 dark:hover:text-cyan-400 transition-colors">
                  Smart Cables
                </Link>
              </nav>
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Button */}
              <button
                type="button"
                aria-label="Search accessories"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Icon */}
              <Link
                to="/wishlist"
                aria-label="Wishlist"
                className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden sm:flex"
              >
                <Heart className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500"></span>
              </Link>

              {/* Cart Icon */}
              <Link
                to="/cart"
                aria-label="Shopping Cart"
                className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="ml-1 text-xs font-semibold px-1.5 py-0.5 rounded-full bg-brand-600 text-white">
                  0
                </span>
              </Link>

              {/* Account */}
              <Link
                to="/account/login"
                aria-label="Account Login"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden sm:flex"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Theme Toggle */}
              <ThemeToggle showLabel={false} />

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors md:hidden"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-fade-in">
            <Link
              to="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 dark:text-slate-200 hover:text-brand-600"
            >
              Shop All
            </Link>
            <Link
              to="/categories/chargers"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 dark:text-slate-200 hover:text-brand-600"
            >
              Chargers & Power Banks
            </Link>
            <Link
              to="/categories/cases"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 dark:text-slate-200 hover:text-brand-600"
            >
              Cases & Protection
            </Link>
            <Link
              to="/categories/audio"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 dark:text-slate-200 hover:text-brand-600"
            >
              Audio Gear
            </Link>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <Link
                to="/account/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-brand-600 dark:text-cyan-400"
              >
                Sign In / Register
              </Link>
              <Link
                to="/admin/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              >
                Admin Portal
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Outlet */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Premium Footer */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
            {/* Column 1: Brand & Philosophy */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center text-white">
                  <Zap className="w-4 h-4 fill-white" />
                </div>
                <span className="text-lg font-bold text-white tracking-tight">AURA ACCESSORIES</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Precision-engineered mobile accessories built for durability, speed, and refined aesthetics. Designed to elevate your daily digital lifestyle.
              </p>
            </div>

            {/* Column 2: Categories */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/categories/chargers" className="hover:text-white transition-colors">Fast Chargers</Link></li>
                <li><Link to="/categories/powerbanks" className="hover:text-white transition-colors">Wireless Power Banks</Link></li>
                <li><Link to="/categories/cables" className="hover:text-white transition-colors">Braided Type-C & Lightning</Link></li>
                <li><Link to="/categories/cases" className="hover:text-white transition-colors">MagSafe Cases</Link></li>
                <li><Link to="/categories/audio" className="hover:text-white transition-colors">ANC Earphones & Buds</Link></li>
              </ul>
            </div>

            {/* Column 3: Customer Care */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Customer Experience</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/order-tracking" className="hover:text-white transition-colors">Track Order</Link></li>
                <li><Link to="/shipping-policy" className="hover:text-white transition-colors">Shipping & Delivery</Link></li>
                <li><Link to="/returns" className="hover:text-white transition-colors">Warranty & Returns</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              </ul>
            </div>

            {/* Column 4: Trust & Admin */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Guaranteed Quality</h4>
              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Genuine Certified Accessories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-cyan-400" />
                  <span>Fast Delivery Across Bangladesh</span>
                </div>
              </div>
              <div className="pt-2">
                <Link to="/admin/login">
                  <Button variant="outline" size="sm" className="text-xs border-slate-800 text-slate-400 hover:text-white">
                    Admin Portal
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} AURA Accessories Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-slate-400">Terms of Service</Link>
              <Link to="/refund" className="hover:text-slate-400">Refund Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
