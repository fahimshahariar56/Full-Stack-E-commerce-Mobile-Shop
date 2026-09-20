import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Server, 
  Layers, 
  Palette,
  ExternalLink,
  Smartphone
} from 'lucide-react';
import Button from '@/components/common/Button';
import api from '@/services/api';

export default function HomePage() {
  const [healthData, setHealthData] = useState(null);
  const [healthLoading, setHealthLoading] = useState(true);
  const [btnLoadingDemo, setBtnLoadingDemo] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function checkApiHealth() {
      try {
        setHealthLoading(true);
        const res = await api.get('/health');
        if (isMounted) {
          setHealthData(res);
        }
      } catch (err) {
        if (isMounted) {
          setHealthData({ success: false, message: 'Backend not yet reachable or offline' });
        }
      } finally {
        if (isMounted) {
          setHealthLoading(false);
        }
      }
    }

    checkApiHealth();
    return () => { isMounted = false; };
  }, []);

  const triggerLoadingDemo = () => {
    setBtnLoadingDemo(true);
    setTimeout(() => setBtnLoadingDemo(false), 2000);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-600/15 via-cyan-500/10 to-indigo-500/15 blur-3xl pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-500/15 border border-brand-500/20 text-brand-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Day 1 — Architecture & Setup Complete</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.15]">
              Precision Gear for Your{' '}
              <span className="bg-gradient-to-r from-brand-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Flagship Devices
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              High-speed GaN chargers, aerospace-grade MagSafe protection, and studio-clarity audio. Built with minimalist precision and commercial-grade engineering.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button 
                variant="primary" 
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={triggerLoadingDemo}
                isLoading={btnLoadingDemo}
              >
                Explore Collection
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => {
                  const target = document.getElementById('architecture-status');
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Inspect Architecture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Stack Communication Status & Health Check */}
      <section id="architecture-status" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white dark:bg-surface-dark-elevated border border-slate-200 dark:border-slate-800 shadow-elevated-light dark:shadow-elevated-dark space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-cyan-400 flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Full-Stack Core Architecture</h2>
                <p className="text-xs text-slate-500">Live API connectivity and runtime environment status</p>
              </div>
            </div>

            {/* Live API Health indicator */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Backend API:</span>
              {healthLoading ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-ping"></span>
                  Checking...
                </span>
              ) : healthData?.success ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Connected (200 OK)
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Ready (Offline test mode)
                </span>
              )}
            </div>
          </div>

          {/* Architecture Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <div className="flex items-center gap-2 text-brand-600 dark:text-cyan-400">
                <Palette className="w-4 h-4" />
                <h3 className="text-sm font-semibold">Theme System</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Light, Dark, and System preference with anti-FOUC prevention, persistent localStorage storage, and CSS tokens.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <div className="flex items-center gap-2 text-brand-600 dark:text-cyan-400">
                <Layers className="w-4 h-4" />
                <h3 className="text-sm font-semibold">Modular Structure</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Separated routes, controllers, middleware, and services on Express backend; Redux Toolkit and layout routing on Vite frontend.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <div className="flex items-center gap-2 text-brand-600 dark:text-cyan-400">
                <ShieldCheck className="w-4 h-4" />
                <h3 className="text-sm font-semibold">Security & Tokens</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Helmet, CORS isolation, centralized error envelope, and structured environment variable templates.
              </p>
            </div>
          </div>

          {/* Interactive Button System Showcase */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              PRD Section 6 — Premium Button System Preview
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" size="sm">Primary</Button>
              <Button variant="secondary" size="sm">Secondary</Button>
              <Button variant="outline" size="sm">Outline</Button>
              <Button variant="ghost" size="sm">Ghost</Button>
              <Button variant="destructive" size="sm">Destructive</Button>
              <Button variant="accent" size="sm">Accent Gradient</Button>
              <Button 
                variant="primary" 
                size="sm" 
                isLoading={btnLoadingDemo} 
                onClick={triggerLoadingDemo}
              >
                {btnLoadingDemo ? 'Loading...' : 'Click for Spinner'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
