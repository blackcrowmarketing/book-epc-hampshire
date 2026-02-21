import { useRef, useEffect } from 'react';
import { MapView } from './Map';
import { MapPin, AlertCircle } from 'lucide-react';

export default function ServiceAreaGoogleMap() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const polygonRef = useRef<google.maps.Polygon | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;

    // Southampton postcode area polygon - accurate boundaries for SO14-SO53
    const southamptonPolygonCoords: google.maps.LatLngLiteral[] = [
      { lat: 51.1800, lng: -1.5500 },
      { lat: 51.1900, lng: -1.4500 },
      { lat: 51.2000, lng: -1.3500 },
      { lat: 51.1900, lng: -1.2500 },
      { lat: 51.1700, lng: -1.1500 },
      { lat: 51.1200, lng: -1.0800 },
      { lat: 51.0500, lng: -1.0500 },
      { lat: 50.9800, lng: -1.0300 },
      { lat: 50.9200, lng: -1.0400 },
      { lat: 50.8500, lng: -1.0600 },
      { lat: 50.8000, lng: -1.1000 },
      { lat: 50.7500, lng: -1.1500 },
      { lat: 50.7200, lng: -1.3000 },
      { lat: 50.7300, lng: -1.4000 },
      { lat: 50.7400, lng: -1.5000 },
      { lat: 50.7500, lng: -1.6000 },
      { lat: 50.8000, lng: -1.6500 },
      { lat: 50.8500, lng: -1.6800 },
      { lat: 50.9200, lng: -1.7000 },
      { lat: 50.9800, lng: -1.6800 },
      { lat: 51.0400, lng: -1.6500 },
      { lat: 51.1000, lng: -1.6000 },
      { lat: 51.1500, lng: -1.5500 },
    ];

    // Polygon removed - keeping map clean

    // Add Southampton city center marker
    new window.google.maps.Marker({
      map: map,
      position: { lat: 50.9097, lng: -1.4044 },
      title: 'Southampton City Center',
    });

    // Add reference city markers
    const referenceMarkers = [
      { position: { lat: 51.0635, lng: -1.3084 }, title: 'Winchester' },
      { position: { lat: 51.2768, lng: -1.0896 }, title: 'Basingstoke' },
      { position: { lat: 51.2081, lng: -0.7569 }, title: 'Farnborough' },
      { position: { lat: 50.8158, lng: -1.0905 }, title: 'Portsmouth' },
    ];

    referenceMarkers.forEach((marker) => {
      new window.google.maps.Marker({
        map: map,
        position: marker.position,
        title: marker.title,
      });
    });

    // Create info window for Southampton
    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 12px; font-family: Arial, sans-serif;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Southampton Service Area</h3>
          <p style="margin: 0 0 6px 0; font-size: 13px;">Standard pricing applies to all properties within the Southampton postcode area (SO14-SO53).</p>
          <p style="margin: 0; font-size: 12px; color: #666;">For properties outside this area, additional travel charges may apply.</p>
        </div>
      `,
      position: { lat: 50.9097, lng: -1.4044 },
    });

    infoWindow.open(map);
  };

  return (
    <section className="py-20 bg-background" id="service-area">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">EPC Service Coverage Across Hampshire</h2>
          <p className="text-lg text-muted-foreground">
            We provide EPC assessments throughout Hampshire. Southampton postcode area is included in our standard pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="w-full rounded-lg shadow-lg border border-border overflow-hidden">
              <MapView
                initialCenter={{ lat: 50.9097, lng: -1.4044 }}
                initialZoom={13}
                onMapReady={handleMapReady}
                className="w-full h-96 lg:h-[500px]"
              />
            </div>
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
                Standard pricing applies to all properties within the Southampton postcode area (SO14-SO53).
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
              <h3 className="font-heading font-bold text-2xl mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-base opacity-80 mb-2 font-semibold">Call or Text:</p>
                  <a href="tel:07966196459" className="text-4xl font-bold hover:opacity-80 transition-opacity">
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
              The Southampton postcode area (SO14 through SO53) is our primary service area where standard pricing applies. This includes central Southampton, surrounding suburbs, and nearby residential areas.
            </p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-primary mb-3">Extended Coverage</h3>
            <p className="text-muted-foreground">
              We serve all areas of Hampshire; travel charges may apply depending on the distance from Southampton.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
