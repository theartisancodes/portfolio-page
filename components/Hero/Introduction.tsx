import React from 'react';
import { introductionTexts } from '@/assets';

const Introduction: React.FC = () => {
  return (
    <div className="text-center space-y-3">
      <h1 className="text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl dark:text-white transition-colors">
        👋 Hi, I’m {introductionTexts.personName}
      </h1>
      <p className="text-lg tracking-wider text-gray-700 dark:text-gray-200 transition-colors sm:text-xl">
        💻 {introductionTexts.role}
      </p>
      <p className="text-lg tracking-wider text-gray-700 dark:text-gray-200 transition-colors sm:text-xl">
        🚀 {introductionTexts.description}
      </p>
      <p className="text-lg tracking-wider text-gray-700 dark:text-gray-200 transition-colors sm:text-xl">
        🎯 Looking for an experienced developer?
        <br />
        🔗 Let’s Connect!
      </p>
    </div>
  );
};

export default Introduction;
