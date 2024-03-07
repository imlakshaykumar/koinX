import { useEffect } from 'react';

export const TradingWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbol": "CRYPTOCAP:BTC",
            "width": '100%',
            "locale": "en",
            "colorTheme": "light",
            "isTransparent": false
        });
        document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);

        return () => {
            document.getElementsByClassName('tradingview-widget-container__widget')[0].innerHTML = '';
        };
    }, []);

    return (
        <div className="tradingview-widget-container border-b border-[#cacace] pb-6 mb-6">
            <div className="tradingview-widget-container__widget"></div>
            {/* <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                    <span className="blue-text">Track all markets on TradingView</span>
                </a>
            </div> */}
            {/* <div className="tradingview-24h-change">(24H change)</div> */ }
        </div>
    );
};
