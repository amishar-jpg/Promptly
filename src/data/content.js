export const features = [
  {
    id: 1,
    icon: '✍️',
    title: 'AI-Powered Writing',
    description: 'Generate any text instantly with advanced AI algorithms tailored to your needs.',
  },
  {
    id: 2,
    icon: '📄',
    title: 'Templates Library',
    description: 'Pre-built structures for blogs, ads, captions, and more to kickstart your content.',
  },
  {
    id: 3,
    icon: '⚙️',
    title: 'Smart Editing',
    description: 'Rewrite and optimize automatically with intelligent suggestions and improvements.',
  },
  {
    id: 4,
    icon: '🌍',
    title: 'Multilingual Output',
    description: 'Create content in 25+ languages with native-level quality and cultural awareness.',
  },
];

export const pricingPlans = [
  {
    id: 1,
    name: 'Basic',
    price: { monthly: 10, yearly: 96 },
    description: 'For starters',
    features: [
      '10,000 words/month',
      'Basic templates',
      'Email support',
      '5 languages',
    ],
    popular: false,
  },
  {
    id: 2,
    name: 'Pro',
    price: { monthly: 25, yearly: 240 },
    description: 'For growing creators',
    features: [
      '100,000 words/month',
      'All templates',
      'Priority support',
      '25+ languages',
      'API access',
      'Team collaboration',
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: { monthly: 60, yearly: 576 },
    description: 'For teams and agencies',
    features: [
      'Unlimited words',
      'Custom templates',
      'Dedicated support',
      'All languages',
      'Advanced API',
      'Custom integrations',
      'White label option',
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'Content Creator',
    avatar: '👩‍💼',
    quote: 'Promptly has revolutionized my content creation workflow. I can now produce high-quality articles in half the time!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Marketing Director',
    avatar: '👨‍💻',
    quote: 'The multilingual feature is a game-changer. We can now reach global audiences with authentic, localized content.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'Freelance Writer',
    avatar: '👩‍🎨',
    quote: 'The templates library saves me hours of planning. I just pick a template, customize it, and I\'m done!',
  },
  {
    id: 4,
    name: 'David Park',
    company: 'Agency Owner',
    avatar: '👨‍💼',
    quote: 'Our team productivity has increased by 300%. Promptly is an essential tool for any content-focused business.',
  },
  {
    id: 5,
    name: 'Jessica Williams',
    company: 'Blogger',
    avatar: '👩',
    quote: 'I was skeptical at first, but the AI quality is incredible. It understands context and tone perfectly.',
  },
];
