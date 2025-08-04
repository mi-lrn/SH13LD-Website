import { motion } from 'framer-motion'
import { Shield, ArrowDown, Github, Heart, Lock, Database, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CyberBackground from '@/components/CyberBackground'
import Navigation from '@/components/Navigation'
import Shield3D from '@/components/Shield3D'
import FeatureCard from '@/components/FeatureCard'
import StatCounter from '@/components/StatCounter'
import KoFiButton from '@/components/KoFiButton'
import DownloadButton from '@/components/DownloadButton'
import CyberButton from '@/components/CyberButton'
import GlowIcon from '@/components/GlowIcon'
import KoFiArrow from '@/components/KoFiArrow'

const Index = () => {
  const scrollToDownloads = () => {
    document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' })
  }

  const openGitHub = () => {
    window.open('https://github.com/mi-lrn/SH13LDME', '_blank')
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CyberBackground />
      <Navigation extraTabs={[{ label: 'Documentation', icon: Database }]} />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="container mx-auto relative" style={{overflow: 'visible'}}>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24 relative" style={{overflow: 'visible'}}>
            {/* Left: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left z-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent cyber-glow-text drop-shadow-lg"
              >
                <span className="cyber-glow-flicker">SH13LDME©</span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl font-semibold mb-4 text-primary drop-shadow"
              >
                Windows Security & Privacy Tool
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl drop-shadow"
              >
                All-in-one security and privacy editor for Windows 10 & 11
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col items-center"
              >
                <div className="flex gap-6 flex-wrap justify-center">
                  <CyberButton onClick={scrollToDownloads} variant="primary">
                    <ArrowDown size={20} />
                    <span style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 255, 191, 0.3)' }}>
                      Download Now
                    </span>
                  </CyberButton>
                  
                  <CyberButton onClick={openGitHub} variant="secondary">
                    <Github size={20} />
                    <span style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8), 0 0 8px rgba(12, 139, 97, 0.3)' }}>
                      View on GitHub
                    </span>
                  </CyberButton>
                </div>
                
                <div style={{ transform: 'scale(0.65)', marginTop: '15px' }}>
                  <KoFiButton />
                </div>
              </motion.div>
            </div>
            
            {/* Right: 3D Shield */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex items-center justify-center min-h-[12rem] lg:min-h-[28rem] mt-12 lg:mt-0"
            >
              <div className="relative flex-1 flex items-center justify-center">
                <Shield3D />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
                  <div className="w-40 h-16 bg-cyber-glow opacity-10 rounded-full blur-2xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24">
            <StatCounter
              value="100+"
              label="Security Endpoints"
              delay={0.2}
              icon={<Lock size={32} />}
            />
            <StatCounter
              value="9"
              label="Categories"
              delay={0.4}
              icon={<Database size={32} />}
            />
            <StatCounter
              value="Free"
              label="Open Source"
              delay={0.6}
              icon={<Github size={32} />}
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-28 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-foreground"
          >
            Powerful Security Features
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              title="Core Features"
              icon={<Lock size={24} />}
              items={[
                "Security Management",
                "Privacy Protection", 
                "Dependency Management",
                "User Friendly"
              ]}
              delay={0.2}
            />
            <FeatureCard
              title="Technical Highlights"
              icon={<Database size={24} />}
              items={[
                "100+ Endpoints",
                "Windows 10 & 11 Compatible",
                "Search Functionality",
                "Backup & Restore Functionality"
              ]}
              delay={0.4}
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-28 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Secure Your Windows System Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join users who trust SH13LDME© to protect their privacy and enhance their system security.
            </p>
            
            <CyberButton onClick={scrollToDownloads} variant="cta" size="lg">
              <ArrowDown size={24} className="group-hover:animate-bounce" />
              <span className="font-black" style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.9), 0 0 12px rgba(0, 255, 191, 0.4), 0 0 8px rgba(12, 139, 97, 0.3)'
              }}>
                Get Started
              </span>
            </CyberButton>
          </motion.div>
        </div>
      </section>
      
      {/* Downloads Section */}
      <section id="downloads" className="py-36 pb-5 relative mt-20">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <motion.div 
            className="mb-12 flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlowIcon icon={<Download size={48} />} />
            <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-cyber-glow via-white to-cyber-glow bg-clip-text">
              Downloads
            </h2>
          </motion.div>
          
                      <div className="w-full flex flex-col items-center max-w-xl mx-auto space-y-3 sm:space-y-4 px-2 sm:px-4">
              <DownloadButton href="https://github.com/mi-lrn/SH13LDME/releases/download/v1.0.0/SH13LDME-Setup-x64.exe">
                Download SH13LDME© v1 (x64)
              </DownloadButton>
              
              <DownloadButton href="https://github.com/mi-lrn/SH13LDME/releases/download/v1.0.0/SH13LDME-Setup-arm64.exe">
                Download SH13LDME© v1 (arm64)
              </DownloadButton>
              
              <DownloadButton href="https://github.com/mi-lrn/SH13LDME/releases/download/v1.0.0/SH13LDME-Setup-ia32.exe">
                Download SH13LDME© v1 (ia32)
              </DownloadButton>
          </div>
        </div>
      </section>
      
      {/* Ko-Fi Section */}
      <div className="relative flex flex-col items-center mt-0.5">
        <span
          id="kofi-support-text"
          className="text-2xl text-[#29abe0] drop-shadow-sm select-none pb-2"
          style={{ fontFamily: 'Gaegu, cursive', fontWeight: 700 }}
        >
          Did our program help you?
        </span>
        <KoFiArrow />
        <KoFiButton />
      </div>
      
      {/* Footer */}
      <footer className="py-16 border-t border-border relative mt-[10rem]">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">SH13LDME©</h3>
              <p className="text-muted-foreground text-sm">
                Advanced Windows security and privacy configuration tool.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">License</h3>
              <p className="text-muted-foreground text-sm">
                MIT License
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Community</h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm">
                  <a href="https://github.com/mi-lrn/SH13LDME" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 rounded-full hover:bg-[#29abe0]/90">
                    <Github size={16} />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://ko-fi.com/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 rounded-full hover:bg-[#29abe0]/90">
                    <img src={import.meta.env.BASE_URL + 'kofi_logo.png'} alt="Ko-fi" width={16} height={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            © 2025 async-wei & mi-lrn
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
