import { MapPin, AlertCircle } from 'lucide-react';

export default function ServiceAreaMap() {
  return (
    <section className="py-20 bg-background" id="service-area">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">Service Coverage Area</h2>
          <p className="text-lg text-muted-foreground">
            We provide EPC assessments throughout Hampshire. Southampton postcode area is included in our standard pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="w-full rounded-lg shadow-lg border border-border overflow-hidden bg-white p-4">
              <svg viewBox="0 0 600 500" className="w-full h-auto" style={{ minHeight: '400px' }}>
                {/* Hampshire County Background */}
                <defs>
                  <linearGradient id="hampshireGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#e0f2f1', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#b2dfdb', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                {/* Hampshire County Boundary */}
                <polygon 
                  points="100,80 200,60 300,70 380,100 420,150 430,220 420,300 380,380 300,420 200,430 120,400 80,350 70,250 80,150" 
                  fill="url(#hampshireGradient)" 
                  stroke="#1a4d2e" 
                  strokeWidth="2"
                />
                
                {/* Southampton Service Area - Green Polygon (larger coverage) */}
                <polygon 
                  points="220,140 280,130 310,160 320,220 310,280 260,310 200,290 180,220 190,160" 
                  fill="#22c55e" 
                  fillOpacity="0.35" 
                  stroke="#22c55e" 
                  strokeWidth="3"
                />
                
                {/* Reference Cities - Markers */}
                <circle cx="150" cy="100" r="5" fill="#1a4d2e" />
                <text x="150" y="90" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1a4d2e">Winchester</text>
                
                <circle cx="320" cy="90" r="5" fill="#1a4d2e" />
                <text x="320" y="80" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1a4d2e">Basingstoke</text>
                
                <circle cx="380" cy="130" r="5" fill="#1a4d2e" />
                <text x="380" y="120" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1a4d2e">Farnborough</text>
                
                <circle cx="290" cy="380" r="5" fill="#1a4d2e" />
                <text x="290" y="395" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1a4d2e">Portsmouth</text>
                
                {/* Southampton Center - Main Marker */}
                <circle cx="250" cy="210" r="7" fill="#ff6b35" stroke="#fff" strokeWidth="2" />
                <text x="250" y="240" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a4d2e">Southampton</text>
                <text x="250" y="255" textAnchor="middle" fontSize="10" fill="#666">(SO Postcodes)</text>
                
                {/* Legend Box */}
                <rect x="30" y="430" width="540" height="50" fill="#f5f5f5" stroke="#ccc" strokeWidth="1" rx="4" />
                
                {/* Legend - Green Area */}
                <polygon 
                  points="45,440 55,435 55,450" 
                  fill="#22c55e" 
                  stroke="#22c55e" 
                  strokeWidth="2"
                />
                <text x="65" y="445" fontSize="11" fill="#1a4d2e"><tspan fontWeight="bold">Green Area:</tspan> Southampton Postcodes (SO14-SO97)</text>
                
                {/* Legend - Extended Coverage */}
                <rect x="350" y="440" width="8" height="8" fill="#e0f2f1" stroke="#1a4d2e" strokeWidth="1" />
                <text x="365" y="445" fontSize="11" fill="#1a4d2e"><tspan fontWeight="bold">Light Blue:</tspan> Extended Coverage (Additional charges apply)</text>
                
                <text x="45" y="465" fontSize="10" fill="#666">Standard pricing applies within the green area. For properties outside, please contact us for a travel quote.</text>
              </svg>
            </div>
            <p className="text-sm text-muted-foreground mt-3 text-center">
              <strong>Green polygon:</strong> Southampton postcode area (SO14, SO15, SO16, SO17, SO18, SO19, SO20, SO21, SO22, SO23, SO24, SO25, SO30, SO31, SO32, SO40, SO41, SO42, SO43, SO45, SO50, SO51, SO52, SO53, SO97) with standard pricing
            </p>
          </div>

          {/* Info Panels */}
          <div className="space-y-6">
            {/* Southampton Panel */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                <h3 className="font-heading font-bold text-lg text-primary">Southampton</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">SO postcode area</p>
              <p className="text-sm text-foreground mb-4">
                Standard pricing applies to all properties within the Southampton postcode area (SO14-SO97 as listed).
              </p>
              <div className="inline-flex items-center gap-2 bg-chart-1/10 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-chart-4" />
                <span className="text-xs font-semibold text-chart-4">Included in pricing</span>
              </div>
            </div>

            {/* Outside Southampton Panel */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <h3 className="font-heading font-bold text-lg text-primary">Outside Southampton</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Other Hampshire areas</p>
              <p className="text-sm text-foreground mb-4">
                For properties outside the Southampton postcode area, additional travel and fuel costs may apply. Please contact us for a quote.
              </p>
              <button className="text-sm font-semibold text-chart-1 hover:text-chart-4 transition-colors">
                → Request a quote
              </button>
            </div>

            {/* Quick Contact Panel */}
            <div className="bg-primary text-primary-foreground rounded-lg p-6 shadow-md">
              <h3 className="font-heading font-bold text-lg mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs opacity-80 mb-1">Phone:</p>
                  <a href="tel:07966196459" className="text-sm font-semibold hover:opacity-80 transition-opacity">
                    07966 196459
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-border">
          <div>
            <h3 className="font-heading font-bold text-lg text-primary mb-3">Standard Pricing Area</h3>
            <p className="text-muted-foreground">
              The Southampton postcode area (SO14 through SO97 as specified) is our primary service area where standard pricing applies. This includes central Southampton, surrounding suburbs, and nearby residential areas.
            </p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-primary mb-3">Extended Coverage</h3>
            <p className="text-muted-foreground">
              We also serve other areas of Hampshire including Winchester, Basingstoke, Farnborough, and surrounding regions. Travel charges may apply depending on distance from Southampton.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
