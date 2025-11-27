import { Activity, Shield, Clock, Users, Zap, ChartLine } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "Continuous patient data tracking with instant alerts for critical changes in vital signs."
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security ensuring complete protection of sensitive patient information."
  },
  {
    icon: Clock,
    title: "24/7 Operation",
    description: "Reliable round-the-clock performance with 99.9% uptime guarantee for mission-critical care."
  },
  {
    icon: Users,
    title: "Multi-User Access",
    description: "Seamless collaboration across healthcare teams with role-based access control."
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Quick deployment with minimal training required, operational within hours."
  },
  {
    icon: ChartLine,
    title: "Advanced Analytics",
    description: "AI-powered insights and predictive analytics to support clinical decision-making."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            Powerful Features for Modern Healthcare
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our medical device combines cutting-edge technology with user-friendly design to deliver exceptional patient care.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
