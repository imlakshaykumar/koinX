import { useEffect, useRef } from 'react';

export const Overview = () => {
    const containerRef = useRef();

    useEffect(() => {
        // Check if the script has already been appended
        if (!containerRef.current.querySelector('script')) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
                {
                  "height": 523,
                  "defaultColumn": "overview",
                  "defaultScreen": "earnings_this_week",
                  "market": "america",
                  "showToolbar": true,
                  "colorTheme": "light",
                  "locale": "en"
                }`;

            containerRef.current.appendChild(script);
        }
    }, []);

    return (
        <div className="tradingview-widget-container bg-white p-4 rounded-xl mb-4">
            <div className="tradingview-widget-container__widget" ref={ containerRef }></div>
        </div>
    );
}
