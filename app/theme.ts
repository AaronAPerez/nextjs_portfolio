export const theme = {
    colors: {
      primary: {
        from: '#0F172A',  // Deep navy
        to: '#1E293B',    // Rich slate
      },
      accent: {
        from: '#3B82F6',  // Electric blue
        to: '#2563EB',    // Royal blue
      },
        background: {
        dark: '#020617',  // Near black
        light: '#F8FAFC',
      },
      text: {
        primary: '#F8FAFC',
        secondary: '#64748B',
        accent: '#3B82F6',
      },
      card: {
        background: 'rgba(15, 23, 42, 0.9)',
        border: 'rgba(59, 130, 246, 0.2)',
      },
    },
    gradients: {
      primary: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      accent: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
      card: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
      glow: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
    },
    shadows: {
      card: '0 4px 20px rgba(15, 23, 42, 0.5)',
      button: '0 4px 12px rgba(59, 130, 246, 0.3)',
      glow: '0 0 40px rgba(59, 130, 246, 0.2)',
    },
    effects: {
      glassMorphism: {
        background: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(12px)',
      },
      neonGlow: {
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
      }
    }
  };