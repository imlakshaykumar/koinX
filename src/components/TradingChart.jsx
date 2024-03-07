import { useEffect, useRef, useState } from 'react';

export const TradingChart = () => {
    const container = useRef();
    const [scriptAppended, setScriptAppended] = useState(false);

    useEffect(() => {
        // Check if the chart script has already been appended
        if (!scriptAppended) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
                {
                  "autosize": true,
                  "symbol": "CRYPTO:BTCUSD",
                  "interval": "W",
                  "timezone": "Etc/UTC",
                  "theme": "light",
                  "style": "3",
                  "locale": "en",
                  "enable_publishing": false,
                  "allow_symbol_change": true,
                  "calendar": false,
                  "support_host": "https://www.tradingview.com"
                }`;

            // Remove any existing scripts before appending a new one
            const existingScripts = container.current.querySelectorAll('script');
            existingScripts.forEach(script => script.remove());

            container.current.appendChild(script);
            setScriptAppended(true);
        }
    }, [scriptAppended]);

    return (
        <div className="tradingview-widget-container" style={ { height: "500px", width: "100%" } }>
            <div className="tradingview-widget-container__widget h-[500px]" ref={ container }></div>
            {/* <div className="tradingview-widget-copyrigh text-center">
                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                    <span className="blue-text">Track all markets on TradingView</span>
                </a>
            </div> */}
        </div>
    );
}
