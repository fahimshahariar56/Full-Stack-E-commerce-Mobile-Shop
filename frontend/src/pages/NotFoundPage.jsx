import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';

export default function NotFoundPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center space-y-4">
      <span className="text-6xl font-black text-brand-600 dark:text-cyan-400">404</span>
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="text-slate-500 text-sm">
        The page you are looking for doesn't exist or has been relocated.
      </p>
      <div className="pt-4">
        <Link to="/">
          <Button variant="primary" size="md">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
