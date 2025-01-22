import React, { useState, useEffect } from 'react';
import { Shield, Activity, Server, AlertCircle } from 'lucide-react';

const stats = [
  {
    id: 1,
    label: 'Threats Mitigated',
    value: 120457,
    icon: Shield,
    gradient: 'from-indigo-300 to-purple-100',
    accent: 'bg-purple-800',
    growthRate: '+28.4%',
    description: 'Increase in blocked threats'
  },
  {
    id: 2,
    label: 'Network Traffic',
    value: 987654321,
    icon: Activity,
    gradient: 'from-cyan-200 to-blue-100',
    accent: 'bg-blue-800',
    growthRate: '+14.7%',
    description: 'Total bytes processed'
  },
  {
    id: 3,
    label: 'Server Load',
    value: 123456789,
    icon: Server,
    gradient: 'from-emerald-300 to-teal-100',
    accent: 'bg-emerald-800',
    growthRate: '+32.1%',
    description: 'Average response time'
  },
  {
    id: 4,
    label: 'Critical Events',
    value: 3456,
    icon: AlertCircle,
    gradient: 'from-orange-200 to-red-400',
    accent: 'bg-red-600',
    growthRate: '-18.3%',
    description: 'Reduction in incidents'
  }
];

const AnimatedCounter = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let frameId: number;
    const startTime = performance.now();
    
    const updateCount = () => {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuint = 1 - Math.pow(1 - progress, 5);
      const currentValue = Math.floor(easeOutQuint * value);
      
      setCount(currentValue);
      
      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount);
      }
    };
    
    frameId = requestAnimationFrame(updateCount);
    
    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [value, duration]);

  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(count);
};

interface Stat {
  id: number;
  label: string;
  value: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
  accent: string;
  growthRate: string;
  description: string;
}

const StatCard = ({ stat }: { stat: Stat }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = stat.icon;
  const isPositive = !stat.growthRate.startsWith('-');

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 
        group-hover:opacity-100 blur-xl transition-opacity duration-700
      `} />
      
      <div className={`
        relative h-full backdrop-blur-md bg-white/10 
        rounded-2xl border border-white/20 p-6
        transition-all duration-500 group-hover:scale-[1.02]
        hover:shadow-[0_0_40px_rgba(0,0,0,0.1)]
      `}>
        <div className="flex items-start justify-between mb-6">
          <div className={`
            p-3 rounded-xl bg-gradient-to-br ${stat.gradient}
            shadow-lg transform transition-transform duration-500
            group-hover:scale-110 group-hover:-rotate-3
          `}>
            <Icon className="h-6 w-6 text-white" strokeWidth={2} />
          </div>
          
          <div className={`
            px-3 py-1 rounded-full text-sm font-medium
            ${isPositive ? 'text-emerald-500 bg-emerald-500/10' : 'text-rose-500 bg-rose-500/10'}
            transition-all duration-500 group-hover:scale-105
          `}>
            {stat.growthRate}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600">
          {stat.label}
        </h3>

        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-4xl font-bold tracking-tight text-gray-900">
            <AnimatedCounter value={stat.value} />
          </span>
        </div>

        <p className="text-sm text-gray-500">
          {stat.description}
        </p>

        <div className="mt-4 h-1.5 w-full  rounded-full overflow-hidden">
          <div 
            className={`h-full ${stat.accent} transition-all duration-700 ease-out-expo`}
            style={{
              width: isHovered ? '100%' : '40%',
              transition: 'width 0.7s cubic-bezier(0.87, 0, 0.13, 1)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Statistics = () => {
  return (
    <div className="mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            System Performance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-time metrics and insights from your infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;