export const resourcesData = {
  'farmers-guide': {
    title: "Farmer's Guide",
    subtitle: 'Your comprehensive resource for modern, smart, and sustainable agriculture.',
    headerImage: '/images/farming_hero_image_1778760478639.png',
    sections: [
      {
        type: 'intro',
        badge: 'Step-by-Step Guide',
        title: 'Starting Your Farming Journey',
        text: 'Transitioning to modern farming requires a blend of traditional wisdom and technological innovation.',
        image: '/images/about_farming_image_1778760561226.png',
        items: [
          { title: 'Land & Soil Analysis', desc: "Begin by testing your soil's pH and nutrient levels.", icon: 'map-marked-alt' },
          { title: 'Irrigation Planning', desc: 'Implement drip systems to conserve water.', icon: 'tint' },
          { title: 'Pest Management', desc: 'Use biological controls and organic pesticides.', icon: 'bug' },
        ]
      },
      {
        type: 'grid',
        badge: 'Modern Techniques',
        title: 'Smart Farming Solutions',
        items: [
          { title: 'Precision Agriculture', desc: 'Using GPS and IoT sensors to monitor crop health.' },
          { title: 'Organic Certification', desc: 'Process of making your farm 100% organic.' },
          { title: 'Vertical Farming', desc: 'Maximizing yield in limited spaces.' },
        ]
      }
    ]
  },
  'market-prices': {
    title: 'Market Prices',
    subtitle: 'Real-time updates on commodity prices.',
    headerImage: '/images/farming_slider_2_1778761298662.png',
    sections: [
      {
        type: 'table',
        badge: 'Live Data',
        title: 'Today\'s Commodity Rates',
        text: 'Daily price tracker for essential agricultural products.',
        headers: ['Commodity', 'Market', 'Price', 'Trend'],
        rows: [
          ['Wheat', 'Hamirpur Mandi', '₹2,450', 'up'],
          ['Rice', 'Lucknow Hub', '₹3,120', 'down'],
          ['Mustard', 'Samerpur Mandi', '₹5,600', 'up'],
        ]
      }
    ]
  },
  'weather-forecast': {
    title: 'Weather Forecast',
    subtitle: 'Localized weather insights.',
    headerImage: '/images/farming_slider_3_1778761321793.png',
    sections: [
      {
        type: 'weather-widget',
        badge: 'Local Climate',
        title: 'Region Forecast',
        text: 'Weather data optimized for agricultural planning.',
        forecast: [
          { day: 'Monday', temp: '32°C', condition: 'Sunny', icon: 'sun' },
          { day: 'Tuesday', temp: '30°C', condition: 'Partly Cloudy', icon: 'cloud-sun' },
          { day: 'Wednesday', temp: '28°C', condition: 'Light Rain', icon: 'cloud-rain' },
        ]
      }
    ]
  },
  'farming-calendar': {
    title: 'Monthly Farming Calendar',
    subtitle: 'Your 12-month guide to essential agricultural activities.',
    headerImage: '/images/farming_slider_4_1778761321793.png',
    mainTitle: 'Planning Your Agricultural Year',
    mainText: 'Success in farming depends on perfect timing. Our seasonal calendar helps you stay on track with land preparation, sowing, and harvesting based on Bundelkhand agro-climatic conditions.',
    sections: [
      {
        title: 'Seasonal Breakdown',
        type: 'timeline',
        items: [
          { month: 'Jan - Feb', title: 'Rabi Harvest Prep', desc: 'Monitoring wheat and mustard. Final irrigation before harvest.' },
          { month: 'Mar - Apr', title: 'Summer Crops', desc: 'Sowing moong and urad. Land preparation for Kharif season.' },
          { month: 'Jun - Jul', title: 'Kharif Sowing', desc: 'Major sowing period for rice, maize, and pulses with monsoon onset.' },
          { month: 'Oct - Nov', title: 'Rabi Sowing', desc: 'Sowing wheat, mustard, and gram. Soil health assessment.' }
        ]
      }
    ]
  },
  'planting-guide': {
    title: 'Expert Planting Guide',
    subtitle: 'Step-by-step guidance for high-yield crop cultivation.',
    headerImage: '/images/farming_hero_image_1778760478639.png',
    mainTitle: 'Scientific Crop Management',
    mainText: 'Every plant has its own needs. Our planting guide provides specific technical data for soil pH, water requirements, and fertilization schedules for top regional crops.',
    sections: [
      {
        title: 'Crop Specific Guidance',
        type: 'grid',
        items: [
          { title: 'Wheat (Gehu)', desc: 'Needs 5-6 irrigations. Soil pH 6.0-7.5. Ideal sowing: Nov 15-30.' },
          { title: 'Mustard (Sarson)', desc: 'Low water requirement. Needs sulfur-rich soil. Sowing: Oct 1-15.' },
          { title: 'Rice (Chawal)', desc: 'High water retention needed. Sowing: June 15 - July 15.' },
          { title: 'Pulses (Dal)', desc: 'Nitrogen-fixing plants. Minimal urea needed. Well-drained soil.' }
        ]
      }
    ]
  },
};
