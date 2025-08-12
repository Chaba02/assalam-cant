import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCAyNSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMEMxOS40MDM2IDAgMjUgNS41OTY0NCAyNSAxMi41QzI1IDE5LjQwMzYgMTkuNDAzNiAyNSAxMi41IDI1QzUuNTk2NDQgMjUgMCAxOS40MDM2IDAgMTIuNUMwIDUuNTk2NDQgNS41OTY0NCAwIDEyLjUgMFoiIGZpbGw9IiMzRjgyRjciLz4KPHA+PC9zdmc+',
  iconUrl:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCAyNSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMEMxOS40MDM2IDAgMjUgNS41OTY0NCAyNSAxMi41QzI1IDE5LjQwMzYgMTkuNDAzNiAyNSAxMi41IDI1QzUuNTk2NDQgMjUgMCAxOS40MDM2IDAgMTIuNUMwIDUuNTk2NDQgNS41OTY0NCAwIDEyLjUgMFoiIGZpbGw9IiMzRjgyRjciLz4KPHA+PC9zdmc+',
  shadowUrl: undefined,
});

interface ChappMapProps {
  className?: string;
}

const ChappMap: React.FC<ChappMapProps> = ({ className = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Coordinate approssimate Novaresin S.p.A., Nibionno (LC)
    const nibionnoCoords: [number, number] = [45.7587, 9.3205];

    // Initialize map
    const map = L.map(mapRef.current, {
      center: nibionnoCoords,
      zoom: 14,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      dragging: true,
      touchZoom: false,
    });

    // Minimal tile layer (Carto Light)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    // Custom marker icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div class="w-6 h-6 bg-chapp-accent-blue rounded-full border-2 border-white shadow-lg animate-pulse relative">
          <div class="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    // Add marker with custom popup
    L.marker(nibionnoCoords, { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div class="p-4 bg-chapp-dark-card text-chapp-white rounded-lg border border-chapp-dark-border/30 shadow-lg max-w-xs">
          <h3 class="font-semibold mb-2 text-lg">Novaresin S.p.A.</h3>
          <p class="text-sm text-chapp-gray-300 leading-relaxed">
            Via Montegrappa, 28<br/>
            23895 Nibionno (LC), Italy<br/>
            P.IVA: 00230560138<br/>
            Tel: 031 690.703
          </p>
        </div>
      `)
      .openPopup();

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={mapRef}
        className="w-full h-full rounded-2xl overflow-hidden border border-chapp-dark-border/30 bg-chapp-dark-card"
        style={{ minHeight: '400px' }}
      />
      {/* Overlay for subtle gradient effect */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-t from-chapp-dark-bg/20 to-transparent"></div>
    </div>
  );
};

export default ChappMap;
