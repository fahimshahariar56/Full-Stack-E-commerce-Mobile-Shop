import React from 'react';
import { ShoppingBag } from 'lucide-react';
import Button from '@/components/common/Button';
import { Link } from 'react-router-dom';

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
      <div className="w-16 h-16 rounded-3xl bg-brand-500/10 text-brand-600 dark:text-cyan-400 mx-auto flex items-center justify-center">
        <ShoppingBag className="w-8 h-8" />
      </div>
      <h1 className="text-3xl font-bold">Catalog & Collections</h1>
      <p className="text-slate-500 max-w-md mx-auto text-sm">
        Our curated mobile accessories catalog is scheduled for Day 8 & Day 9 implementation.
      </p>
      <Link to="/" className="inline-block pt-4">
        <Button variant="secondary" size="md">Return to Home</Button>
      </Link>
    </div>
  );
}
