export function getDeviceFingerprint(): string {
    if (!process.client) {
        return '';
    }

    const stored = localStorage.getItem('device_fingerprint');
    if (stored) {
        return stored;
    }

    const fingerprint = [
        navigator.userAgent,
        navigator.language,
        screen.width,
        screen.height,
        screen.colorDepth,
        new Date().getTimezoneOffset(),
        !!window.sessionStorage,
        !!window.localStorage,
    ].join('|');

    const hash = Array.from(fingerprint)
        .reduce((hash, char) => {
            const chr = char.charCodeAt(0);
            hash = ((hash << 5) - hash) + chr;
            return hash & hash;
        }, 0)
        .toString(36);

    const deviceId = `fp_${hash}_${Date.now()}`;
    localStorage.setItem('device_fingerprint', deviceId);
    return deviceId;
}
