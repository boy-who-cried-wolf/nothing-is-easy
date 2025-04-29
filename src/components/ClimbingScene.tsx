import React from 'react';
import climber1 from '../images/Screenshot_17.png';
import climber2 from '../images/Screenshot_18.png';

const ClimbingScene: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden modern-gradient">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles */}
        <div className="floating-circle circle-1 absolute -top-[200px] -left-[200px]" />
        <div className="floating-circle circle-2 absolute top-[40%] -right-[300px]" />
        <div className="floating-circle circle-3 absolute -bottom-[250px] left-[20%]" />
        
        {/* Additional blur circles for depth */}
        <div className="blur-circle pulse-circle absolute w-72 h-72 top-[20%] left-[30%]"
             style={{
               background: 'radial-gradient(circle, rgba(165, 180, 252, 0.4) 0%, rgba(165, 180, 252, 0.1) 70%)',
               animationDelay: '-5s'
             }} />
        <div className="blur-circle pulse-circle absolute w-96 h-96 bottom-[30%] right-[25%]"
             style={{
               background: 'radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, rgba(147, 197, 253, 0.1) 70%)',
               animationDelay: '-8s'
             }} />
        <div className="blur-circle pulse-circle absolute w-64 h-64 top-[60%] left-[15%]"
             style={{
               background: 'radial-gradient(circle, rgba(167, 243, 208, 0.3) 0%, rgba(167, 243, 208, 0.1) 70%)',
               animationDelay: '-12s'
             }} />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-12 md:py-20">
        {/* Text Section */}
        <div className="relative z-20 max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-slate-800 text-center opacity-0 animate-fade-in">
              <span className="slogan-text inline-block">Nothing</span>{' '}
              <span className="slogan-text inline-block">is</span>{' '}
              <span className="slogan-text inline-block">easy,</span>
            </h1>
            <div className="text-3xl md:text-5xl lg:text-6xl font-normal text-slate-800 text-center opacity-0 animate-slide-in-left" 
                 style={{ animationDelay: '0.3s' }}>
              <span className="slogan-text inline-block">so</span>{' '}
              <span className="slogan-text inline-block">just</span>{' '}
              <span className="slogan-text inline-block">keep</span>{' '}
              <span className="slogan-text inline-block">trying</span>
            </div>
            <div className="text-3xl md:text-5xl lg:text-6xl font-normal text-slate-800 text-center opacity-0 animate-slide-in-right"
                 style={{ animationDelay: '0.6s' }}>
              <span className="slogan-text inline-block">and</span>{' '}
              <span className="slogan-text inline-block">you</span>{' '}
              <span className="slogan-text inline-block">will</span>{' '}
              <span className="slogan-text inline-block">get</span>
            </div>
            <div className="text-3xl md:text-5xl lg:text-6xl font-normal text-slate-800 text-center opacity-0 animate-slide-up"
                 style={{ animationDelay: '0.9s' }}>
              <span className="slogan-text inline-block">there.</span>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="image-grid relative z-20">
          {/* First Image - Climber */}
          <div className="image-container opacity-0 animate-scale-in" style={{ animationDelay: '1.2s' }}>
            <div className="image-hover-effect rounded-lg overflow-hidden">
              <img 
                src={climber1} 
                alt="Climber silhouette" 
                className="w-full h-full object-cover"
              />
              <div className="image-overlay" />
              <div className="image-caption">
                <p className="text-lg font-semibold">Start Climbing</p>
                <p className="text-sm opacity-75">Every journey begins with a first step</p>
              </div>
            </div>
          </div>

          {/* Second Image - Achievement */}
          <div className="image-container opacity-0 animate-scale-in" style={{ animationDelay: '1.5s' }}>
            <div className="image-hover-effect rounded-lg overflow-hidden">
              <img 
                src={climber2} 
                alt="Climber achievement" 
                className="w-full h-full object-cover"
              />
              <div className="image-overlay" />
              <div className="image-caption">
                <p className="text-lg font-semibold">Reach the Summit</p>
                <p className="text-sm opacity-75">Your goals are within reach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimbingScene; 