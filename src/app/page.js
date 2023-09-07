'use client';

import React from 'react';
import Contact from '@/components/Contact/Contact';
import Accordion from '@/components/Accordion/Accordion';
import Blocks from '@/components/Blocks/Blocks';
import Section1 from '@/components/Section1/Section1';
import Section2 from '@/components/Section2/Section2';

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Section1 />
      <Blocks />
      <Section2 />
      <Contact />
      <Accordion />
    </div>
  );
}
