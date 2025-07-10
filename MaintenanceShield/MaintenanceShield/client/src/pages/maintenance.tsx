import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Settings } from "lucide-react";
import { useState, useEffect } from "react";
import discordLogo from "@assets/discord logo_1752150103553.png";

export default function MaintenancePage() {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    // Try to load user-provided logo
    const checkForUserLogo = async () => {
      const extensions = ['png', 'jpg', 'jpeg', 'svg'];
      
      for (const ext of extensions) {
        try {
          const response = await fetch(`/user_assets/background-logo.${ext}`);
          if (response.ok) {
            setLogoUrl(`/user_assets/background-logo.${ext}`);
            return;
          }
        } catch (error) {
          // Continue to next extension
        }
      }
    };

    checkForUserLogo();
  }, []);

  const handleDiscordRedirect = () => {
    window.open("https://discord.gg/zRwZS6pRZ3", "_blank", "noopener noreferrer");
  };

  return (
    <div className="relative min-h-screen bg-primary text-white overflow-hidden">
      {/* Background Logo - Top Left */}
      {logoUrl && (
        <div className="fixed top-90 left-90 pointer-events-none opacity-10 z-[6]">
          <img 
            src={logoUrl} 
            alt="Background Logo" 
            className="w-[100vw] h-[90vh] object-contain"
          />
        </div>
      )}
      
      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center animate-fade-in">
          
          {/* Header Section */}
          <div className="mb-12 animate-slide-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Site Under Maintenance
              </span>
            </h1>
          </div>

          {/* Maintenance Message */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-12 animate-slide-up delay-200">
            <CardContent className="p-8 md:p-10">
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                  Due to many people accessing/leaking the site before it was ready and being weird, I will be taking this down and launching when it's completely ready and secure.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                  Keep posted in the <span className="text-discord font-semibold">ranked crib</span> for the announcement of when it's up.
                </p>
                <p className="text-base md:text-lg text-gray-300">
                  Thank you to those that helped, <span className="font-semibold text-white">piston</span> and <span className="font-semibold text-white">jack94</span>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Discord CTA */}
          <div className="animate-slide-up delay-400">
            <p className="text-gray-300 mb-6 text-lg">Join our Discord community for updates</p>
            
            <div
              onClick={handleDiscordRedirect}
              className="group cursor-pointer inline-flex items-center overflow-hidden rounded-2xl 
                         transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                         hover:shadow-discord/40 animate-pulse-slow"
            >
              {/* Discord Logo Section */}
              <div className="bg-white p-4 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-100">
                <img 
                  src={discordLogo} 
                  alt="Discord" 
                  className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              
              {/* Text Section */}
              <div className="bg-discord hover:bg-discord-hover px-8 py-4 text-white font-bold text-lg 
                              transition-all duration-300 flex items-center gap-3 group-hover:pr-10">
                <span>JOIN MY SERVER!</span>
                <div className="flex flex-col text-sm opacity-80">
                  <span className="font-normal">discord.gg/zRwZS6pRZ3</span>
                </div>
                <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 opacity-70" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-6 text-center">
        <p className="text-gray-400 text-sm">
          © 2024 The Rac's. All rights reserved.
        </p>
      </div>
    </div>
  );
}
