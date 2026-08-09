/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ContactCard } from './components/ContactCard';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#49382F] font-sans flex flex-col justify-between selection:bg-[#E6C89B]/40 selection:text-[#49382F]">
      <div>
        <Header />
        <main id="main-content">
          <Hero />
          <ContactCard />
        </main>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

