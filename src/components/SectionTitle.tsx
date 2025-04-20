import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  align = 'center' 
}) => {
  return (
    <div className={`mb-12 ${
      align === 'center' ? 'text-center' : 
      align === 'right' ? 'text-right' : 'text-left'
    }`}>
      <h2 className="section-title inline-block text-3xl font-bold">
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;