export const theme = {
  colors: {
    primary: {
      // deep background
      from: '#1a1a1d',
      to: '#2D2D34',
    },
    accent: {
      // Twitter Blue with contrast
      from: '#1DA1F2',
      to: '#0C7ABF',
    },
    background: {
      // Dark theme
      dark: '#121214',
      // Light theme 
      light: '#FAFAFA',
    },
    text: {
      // High contrast text colors
      primary: '#FFFFFF',
      secondary: '#A3A3A3',
      accent: '#1DA1F2',
    },
    card: {
      // Card backgrounds with contrast
      background: 'rgba(32, 32, 36, 0.95)',
      border: 'rgba(66, 153, 225, 0.2)',
    },
    status: {
      // Success/Error states with contrast
      success: '#4CAF50',
      error: '#DC2626',
      warning: '#F59E0B',
      info: '#0EA5E9',
    },
    // Gradients
    gradients: {
      brand: 'linear-gradient(135deg, #1DA1F2 0%, #0C7ABF 100%)',
      accent: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
      highlight: 'linear-gradient(135deg, #F472B6 0%, #EC4899 100%)',
    }
  },
  shadows: {
    // Shadow system
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
    highlight: '0 0 20px rgba(29, 161, 242, 0.2)',
  },
  effects: {
    glassMorphism: {
      background: 'rgba(32, 32, 36, 0.8)',
      backdropFilter: 'blur(8px)',
    },
    glow: {
      // Glow effects
      primary: '0 0 20px rgba(29, 161, 242, 0.2)',
      accent: '0 0 20px rgba(124, 58, 237, 0.2)',
    }
  }
};