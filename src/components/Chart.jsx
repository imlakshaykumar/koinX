import { useEffect, useRef, memo } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
function Chart() {
    const container = useRef();
    useEffect(
        () => {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
            {
                "autosize": true,
            "symbol": "NASDAQ:AAPL",
            "interval": "W",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "1",
            "locale": "en",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "calendar": false,
            "support_host": "https://www.tradingview.com"
        }`;
            container.current.appendChild(script);
        },
        []
    );
    return (
        <>
            <div className="tradingview-widget-container" ref={ container } style={ { height: "100%", width: "100%" } }>
                <div className="tradingview-widget-container__widget" style={ { height: "calc(100% - 32px)", width: "100%" } }></div>
                <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
            </div>  export default memo(TradingViewWidget);
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Chart);
