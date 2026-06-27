import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import logo from '../../assets/newlogo.png';
import { SITE_CONFIG } from '../../constants';

// ─────────────────────────────────────────────────────────────────────────────
// Connected Platform Architecture — pure SVG + Framer Motion
// ─────────────────────────────────────────────────────────────────────────────

const MODULE_NODES = [
  { id: 'crm',       label: 'CRM',       angle: -90,  radius: 155 },
  { id: 'inventory', label: 'Inventory', angle: -30,  radius: 155 },
  { id: 'finance',   label: 'Finance',   angle:  30,  radius: 155 },
  { id: 'hr',        label: 'HR',        angle:  90,  radius: 155 },
  { id: 'projects',  label: 'Projects',  angle:  150, radius: 155 },
  { id: 'marketing', label: 'Marketing', angle: -150, radius: 155 },
];

function toXY(angle: number, radius: number, cx: number, cy: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
}

interface PacketProps {
  pathString: string;
  delay: number;
  duration: number;
}

function DataPacket({ pathString, delay, duration }: PacketProps) {
  return (
    <motion.circle
      r={2.5}
      fill="#6366f1"
      opacity={0.7}
      initial={{ offsetDistance: '0%' }}
      animate={{ offsetDistance: ['0%', '100%'] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: duration * 2 + delay * 0.3,
        ease: 'easeInOut',
      }}
      style={{
        offsetPath: `path("${pathString}")`,
        offsetRotate: '0deg',
      } as React.CSSProperties}
    />
  );
}

function PlatformGraph() {
  const cx = 240;
  const cy = 240;

  const nodes = MODULE_NODES.map((n) => {
    const { x, y } = toXY(n.angle, n.radius, cx, cy);
    // Subtle bezier curve control point calculation
    const midX = (cx + x) / 2;
    const midY = (cy + y) / 2;
    const perpAngle = n.angle - 25;
    const qRadius = n.radius * 0.2;
    const { x: qx, y: qy } = toXY(perpAngle, qRadius, midX, midY);
    
    return {
      ...n,
      x, y,
      path: `M ${cx} ${cy} Q ${qx} ${qy} ${x} ${y}`,
      returnPath: `M ${x} ${y} Q ${qx} ${qy} ${cx} ${cy}`
    };
  });

  return (
    <svg
      viewBox="0 0 480 480"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        {/* Subtle radial bg gradient */}
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
        </radialGradient>
        {/* Center node gradient */}
        <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4338ca" />
        </radialGradient>
        {/* Module node fill */}
        <radialGradient id="nodeGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </radialGradient>
      </defs>

      {/* Very faint background circle */}
      <circle cx={cx} cy={cy} r={190} fill="url(#bgGrad)" />

      {/* Orbit ring */}
      <motion.circle
        cx={cx} cy={cy} r={155}
        fill="none"
        stroke="#6366f1"
        strokeWidth={0.5}
        strokeDasharray="4 8"
        opacity={0.2}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        style={{ originX: `${cx}px`, originY: `${cy}px` }}
      />

      {/* Connection lines from center to each module */}
      {nodes.map((n, idx) => (
        <g key={`line-${n.id}`}>
          <path
            d={n.path}
            stroke="#6366f1"
            fill="none"
            strokeWidth={0.75}
            strokeDasharray="3 6"
            opacity={0.18}
          />
          {/* Animated data packets — one per edge, staggered */}
          <DataPacket
            pathString={n.path}
            delay={idx * 1.4}
            duration={4.5}
          />
          {/* Return packet */}
          <DataPacket
            pathString={n.returnPath}
            delay={idx * 1.4 + 2.2}
            duration={4.5}
          />
        </g>
      ))}

      {/* Module nodes */}
      {nodes.map((n) => (
        <motion.g
          key={n.id}
          animate={{ y: [0, n.angle < 0 ? -3 : 3, 0] }}
          transition={{ duration: 6 + (n.radius % 3), repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Node circle */}
          <circle cx={n.x} cy={n.y} r={28} fill="url(#nodeGrad)" stroke="#e2e8f0" strokeWidth={1} />
          {/* Node label */}
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            fontSize="9"
            fontWeight="600"
            fill="#475569"
            fontFamily="'Geist Variable', sans-serif"
            letterSpacing="0.5"
          >
            {n.label}
          </text>
          {/* Small status dot */}
          <circle cx={n.x + 20} cy={n.y - 20} r={4} fill="#10b981" opacity={0.9} />
        </motion.g>
      ))}

      {/* Center node — Connected Platform */}
      <motion.g
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ originX: `${cx}px`, originY: `${cy}px` }}
      >
        {/* Outer glow ring */}
        <circle cx={cx} cy={cy} r={48} fill="#6366f1" opacity={0.06} />
        <circle cx={cx} cy={cy} r={40} fill="url(#centerGrad)" />
        {/* Platform label */}
        <text
          x={cx}
          y={cy - 4}
          textAnchor="middle"
          fontSize="8"
          fontWeight="700"
          fill="white"
          fontFamily="'Geist Variable', sans-serif"
          letterSpacing="0.8"
        >
          CONNECTED
        </text>
        <text
          x={cx}
          y={cy + 9}
          textAnchor="middle"
          fontSize="8"
          fontWeight="700"
          fill="white"
          fontFamily="'Geist Variable', sans-serif"
          letterSpacing="0.8"
        >
          PLATFORM
        </text>
      </motion.g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Login Form
// ─────────────────────────────────────────────────────────────────────────────

const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string; form?: string }>({});
  
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Autofocus email input safely without breaking password managers
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    let hasErrors = false;
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = "Business Email is required.";
      hasErrors = true;
    }
    
    if (!password) {
      newErrors.password = "Password is required.";
      hasErrors = true;
    }
    
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate auth rejection
    setTimeout(() => {
      setErrors({ form: "Invalid email or password. Please try again." });
      setIsSubmitting(false);
    }, 1600);
  };

  return (
    <div className="min-h-screen flex bg-[#f8f7f4]">

      {/* ── LEFT PANEL: Login Form ────────────────────────────── */}
      <div className="relative flex w-full flex-col lg:w-[42%] bg-white border-r border-stone-200/80 shadow-[1px_0_20px_rgba(0,0,0,0.04)]">

        {/* Back to Website — top-left */}
        <div className="absolute top-6 left-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-400 hover:text-stone-700 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Website
          </Link>
        </div>

        {/* Centered form container */}
        <div className="flex flex-1 items-center justify-center px-8 sm:px-14 xl:px-16 py-20">
          <div className="w-full max-w-[340px]">

            <motion.div
              variants={formVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Logo */}
              <motion.div variants={itemVariants} className="mb-10 flex items-center gap-2.5">
                <img
                  src={logo}
                  alt={SITE_CONFIG.name}
                  className="h-8 w-auto"
                />
                <span className="text-xl font-black tracking-tight text-stone-900">
                  {SITE_CONFIG.name}
                </span>
              </motion.div>

              {/* Heading */}
              <motion.div variants={itemVariants} className="mb-8">
                <h1 className="text-[1.6rem] font-extrabold tracking-tight text-stone-900 mb-1.5">
                  Welcome back
                </h1>
                <p className="text-sm text-stone-500 font-medium">
                  Sign in to your workspace to continue.
                </p>
              </motion.div>

              {/* Form */}
              <motion.form
                variants={formVariants}
                onSubmit={handleSubmit}
                className="space-y-4"
                noValidate
              >
                {/* Form Level Error */}
                {errors.form && (
                  <motion.div variants={itemVariants} className="rounded-md bg-red-50 p-3 mb-2 border border-red-100" role="alert">
                    <p className="text-xs font-bold text-red-600 text-center">
                      {errors.form}
                    </p>
                  </motion.div>
                )}

                {/* Email */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-stone-600 mb-1.5 uppercase tracking-wide"
                  >
                    Business Email
                  </label>
                  <div className="relative">
                    <Mail
                      className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none transition-colors ${errors.email || errors.form ? 'text-red-400' : 'text-stone-400'}`}
                      aria-hidden="true"
                    />
                    <input
                      ref={emailRef}
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      aria-invalid={!!errors.email || !!errors.form}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      placeholder="name@company.com"
                      className={`w-full rounded-md border bg-stone-50 py-2.5 pl-9 pr-3.5 text-sm text-stone-900 placeholder-stone-400 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.email || errors.form 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500/15' 
                          : 'border-stone-200 focus:border-indigo-500 focus:ring-indigo-500/15 hover:border-stone-300'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs font-semibold text-red-500" role="alert">
                      {errors.email}
                    </p>
                  )}
                </motion.div>

                {/* Password */}
                <motion.div variants={itemVariants}>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="password"
                      className="block text-xs font-bold text-stone-600 uppercase tracking-wide"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors focus:outline-none focus:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock
                      className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none transition-colors ${errors.password || errors.form ? 'text-red-400' : 'text-stone-400'}`}
                      aria-hidden="true"
                    />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      aria-invalid={!!errors.password || !!errors.form}
                      aria-describedby={errors.password ? "password-error" : undefined}
                      placeholder="••••••••••"
                      className={`w-full rounded-md border bg-stone-50 py-2.5 pl-9 pr-10 text-sm text-stone-900 placeholder-stone-400 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.password || errors.form 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500/15' 
                          : 'border-stone-200 focus:border-indigo-500 focus:ring-indigo-500/15 hover:border-stone-300'
                      }`}
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors focus:outline-none"
                    >
                      {showPassword
                        ? <EyeOff className="h-4 w-4" />
                        : <Eye className="h-4 w-4" />
                      }
                    </button>
                  </div>
                  {errors.password && (
                    <p id="password-error" className="mt-1.5 text-xs font-semibold text-red-500" role="alert">
                      {errors.password}
                    </p>
                  )}
                </motion.div>

                {/* Remember me */}
                <motion.div variants={itemVariants} className="flex items-center pt-0.5">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-3.5 w-3.5 rounded-sm border-stone-300 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-0 cursor-pointer"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 text-sm font-medium text-stone-500 cursor-pointer select-none"
                  >
                    Keep me signed in
                  </label>
                </motion.div>

                {/* Submit */}
                <motion.div variants={itemVariants} className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ translateY: -1, boxShadow: '0 6px 20px rgba(99,102,241,0.25)' }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.15 }}
                    className="w-full flex justify-center items-center gap-2 rounded-md bg-indigo-600 py-2.5 px-4 text-sm font-bold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Authenticating…
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>

              {/* Support footer */}
              <motion.div
                variants={itemVariants}
                className="mt-8 pt-7 border-t border-stone-100 text-center"
              >
                <p className="text-xs text-stone-400 font-medium">
                  Need help?{' '}
                  <a
                    href="mailto:support@cakiweb.com"
                    className="text-stone-600 font-bold hover:text-indigo-600 transition-colors"
                  >
                    Contact Administrator
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL: Connected Platform Architecture ──────── */}
      <div className="hidden lg:flex lg:flex-1 flex-col items-center justify-center bg-[#f8f7f4] relative overflow-hidden">

        {/* Very subtle dot-grid background */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #1e1b4b 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Faint corner gradients */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-200/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        {/* Graph */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="relative z-10 w-[420px] h-[420px]"
        >
          <PlatformGraph />
        </motion.div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="relative z-10 mt-8 text-center"
        >
          <p className="text-xs font-semibold text-stone-400 tracking-widest uppercase">
            Every department. One platform.
          </p>
        </motion.div>
      </div>

    </div>
  );
}
